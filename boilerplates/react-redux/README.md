## Tech stack

React - Redux - Sagas - Reselect - React-router - Styled-components - Axios - Jest - Enzyme - Eslint

## How to start?

```bash
    npm install valhalla-boilerplates -g
    viki init <folder_name>
    cd <folder_name>
    yarn install
```

## How to run?

```bash
    yarn install
    yarn start
```

## How to run test suite?

```bash
    yarn test
    // or
    yarn test --coverage
```

## How to run eslint?

```bash
    yarn lint
```

## Working with a repo?

This structure has been set up to work with pre-commit hook which runs `lint` before your commit.

## Scaffolding

```
/public
--  favicon.ico
--  index.html
--  manifest.json
/src
--  /assets
--  --  valhalla-logo.png
--  /core
--  --  /Example
--  --  --  action.js
--  --  --  reducer.js
--  --  --  sagas.js
--  --  --  selector.js
--  --  --  service.js
--  --  reducer.root.js
--  --  routes.config.js
--  --  sagas.root.js
--  --  store.config.js
-- /views
--  --  /components
--  --  --  /Container
--  --  --  --  /__tests__
--  --  --  --  --  index.test.js
--  --  --  --  index.js
--  --  -   -   styled.js
--  --  --  /Layout
--  --  --  --  /__tests__
--  --  --  --  --  index.test.js
--  --  --  --  index.js
--  --  /containers
--  --  --  /Example
--  --  --  --  /__tests__
--  --  --  --  --  container.test.js
--  --  --  --  --  main.test.js
--  --  --  --  container.js
--  --  --  --  index.js
--  --  --  --  main.js
-- index.js
-- main.css
-- registerServiceWorker.js
-- setupTests.js
.env
.eslintignore
.eslintrc.json
.gitignore
package.json
README.md
yarn.lock
```
