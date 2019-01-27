import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Login from './Login.js';


class App extends Component {
  render() {
    return (
        <Router>
              <div>
              <h1>W3Adda - Simple SPA</h1>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Login</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/contact">Users</Link>
                    </li>
		            <li>
                      <Link to="/home">Users</Link>
                    </li>
                  </ul>
                </nav>

                <Route path="/" exact component={Login} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
		        <Route path="/home" component={Contact} />
              </div>
        </Router>
    );
  }
}

export default App;