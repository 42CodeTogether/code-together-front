import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/index";
import ProjectsPage from "./pages/projects";
import { LinkProps } from "./components/Nav/Link";
import shortid from "shortid";

function App() {
  const links: LinkProps<{}>[] = [
    {
      id: shortid.generate(),
      to: "/",
      children: "MainPage",
    },
    {
      id: shortid.generate(),
      to: "/projects",
      children: "Project List",
    },
  ];
  return (
    <div className="App">
      <Nav links={links} />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path={`/projects`} component={ProjectsPage} />
      </Switch>
    </div>
  );
}

export default App;
