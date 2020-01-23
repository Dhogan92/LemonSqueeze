import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import SearchMovie from './components/SearchMovie';
import Pop from './components/Pop';
import Trend from './components/Trend';
import Account from './components/Account';
<<<<<<< HEAD
=======
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon, faUser } from '@fortawesome/free-solid-svg-icons';
import FooterPage from './components/FooterPage';
import Movie from './components/Movie';
import Home from './components/Home';
<<<<<<< HEAD
import Upcoming from './components/Upcoming'


=======
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7

library.add(faLemon, faUser)

class App extends Component {
    render() {
    return ( 
      <BrowserRouter>
<<<<<<< HEAD
        <div className="App">
=======
      <div className="App container-fluid">
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
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
<<<<<<< HEAD
            <Link to ="/upcoming">UPCOMING</Link>
            </NavItem>
            <NavItem>
=======
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
            <Link to ="/popular">POPULAR</Link>
            </NavItem>
            <NavItem>
            <Link to ="/trending">TRENDING</Link> 
            </NavItem>
<<<<<<< HEAD
=======
            <NavItem>
            </NavItem>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={2} href="#">
            <Link to ="/account"><FontAwesomeIcon icon="user" id="lemon-logo"/></Link> 
            </NavItem>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
<<<<<<< HEAD
            {/* Routes to compononets written in Navagation */}
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/search" component={SearchMovie} />
              <Route path="/upcoming" component={Upcoming} />
=======
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route path="/search" component={SearchMovie} />
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
              <Route path="/popular" component={Pop} />
              <Route path="/trending" component={Trend} />
              <Route path="/account" component={Account} />
              <Route exact path="/movie/:id" component={props => <Movie {...props} />} />
<<<<<<< HEAD
            </Switch>
            <FooterPage />
          </div>  
          <div id="search-container">
          
          </div>
        </div>
=======
          </Switch>
          
           
             
            
            <FooterPage />
            </div>
            
            
        <div id="search-container">
        
        </div>
      
     
      </div>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
      </BrowserRouter>
      
     
    );
<<<<<<< HEAD
    
=======
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
  }
}



<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
