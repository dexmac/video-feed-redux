[![Build Status](https://travis-ci.org/dexmac/video-feed-redux.svg?branch=master)](https://travis-ci.org/dexmac/video-feed-redux)
[![Coverage Status](https://coveralls.io/repos/github/dexmac/video-feed-redux/badge.svg)](https://coveralls.io/github/dexmac/video-feed-redux)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://raw.githubusercontent.com/dexmac/video-feed-redux/master/LICENSE)

**Table of Contents**

- [Project Intro](#Intro)
- [Install](#Install)
- [Run](#Run)
- [Contribute](#Contribute)
- [Misc.](#Misc.)

<a name="Intro"></a>

## Intro

A filterable video-feed in React & Redux.  
Forked from and further builds on https://www.github.com/dexmac/video-feed.  

The project uses Express as the backend to serve a video feed that is comprised of - regular video URLs,  
Facebook & Youtube videos.  

The video feed can then be filtered by the type. 

## Demo  

![preview](video-feed.gif)

<a name="Install"></a>

## Installation
   - clone the repository / open zip file and enter project directory
   - `yarn (/npm) install`

## Testing
- `yarn run lint` - Run ESLint for code linting
- `yarn run lint:fix` - Fix lint warnings automagically
- `yarn run test` - Launch the test runner
- `yarn run tdd` - Launch the test runner in interactive watch mode for TDD
- `yarn run quality-check` - Run lint + test together. This script is used pre-build and in the `pre-commit` hook.

More info. and examples for writing unit tests can be found [here](./WRITING_TESTS.md).

<a name="Run"></a>
## Running the project in a Browser 

To run the project, inside the root directory, you can run:
### `yarn run dev`

Runs the server and the client together for easy testing and development.
Open [http://localhost:3000](http://localhost:3000) to view the feed in the browser.

### `yarn run client`

Runs the client side app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn run server`

Launches the Express server for serving the feed items on port 4000.<br>
Open [http://localhost:4000/content/feed/items](http://localhost:4000/content/feed/items) to view the video feed in the browser.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It lints and runs the unit tests and then correctly bundles React in production mode and optimizes the build for the best performance.

<a name="Contribute"></a>

## Contributing
For contribution guidelines, see [Contributing](./CONTRIBUTING.md).
The PR review process can be found [here](./PR_REVIEW.md).

<a name="Misc."></a>

## Misc.
- [Stack](#stack)
- [Supported Browsers](#supported-browsers)
- [Folder Structure](#folder-structure)

## Tech. Stack

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

- Package and Dependency Management:
The project uses yarn as it's package manager, however, npm should work seamlessly as well.
Webpack is used to pack the bundle and provides ES6 modules dependency management.

- `yarn` / `npm` - For package management
- `react` + `react-dom` - For ReactJS Apps
- `react-bootstrap` - For nice looking NavBar
- `react-player` - React Component For playing Facebook, Youtube and Other Video URLs from https://www.npmjs.com/package/react-player. 
- `react-select` - Filterable select for filtering video types
- `react-scripts` - For supplying Webpack, Jest, etc. behind the scenes, as part of create-react-app's setup
- `express` - For running the video feed server
- `prop-types` - For some measure of static type checking
- `Jest` + `enzyme` + `enzyme-adapter-react-16` + `react-test-renderer` - Used for Unit Testing
- `babel` - For transpiling ES6 and JSX
- `eslint` - For linting the code
- `prettier` - For making it pretty
- `whatwg-fetch` && `raf` && `identity-obj-proxy` - fetch and requestAnimationFrame polyfills + mock CSS files for JEST tests
- `concurrently` - For running both client and server together (using `yarn dev`)

## Supported Browsers

By default the generated project uses the latest version of React.
Please refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for further information about supported browsers.

## Project Folder Structure

```
video-feed/
  README.md - This file
  WRITING_TESTS.md - Guide for writing units tests
  LICENSE - Copyright, License and OSS usage
  PULL_REQUEST_TEMPLATE.md - Guidlines for creating pull requests
  CONTRIBUTING.md - Guidelines for contributing to the repo.
  CODE_OF_CONDUCT.md - For repository contributers, Github auto-generated
  CHANGELOG.txt - Project change documentation
  node_modules/ - Created after initial 'yarn install'
  package.json - Npm modules and package version
  public/ 
    index.html - Runner HTML
    favicon.ico
  src/ 
    App.js - Parent app component
    App.test.js - Example unit test
    index.js - React App entry point
    setupTests.js - For jest unit tests setup and mocks  
    registerServiceWorker.js - To enable offline caching (PWA)
  styles/
    App.css - Main app CSS
    index.css - General CSS
  api/
    items - Video feed JSON
    server.js - Express Server to serve feed on port 4000
  components/ - Video Feed React Components 
  containers/
    VideoFeed/Item/SourceSelectManager.js - Manages feed fetching and display
  store/ - Redux store, middlewares, actions and reducers
  services/ - System-wide and action services
  constants/
    index.js - App constants
  helpers/
    fetchJSON.js - Fetch JSON wrapper (cancellable)
```
