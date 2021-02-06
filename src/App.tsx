import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/index";
import ProjectList from "./pages/ProjectList";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className={"bg-black text-white min-h-screen"}>
      <Nav path={location.pathname} />
      <Route exact path="/" component={Home} />
      <Switch>
        <Route exact path={`/project-list`} component={ProjectList} />
      </Switch>
    </div>
  );
};

export default App;
