import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import LoadScreen from "./Components/LoadScreen/LoadScreen";

function App() {
  const [loading, setLoading] = useState(false);
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      setLoading(true);
    } else if (document.readyState === "complete") {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <div style={{ background: "black" }}>
      {loading && (
        <div id="loadingScreen">
          <LoadScreen />
        </div>
      )}
      {!loading && (
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
      )}
    </div>
  );
}

export default App;
