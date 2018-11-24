import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

class Account extends Component {
    render() {
        return (
            <Router>
               
                    <div className="app-form-container">
                            <div className="app-form">

                                <div className="form-title">
                                   
                                   <NavLink to="/account/sign-in" 
                                   activeStyle={{
                                    color: "#fff44f",
                                                    }} 
                                    className="form-title-link">
                                    <button className="page-switcher-item">Sign In
                                    </button>
                                    </NavLink>
                                    
                                   
                                    <NavLink to ="/account/sign-up" 
                                    activeStyle={{
                                        color: "#fff44f",
                                                    }} 
                                    className="form-title-link">
                                    <button className="page-switcher-item">Sign Up
                                    </button>
                                    </NavLink>
                                    
                                </div>
                                
                                <div className="form-center">
                                <Route exact path="/account/sign-in" component={SignInForm}></Route>
                                <Route path="/account/sign-up" component={SignUpForm} ></Route>
                                </div>
                               
                                
                            </div>

                    </div>
               
            </Router>
        );
    }
}

export default Account;
