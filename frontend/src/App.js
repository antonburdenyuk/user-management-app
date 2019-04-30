import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const Login = lazy(() => import("./components/Login"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    );
  }
}

export default App;
