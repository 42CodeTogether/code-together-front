import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/index";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path={`/projects`} component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
