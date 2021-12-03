import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Particle from "./Components/Particles/Particle";

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
          <Route exact path="/projects"></Route>
          <Route exact path="/contact"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
