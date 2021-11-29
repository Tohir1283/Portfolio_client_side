import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
