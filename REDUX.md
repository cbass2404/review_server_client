## Redux Setup

1. Install redux dependencies in the root folder of project:

```
$ npm install --save redux react-redux
```

2. Create store and import redux components in index.js:

```javascript
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// local files
import App from "./components/App";

const store = createStore(() => [], {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
```

_createStore takes 3 args: reducer, initialState, middleware_

3. Setup reducers folder in src and create files for the different reducer types and create the reducers inside:

```javascript
export default function (state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
```

_The first argument is the state, the second the action type_

4. Import the reducers into the reducer folders index.js file and combine them together with redux:

```javascript
import { combineReducers } from "redux";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
});
```

5. Import the reducer and apply it to your store in the src/index.js file:

```javascript
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());
```
