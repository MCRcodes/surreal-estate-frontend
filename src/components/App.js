import React from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Properties} exact />
        <Route path="/add-property" component={AddProperty} exact />
      </Switch>
    </div>
  );
}

export default App;
