# GPT Docs datasets

Leverage these datasets to build your custom GPT 🤖 

Made possible by [gpt-crawler](https://github.com/BuilderIO/gpt-crawler) 🙏🏻


### Available Datasets
*sorted alphabetically*

| Docs                                           | Dataset                                   |
| ---------------------------------------------- | ---------------------------------------------- |
| [h3](https://www.jsdocs.io/package/h3)         | [h3.json](./h3.json)                           |
| [JavaScript.info](https://javascript.info)     | [javascript-info.json](./javascript-info.json) |
| [Nitro](https://nitro.unjs.io)                 | [nitro.json](./nitro.json)                     |
| [Nuxt Image](https://image.nuxt.com)           | [nuxt-image.json](./nuxt-image.json)           |
| [Nuxt](https://nuxt.com)                       | [nuxt.json](./nuxt.json)                       |
| [ofetch](https://www.jsdocs.io/package/ofetch) | [ofetch.json](./ofetch.json)                   |
| [TypeScript](https://www.typescriptlang.org)   | [typescript.json](./typescript.json)           |
| [UnJS](https://unjs.io)                        | [unjs.json](./unjs.json)                       |
| [Vue](https://vuejs.org)                       | [vue.json](./vue.json)                         |
| [VueUse](https://vueuse.org)                   | [vueuse.json](./vueuse.json)                   |


## Config used 
```json
[
  {
    "url": "https://www.jsdocs.io/package/h3#package-functions",
    "match": "https://www.jsdocs.io/package/h3/**",
    "selector": "main",
    "maxPagesToCrawl": 500,
    "outputFileName": "h3.json"
  },
  {
    "url": "https://javascript.info/modules-intro",
    "match": "https://javascript.info/**",
    "selector": "main .content",
    "maxPagesToCrawl": 5000,
    "outputFileName": "javascript-info.json"
  },
  {
    "url": "https://nitro.unjs.io/guide/getting-started",
    "match": "https://nitro.unjs.io/guide/**",
    "selector": ".page-body",
    "maxPagesToCrawl": 500,
    "outputFileName": "nitro.json"
  },
  {
    "url": "https://image.nuxt.com/get-started/installation",
    "match": "https://image.nuxt.com/**",
    "selector": "main > .mx-auto > .flex-col > div:nth-child(2) > .flex-col > div:nth-child(1)",
    "maxPagesToCrawl": 500,
    "outputFileName": "nuxt-image.json"
  },
  {
    "url": "https://nuxt.com/docs/getting-started/introduction",
    "match": "https://nuxt.com/docs/**",
    "selector": "main > .mx-auto > .flex-col > div:nth-child(2) > .flex-col > div:nth-child(1)",
    "maxPagesToCrawl": 500,
    "outputFileName": "nuxt.json"
  },
  {
    "url": "https://www.jsdocs.io/package/ofetch",
    "match": "https://www.jsdocs.io/package/ofetch/**",
    "selector": "main",
    "maxPagesToCrawl": 500,
    "outputFileName": "ofetch.json"
  },
  {
    "url": "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",
    "match": "https://www.typescriptlang.org/docs/handbook/**",
    "selector": "#handbook-content",
    "maxPagesToCrawl": 500,
    "outputFileName": "typescript.json"
  },
  {
    "url": "https://unjs.io/packages",
    "match": "https://unjs.io/packages/**",
    "selector": ".document-driven-page",
    "maxPagesToCrawl": 500,
    "outputFileName": "unjs.json"
  },
  {
    "url": "https://vuejs.org/api/application.html#createapp",
    "match": "https://vuejs.org/api/**",
    "selector": ".vt-doc",
    "maxPagesToCrawl": 500,
    "outputFileName": "vue-api.json"
  },
  {
    "url": "https://vuejs.org/guide/introduction.html",
    "match": "https://vuejs.org/guide/**",
    "selector": ".vt-doc",
    "maxPagesToCrawl": 500,
    "outputFileName": "vue-guide.json"
  },
  {
    "url": "https://vueuse.org/core/useAsyncState/",
    "match": "https://vueuse.org/core/**",
    "selector": "main.main",
    "maxPagesToCrawl": 500,
    "outputFileName": "vueuse-core.json"
  },
  {
    "url": "https://vueuse.org/shared/createGlobalState/",
    "match": "https://vueuse.org/shared/**",
    "selector": "main.main",
    "maxPagesToCrawl": 500,
    "outputFileName": "vueuse-shared.json"
  }
]
```
