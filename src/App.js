
import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Pictures from "./components/Pictures";
import About from "./components/About"


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/home" component={Home}/>
      <Route path="/pictures" component={Pictures}/>
      </Switch>
    </Router>
    
  );
}

export default App;
