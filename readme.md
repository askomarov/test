# VITAM

VITAM is a starter template with Vite for front-end projects. This template focuses on building a static website and suits small to medium projects like a landing page and a corporate website.

## Features

- Fast HMR with [Vite](https://vitejs.dev/)
- Quick local server
- Compressing image assets
- Checking TypeScript with [ESLint](https://eslint.org/)
- HTML Validation with [HTML-validate](https://html-validate.org/)
- Transforming styles with [PostCSS](https://postcss.org/)

## How to Use

```
yarn install
```

## Available Commands

Start your project in development mode

```
yarn dev
```

Build your project for production

```
yarn build
```

Locally preview production build

```
yarn preview
```

Validate HTML files

```
yarn htmlValidate
```

Lint your project files

```
yarn lint
```

Fix your project files

```
yarn lint:fix
```

Make webp from png, jpeg, jpg - check makeWebp.js in root folder

```
yarn makeWebp
```

## Sass (Dart Sass)

You can manage style sheets logically with Sass. I've already defined some functions and Mixins.
Check out these files before you get started with your project.

- `src/scss/foundation/functions/*.scss`
- `src/scss/foundation/mixins/*.scss`

[📖 Learn Sass](https://sass-lang.com/)

## TypeScript

This template supports TypeScript. It's easy to import ts files.
You can customize TypeScript's options with `tsconfig.json` at any time.

I've already defined some utility functions.
Check out these files before you get started with your project.

`src/ts/utils/*.ts`

## Configurations

- [package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [.editorconfig](https://editorconfig.org/)
- [.prettierrc](https://prettier.io/docs/en/configuration.html)
- [.eslintrc.json](https://eslint.org/docs/user-guide/configuring/)
- [.htmlvalidate.json](https://html-validate.org/usage/#configuration)
- [.postcssrc.json](https://github.com/postcss/postcss-load-config)
- [.stylelintrc.json](https://stylelint.io/user-guide/configure)
- [.node-version](https://github.com/nodenv/nodenv)
- [vite.config.ts](https://vitejs.dev/config/)
- [tsconfig.json](https://www.typescriptlang.org/tsconfig)
