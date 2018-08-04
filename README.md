# Project

- Dojo - Gama Academy - React + Bootstrap + Axios(API)

# Description

- Create a landing-page that returns the quote of the main cryptocoins and a converter, both returning the values ​​based on BRL

# Requisites

- [Node](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- [NPM](https://www.npmjs.com/) - Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.
- [Create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) - Create React apps with no build configuration.
- [Bootstrap](https://getbootstrap.com.br/docs/4.1/getting-started/download/) - Bootstrap is an open-source JavaScript framework developed by the team at Twitter. It is a combination of HTML , CSS , and JavaScript code designed to help build user interface components.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

# Clone Repository
- Clone [link](https://github.com/bucceroni/cryptocoins)
- Open folder `cd dojo`
- Install dependecies `npm install`
- Start project `npm start`

# Create project

Terminal

```
create-react-app my-app
```

## Start project

Terminal

```
cd my-app
npm start
```

- http://localhost:3000/

## Install dependencies

Example

```
npm install ...
```

- `npm install bootstrap`
- `npm install axios`

## Main files

```
|---dojo
|   |---public
        |---index.html
    |---src
        |---components
            |---Description.js
            |---Footer.js
            |---Header.js
            |---Links.js
            |---Simulator.js
            |---Table.js

        |---img
            |---gama.png
        |---api.js
        |---App.js
        |---index.js
```

## Files/ Components

- public/index.html -> structure html, config header

```
 <head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Add EDGE -->
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <meta name="theme-color" content="#000000">
  <!--
          manifest.json provides metadata used when your web app is added to the
          homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
        -->
  <link rel="manifest" href="%PUBLIC_URL%/manifest.json">

  <!--
          Notice the use of %PUBLIC_URL% in the tags above.
          It will be replaced with the URL of the `public` folder during the build.
          Only files inside the `public` folder can be referenced from the HTML.

          Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
          work correctly both with client-side routing and a non-root public URL.
          Learn how to configure a non-root public URL by running `npm run build`.
        -->
  <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">

  <!-- change title -->
  <title>Dojo</title>
</head>
```

- src/index.js -> send components to index.html -> import Bootstrap here

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//Add Bootstrap module
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

- src/App.js -> app structure -> render components

```
import React, { Component } from "react";
import Header from "./components/Header";
import Description from "./components/Description";
import Table from "./components/Table";
import Links from "./components/Links";
import Simulator from "./components/Simulator";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <Header />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-8">
              <Description />
              <Table />
            </div>
            <div class="col-4">
              <Links />
              <Simulator />
            </div>
          </div>
        </div>
        <div class="container">
          <Footer />
        </div>
      </div>
    );
  }
}
```

- Others actions
  - delete file -> src/index.css
  - delete file -> src/App.css
  - change icon -> public/favicon.ico
