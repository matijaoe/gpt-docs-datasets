# GPT Docs Datasets

Leverage these datasets to build your custom GPT 🤖 

Made possible by [gpt-crawler](https://github.com/BuilderIO/gpt-crawler) 🙏🏻


### Available Datasets
*sorted alphabetically*


| Documentation site                                           | JSON Dataset                                              |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| [Astro](https://docs.astro.build)                            | [astro.json](./datasets/astro.json)                       |
| [Drizzle](https://drizzlejs.com)                             | [drizzle.json](./datasets/drizzle.json)                   |
| [Formkit](https://formkit.com)                               | [formkit.json](./datasets/formkit.json)                   |
| [Headless UI](https://headlessui.dev)                        | [headlessui-react.json](./datasets/headlessui-react.json) |
| [Headless UI](https://headlessui.dev)                        | [headlessui-vue.json](./datasets/headlessui-vue.json)     |
| [Histoire](https://histoire.netlify.app)                     | [histoire.json](./datasets/histoire.json)                 |
| [h3](https://www.jsdocs.io/package/h3)                       | [h3.json](./datasets/h3.json)                             |
| [JavaScript.info](https://javascript.info)                   | [javascript-info.json](./datasets/javascript-info.json)   |
| [Kysely](https://kyselyjs.com)                               | [kysely.json](./datasets/kysely.json)                     |
| [Nitro](https://nitro.unjs.io)                               | [nitro.json](./datasets/nitro.json)                       |
| [Nuxt Content](https://content.nuxtjs.org)                   | [nuxt-content.json](./datasets/nuxt-content.json)         |
| [Nuxt Image](https://image.nuxt.com)                         | [nuxt-image.json](./datasets/nuxt-image.json)             |
| [Nuxt UI](https://ui.nuxt.com/)                              | [nuxt-ui.json](./datasets/nuxt-ui.json)                   |
| [Nuxt](https://nuxt.com)                                     | [nuxt.json](./datasets/nuxt.json)                         |
| [ofetch](https://www.jsdocs.io/package/ofetch)               | [ofetch.json](./datasets/ofetch.json)                     |
| [Radash](https://radash.netlify.app)                         | [radash.json](./datasets/radash.json)                     |
| [React](https://react.dev)                                   | [react.json](./datasets/react.json)                       |
| [Shadcn Vue](https://shadcn-vue.com)                         | [shadcn.json](./datasets/shadcn-vue.json)                 |
| [Slidev](https://slidev.dev)                                 | [slider.json](./datasets/slidev.json)                     |
| [SvelteKit](https://kit.svelte.dev)                          | [sveltekit.json](./datasets/sveltekit.json)               |
| [Svelte](https://svelte.dev)                                 | [svelte.json](./datasets/svelte-4.json)                   |
| [TanStack Query • React](https://tanstack.com/query)         | [tanstack.json](./datasets/tanstack-query-react-v5.json)  |
| [TanStack Query • Svelte](https://tanstack.com/query/svelte) | [tanstack.json](./datasets/tanstack-query-svelte-v5.json) |
| [TanStack Query • Vue](https://tanstack.com/query/vue)       | [tanstack.json](./datasets/tanstack-query-vue-v5.json)    |
| [Tailwind CSS](https://tailwindcss.com)                      | [tailwindcss.json](./datasets/tailwindcss.json)           |
| [TypeScript](https://www.typescriptlang.org)                 | [typescript.json](./datasets/typescript.json)             |
| [UnJS](https://unjs.io)                                      | [unjs.json](./datasets/unjs.json)                         |
| [Unstorage](https://unstorage.unjs.io)                       | [unstorage.json](./datasets/unstorage.json)               |
| [VeeValidate](https://vee-validate.logaretm.com/v4)          | [vee-validate.json](./datasets/vee-validate.json)         |
| [Vitest](https://vitest.dev)                                 | [vite.json](./datasets/vitest.json)                       |
| [Vite](https://vitejs.dev/)                                  | [vite.json](./datasets/vite.json)                         |
| [Vue Macros](https://vue-macros.dev/)                        | [vue-macros.json](./datasets/vue-macros.json)             |
| [Vue Router](https://router.vuejs.org/)                      | [vue-router.json](./datasets/vue-router.json)             |
| [VueUse](https://vueuse.org)                                 | [vueuse.json](./datasets/vueuse.json)                     |
| [Vue](https://vuejs.org)                                     | [vue.json](./datasets/vue.json)                           |
| [Zod](https://github.com/colinhacks/zod)                     | [zod.json](./datasets/zod.json)                           |  |


Configs used to crawl the datasets using gpt-crawler are available in [./config.json](./config.json). Hard to keep track, so some all are listed.

Generated datasets are also somewhat cleaned manually to remove irrelevant or repetitive data.


## Combine datasets

```bash
# ensure Deno is installed
# https://docs.deno.com/runtime/manual

# generate combined.json
deno task combine

# combine all datasets
deno task combine --all
```



