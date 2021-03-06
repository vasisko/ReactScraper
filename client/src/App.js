import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
//import NoMatch from "./pages/NoMatch";
//import Nav from "./components/Nav";


const App = () => (
  <Router>
    <div>
  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Home} />
        <Route exact path="/saved" component={Saved} />
        
      </Switch>
    </div>
  </Router>
);

export default App;