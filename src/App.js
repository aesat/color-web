
import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Pictures from "./components/Pictures";
import About from "./components/About"
import CardFeatures from "./components/CardFeatures";
import NavMenu from "./components/NavMenu";


function App() {
  return (
    <Router>
      <Route component={NavMenu}/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/cardfeatures" component={CardFeatures}/>
      <Route path="/home" component={Home}/>
      <Route path="/pictures" component={Pictures}/>
      </Switch>
    </Router>
    
  );
}

export default App;
