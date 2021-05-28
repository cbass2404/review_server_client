## React Setup

1. Navigate to the folder you want the project folder stored into then run:

```
$ npx create-react-app projectName
```

2. CD into the folder and install using npm:

```
$ npm install -- save react-router-dom
```

3. In index.js file inside src directory import react-dom and render it.

```javascript
import ReactDOM from "react-dom";

// local files
import App from "./components/App";

ReactDOM.render(<App />, document.querySelector("#root"));
```

_ReactDOM.render takes two args, component to render and target dom node_
