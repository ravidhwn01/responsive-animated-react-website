import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>

      {/* <Home/>
      <Services/>
      <About/> */}
    </>
  );
}

export default App;
