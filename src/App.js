import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from './About.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Login from './Login.js';
import Table from './Table.js';
import MyFavorites from './MyFavorites.js';
import MyAbout from './MyAbout.js';


class App extends Component {
  render() {
    return (
        <Router>
              <div>
              <h1>Star wars characters</h1>
                <nav>
                  <ul>
		            <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/my_favorite_characters">My Favorite Characters</Link>
                    </li>
                    
                  </ul>
                </nav>

                <Route path="/" exact component={Login} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
		        <Route path="/home" component={Home} />
		        <Route path="/my_favorite_characters" component={MyFavorites} />
		        <Route path="/my_about" component={MyAbout} />
		        
		        
              </div>
        </Router>
    );
  }
}

export default App;