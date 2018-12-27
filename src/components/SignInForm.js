import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();
        
        this.state = {
                email: '',
                password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [e.target.id]: e.target.value
        });

    }

    handleSubmit(e) {
        e.preventDefault();

        console.log("The Form was submitted with this data: ")
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <form className="form-fields" onSubmit={this.handleSubmit}>
                
                <div className="form-field">
                    <label className="form-field-label" htmlFor="email">E-Mail Address</label>
                    <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-field-input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div className="form-field">
                    <label className="form-field-label" htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-field-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-field">
                    <button disabled={!this.validateForm()} type="submit" className="form-field-button mr-20" htmlFor="email">Log In</button>
                    <br/>
                    <Link to="/account/sign-up" className="form-field-link">create an account</Link>
                </div>
                    
                </form>
                
            </div>
        );
    }
    
    
}

export default SignInForm;
