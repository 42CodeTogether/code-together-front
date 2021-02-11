import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/index";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Switch>
        {/* <Route exact path={`/project-list`} component={ProjectList} /> */}
      </Switch>
    </div>
  );
}

export default App;
