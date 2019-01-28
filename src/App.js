import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Login from './Login.js';
import Table from './Table.js';


class App extends Component {
  render() {
    return (
        <Router>
              <div>
              

                <Route path="/" exact component={Login} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
		        <Route path="/home" component={Home} />
		        
		        
              </div>
        </Router>
    );
  }
}

export default App;