import React from "react";
import "./styles.scss";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />

      <PrivateRoute exact path="/user" component={Friends} />
    </div>
  );
}

export default App;
