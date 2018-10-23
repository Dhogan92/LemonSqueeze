import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


import Navigation from './components/Navbar';
import { Col, Row, Grid,  } from 'react-bootstrap';

var xhr;
const api_key = '93e2bc1e40111d08ed5b475d4fa2546f'; 
const imgUrl = "https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1";



class App extends Component {
    render() {
    return ( 
    <Router>
      <div className="App container-fluid">
        <Navigation />
        <div id="search-container">
        
        </div>
      
      
      </div>
      
      </Router>
    );
  }
}


export default App;
