import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";

export default function App(){
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  exact path="/services">
            <Services />
          </Route>
          <Route exact path="/contact">   
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route path="*">
            <Error />
          </Route> */}
          <Redirect to= "/" />
        </Switch>
      </Router>
    </>
  );
}


