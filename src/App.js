import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import Pop from './components/Pop';
import Trend from './components/Trend';
import Account from './components/Account';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faUser } from '@fortawesome/free-solid-svg-icons';
import FooterPage from './components/FooterPage';
import Movie from './components/Movie';
import Home from './components/Home';

library.add(faLemon, faUser)

class App extends Component {
    render() {
    return ( 
      <BrowserRouter>
      <div className="App container-fluid">
            <div id="navigation-container">
            <Navbar collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
            <Link exact to="/"><FontAwesomeIcon icon="lemon" id="lemon-logo"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
            <NavItem>
            <Link to ="/search">SEARCH</Link>
            </NavItem>
            <NavItem>
            <Link to ="/popular">POPULAR</Link>
            </NavItem>
            <NavItem>
            <Link to ="/trending">TRENDING</Link> 
            </NavItem>
            <NavItem>
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={2} href="#">
            <Link to ="/account"><FontAwesomeIcon icon="user" id="lemon-logo"/></Link> 
            </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/search" component={SearchMovie} />
              <Route path="/popular" component={Pop} />
              <Route path="/trending" component={Trend} />
              <Route path="/account" component={Account} />
              <Route exact path="/movie/:id" component={props => <Movie {...props} />} />
          </Switch>
          
           
             
            
            <FooterPage />
            </div>
            
            
        <div id="search-container">
        
        </div>
      
     
      </div>
      </BrowserRouter>
      
     
    );
  }
}



export default App;
