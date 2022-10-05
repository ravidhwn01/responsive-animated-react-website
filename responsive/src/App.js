import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Contact from "./components/Contact";
// import Error from "./components/Error";
import Navbar from "./components/Navbar";

export default function App(){
  return (
    <>
    <Navbar/>
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



