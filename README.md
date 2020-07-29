# nuxt-underscore-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> underscore.js for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-underscore-module` dependency to your project

```bash
yarn add nuxt-underscore-module # or npm install nuxt-underscore-module
```

2. Add `nuxt-underscore-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-underscore-module',

    // With options
    ['nuxt-underscore-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Hirokazu Miyaji

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-underscore-module/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-underscore-module

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-underscore-module.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-underscore-module

[github-actions-ci-src]: https://github.com/hirokazumiyaji/nuxt-underscore-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/hirokazumiyaji/nuxt-underscore-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/hirokazumiyaji/nuxt-underscore-module.svg
[codecov-href]: https://codecov.io/gh/hirokazumiyaji/nuxt-underscore-module

[license-src]: https://img.shields.io/npm/l/nuxt-underscore-module.svg
[license-href]: https://npmjs.com/package/nuxt-underscore-module
