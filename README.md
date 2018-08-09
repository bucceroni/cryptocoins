# Project

- Dojo - Gama Academy - React + Redux + Bootstrap + Axios(API)

# Description

- Create a landing-page that returns the quote of the main cryptocoins and a converter, both returning the values ​​based on BRL

# Requisites

- [Node](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- [NPM](https://www.npmjs.com/) - Node Package Manager, is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.
- [Create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md) - Create React apps with no build configuration.
- [Bootstrap](https://getbootstrap.com.br/docs/4.1/getting-started/download/) - Bootstrap is an open-source JavaScript framework developed by the team at Twitter. It is a combination of HTML , CSS , and JavaScript code designed to help build user interface components.
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [React-redux](https://github.com/reduxjs/react-redux) - Official React bindings for Redux. Performant and flexible.
- [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
- [Thunk](https://github.com/reduxjs/redux-thunk) - Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.
- [Logger](https://github.com/evgenyrodionov/redux-logger) - LogRocket is a production Redux logging tool that lets you replay problems as if they happened in your own browser.

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
- `npm install react-redux`
- `npm install redux`
- `npm install redux-logger`
- `npm install redux-thunk`

## Main files

```
|---dojo
|   |---public
        |---index.html
    |---src
        |---actions
            |---actions.js
            |---api.js
            |---types.js
        |---components
            |---Description.js
            |---Footer.js
            |---Header.js
            |---Links.js
            |---Simulator.js
            |---Table.js
        |---img
            |---bitcoin.png
            |---gama.png
        |---reducers
            |---Reducer.js
        |---store
            |---configureStore.js
            |---rootReducer
        |---App.js
        |---index.js
```

## Files/ Components

- public/index.html -> structure html, configure header

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

- src/actions/actions.js -> configure actions (Table and Simulator)

```
import api from "./api";
import * as types from "./types";

export function getCryptocoins() {
  return async dispatch => {
    dispatch({
      type: types.GET_CRYPTOCOINS,
      payload: await api.getCryptocoins()
    });
  };
}

export function convertCryptocoins(inputValue, selectCoin) {
  return (dispatch, getState) => {
    let cryptocoins = getState().reducer.cryptocoins;
    let coin = cryptocoins.filter(item => {
      if (item.id === selectCoin) {
        return item;
      } else {
        return null;
      }
    });

    let result = inputValue / coin[0].price_brl;
    dispatch({
      type: types.CONVERT_CRYPTOCOINS,
      payload: result
    });
  };
}

export function cleanConvertCryptocoins() {
  return dispatch => {
    dispatch({
      type: types.CLEAN_CONVERT_CRYPTOCOINS,
      payload: 0
    });
  };
}
```

- src/actions/api.js -> configure api to get cryptocoins (Table)

```
import axios from "axios";

const api = "https://api.coinmarketcap.com/v1/ticker/?convert=BRL&limit=10";

export default class Api {
  static async getCryptocoins() {
    const res = await axios.get(api);
    if (res.status >= 200 && res.status <= 207) {
      return res.data;
    } else {
      throw new Error(`HTTP status ${res.status}`);
    }
  }
}
```

- src/actions/types.js -> configure types useful to actions

```
export const GET_CRYPTOCOINS = "GET_CRYPTOCOINS";
export const CONVERT_CRYPTOCOINS = "CONVERT_CRYPTOCOINS";
export const CLEAN_CONVERT_CRYPTOCOINS = "CLEAN_CONVERT_CRYPTOCOINS";
```

- src/reducers/Reducer.js -> configure initial state and update store according to actions

```
import * as types from "../actions/types";

const initialState = {
  cryptocoins: [],
  convertResult: 0
};

export default function reduce(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_CRYPTOCOINS}`:
      return {
        ...state,
        cryptocoins: payload
      };
    case `${types.CONVERT_CRYPTOCOINS}`:
      return {
        ...state,
        convertResult: payload
      };
    case `${types.CLEAN_CONVERT_CRYPTOCOINS}`:
      return {
        ...state,
        convertResult: payload
      };
    default:
      return state;
  }
}
```

- src/redustore/configureStore.js -> apply middlewares thunk, logger and add reducer

```
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
}
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

- src/index.js -> send components to index.html, import bootstrap and configure store

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

//Add Bootstrap module
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
```

- Others
  - create components -> src/components
  - use images -> src/img
  - delete files -> src/index.css and src/App.css
  - change icon -> public/favicon.ico

# Heroku

Fire up a browser and go to:
[https://landingpage-cryptocoins.herokuapp.com/](https://landingpage-cryptocoins.herokuapp.com/)
