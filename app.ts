// GPT wrote this
import { walkSync } from "https://deno.land/std/fs/mod.ts";
import { green, red, yellow } from "https://deno.land/std/fmt/colors.ts";

// Get the current directory
const currentDirectory = Deno.cwd();

// Function to read and combine JSON files
async function combineJsonFiles(directory: string) {
  // Initialize an empty array to store the combined JSON data
  let combinedData: any[] = [];

  // Iterate through files in the directory
  for (const entry of walkSync(directory)) {
    if (entry.isFile && entry.name.endsWith(".json")) {
      try {
        // Read and parse JSON data from the file
        const jsonData = JSON.parse(await Deno.readTextFile(entry.path));

        // Merge the JSON data into the combined array
        combinedData = combinedData.concat(jsonData);

        console.log(green(`✔ ${entry.name}`));
      } catch (error) {
        console.error(red(`✘ Error parsing ${entry.name}, skipping...`));
      }
    }
  }

  // Return the combined JSON data
  return combinedData;
}

// Call the function to combine JSON files
const combinedJsonData = await combineJsonFiles(currentDirectory);

// Write the combined JSON data to a new file
await Deno.writeTextFile("combined.json", JSON.stringify(combinedJsonData, null, 2));

console.log(yellow("\n📦 Datasets combined to combined.json"));
