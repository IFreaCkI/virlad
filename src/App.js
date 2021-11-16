import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {
BrowserRouter as Router,
Route,
Link
} from "react-router-dom";

import {Switch} from "react-router";
import {Home} from './Home';
import {About} from './About';



function App() {
  return (
   <>
   <Router>
   <NaviBar/>
   <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/About" component={About} />
   </Switch>
   </Router>
   <Footer/>
   </>
  );
}

export default App;
