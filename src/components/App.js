import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => window.FB.logout(() => setUserID(""));

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <Switch>
        <Route path="/" component={Properties} exact />
        <Route path="/add-property" component={AddProperty} exact />
      </Switch>
    </div>
  );
};

export default App;
