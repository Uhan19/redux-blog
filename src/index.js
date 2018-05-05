import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}

class GoodBye extends React.Component {
  render() {
    return <div>GoodBye!</div>;
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={GoodBye} />
      </div>
    </Router>
  </Provider>,
  document.querySelector(".container")
);
