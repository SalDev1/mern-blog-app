import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./components/Auth/Auth";

function App() {
  const [currentId, setCurrentId] = useState("");

  return (
    <Router>
      <Switch>
        <Route path="/auth" exact>
          <Auth />
        </Route>
        <Route path="/createblog" exact>
          <NavBar />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Route>
        <Route path="/" exact>
          <NavBar />
          <Home setCurrentId={setCurrentId} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
