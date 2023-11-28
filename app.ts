import { walkSync } from "https://deno.land/std/fs/mod.ts";
import { green, red, yellow } from "https://deno.land/std/fmt/colors.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

// Get the current directory
const currentDirectory = Deno.cwd();

// Define the combined file name
const combinedFileName = "combined.json";

// Function to read and combine JSON files
async function combineJsonFiles(directory: string, selectedFiles: string[]) {
  let combinedData: any[] = [];

  for (const entry of walkSync(directory)) {
    if (entry.isFile && entry.name.endsWith(".json")) {
      const fileName = entry.name.replace(".json", "");

      // Check if the file is in the list of selected files
      if (!selectedFiles.includes(fileName)) {
        continue;
      }

      try {
        const jsonData = JSON.parse(await Deno.readTextFile(entry.path));
        combinedData = combinedData.concat(jsonData);

        Deno.stdout.writeSync(new TextEncoder().encode("\r"));
        console.log(green(`✔ Combined ${fileName}.json`));
      } catch (error) {
        console.error(red(`✘ Error combining ${fileName}.json:`));
        console.error(red(`  ${error.message}`));
      }
    }
  }

  return combinedData;
}

// Get a list of available files (excluding combined.json and .deno files)
const availableFiles = getAvailableFiles(currentDirectory).filter((file) =>
  file !== combinedFileName.replace(".json", "")
);

// Parse command-line arguments
const { all, help } = parse(Deno.args);

if (help) {
  console.log(
    "Usage: deno run --allow-read --allow-write your_script.ts [OPTIONS]",
  );
  console.log("Options:");
  console.log("  --all            Combine all available files (default: No)");
  Deno.exit(0);
}

// Determine whether to combine all files
let selectedFiles: string[] | undefined;

if (all) {
  selectedFiles = availableFiles;
} else {
  const answer = await promptToCombineAll();
  selectedFiles = answer
    ? availableFiles
    : await promptToSelectFiles(availableFiles);
}

if (!selectedFiles || !selectedFiles.length) {
  console.error(red("No files selected for combining."));
  Deno.exit(1);
}

const combinedJsonData = await combineJsonFiles(
  currentDirectory,
  selectedFiles,
);

await Deno.writeTextFile(
  combinedFileName,
  JSON.stringify(combinedJsonData, null, 2),
);

console.log(yellow(`\n✨ Datasets combined to ${combinedFileName}`));

// Function to get a list of available files (excluding specific files)
function getAvailableFiles(directory: string): string[] {
  const files: string[] = [];

  const datasetsDirectory = `${directory}/datasets`;

  for (const entry of walkSync(datasetsDirectory)) {
    if (entry.isFile && entry.name.endsWith(".json")) {
      const fileName = entry.name.replace(".json", "");
      files.push(fileName);
    }
  }

  return files.sort(); // Sort files alphabetically
}

// Function to prompt the user if they want to combine all files
async function promptToCombineAll(): Promise<boolean> {
  const response = await getUserInput("Combine all available files? (Y/n): ");

  if (response.toLowerCase() === "y") {
    return true;
  } else if (response.toLowerCase() === "n") {
    return false;
  } else {
    console.error(red("Invalid input. Please enter 'Y' (yes) or 'N' (no)."));
    Deno.exit(1);
  }
}

// Function to prompt the user to select files to include
async function promptToSelectFiles(
  availableFiles: string[],
): Promise<string[]> {
  console.log("Available files to include (in alphabetical order):\n");

  for (let i = 0; i < availableFiles.length; i++) {
    const formattedIndex = yellow(`${(i + 1).toString().padStart(2, " ")}) `);
    console.log(`${formattedIndex}${availableFiles[i]}`);
  }

  const selectedFilesInput = await getUserInput(
    "\nSelect files by entering their numbers (space-separated): ",
  );
  const selectedFileNumbers = selectedFilesInput
    .split(" ")
    .map((str) => parseInt(str) - 1)
    .filter((index) => index >= 0 && index < availableFiles.length);

  const selectedFiles = selectedFileNumbers.map((index) =>
    availableFiles[index]
  ).filter(Boolean);

  return selectedFiles;
}

// Function to get user input
async function getUserInput(prompt: string): Promise<string> {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(prompt));
  const n = <number> await Deno.stdin.read(buf);
  const input = new TextDecoder().decode(buf.subarray(0, n)).trim();

  if (input === "") {
    return "Y"; // Default to "Y" when Enter is pressed with an empty input
  }

  return input.toLowerCase();
}
