import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import Landing from './components/layout/landing';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar/>
        <Route path="/" component={Landing} />
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
