import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Home/Projects/Projects";
import Contact from "./Pages/Home/Contact/Contact";
import About from "./Pages/Home/About/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          {/* <Route exact path="/contact" component={Contact}></Route> */}
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
