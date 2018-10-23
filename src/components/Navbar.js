import React, { Component } from 'react';
import SearchMovie from './SearchMovie';
import Pop from './Pop';
import Trend from './Trend';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faUser } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import FooterPage from './FooterPage';

library.add(faLemon, faUser)



const Navigation = () => (
            <Router>
            <div id="navigation-container">
            <Navbar collapseOnSelect>
            <Navbar.Header>
            <Navbar.Brand>
            <a href="#brand"><FontAwesomeIcon icon="lemon" id="lemon-logo"/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
            <NavItem>
            <Link to ="/">SEARCH</Link>
            </NavItem>
            <NavItem>
            <Link to ="/Popular">POPULAR</Link>
            </NavItem>
            <NavItem>
            <Link to ="/Trending">TRENDING</Link> 
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={2} href="#">
            <FontAwesomeIcon icon="user" id="lemon-logo"/>
            </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={Search} />
            <Route path="/Popular" component={Popular} />
            <Route path="/Trending" component={Trending} />
            <footer><FooterPage /></footer>
            </div>
            
            </Router>
);

const Search = () => (
  <div>
   <SearchMovie />
  </div>
);

const Popular = () => (
  <div>
    <Pop />
  </div>
);

const Trending = () => (
  <div>
    <Trend />
  </div>
);



export default Navigation;