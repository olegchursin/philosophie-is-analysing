import React, { Component } from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Components
import Nav from './components/Nav'
import MainContainer from './components/MainContainer'
import ArticlesContainer from './components/ArticlesContainer'
import AuthorsContainer from './components/AuthorsContainer'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
            <div className="app-content">
              <Route
                exact path="/"
                component={MainContainer} />
              <Route
                exact path="/articles"
                component={ArticlesContainer} />
              <Route
                exact path="/authors"
                component={AuthorsContainer} />
            </div>
            <Footer />
        </div>
      </Router>

    );
  }
}

export default App;
