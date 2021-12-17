import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import LoadScreen from "./Components/LoadScreen/LoadScreen";

function App() {
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.getElementById("app").style.visibility = "hidden";
      document.getElementById("loadingScreen").style.visibility = "visible";
    } else if (document.readyState === "complete") {
      document.getElementById("loadingScreen").style.display = "none";
      document.getElementById("app").style.visibility = "visible";
    }
  };
  return (
    <div>
      <div id="loadingScreen">
        <LoadScreen />
      </div>
      <div className="App" id="app">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/projects"></Route>
            <Route exact path="/contact"></Route>
            <Route exact path="/about"></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
