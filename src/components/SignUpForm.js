import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();
        
        this.state = {
                email: '',
                password: '',
                name: '',
                hasAgreed: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })

    }

    handleSubmit(e) {
        e.preventDefault();
        // SAVE SUBMITTED DATA ON SERVER HERE //
       

        console.log("The Form was submitted with this data: ")
        console.log(this.state);
    }
    render() {
        return (
            <div>
                
                    <form className="form-fields" onSubmit={this.handleSubmit}>
                        <div className="form-field">
                            <label className="form-field-label" htmlFor="name">Full Name</label>
                            <input type="text" id="name" className="form-field-input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
                        </div>

                        <div className="form-field">
                            <label className="form-field-label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </div>

                        <div className="form-field">
                            <label className="form-field-label" htmlFor="email">E-Mail Address</label>
                            <input type="email" id="email" className="form-field-input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <label className="form-field-checkbox-label">
                            <input className="form-field-checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <p className="form-field-terms-link">terms of service</p>
                        </label>

                        <div className="form-field">
                            <button className="form-field-button mr-20" htmlFor="email">Sign Up</button>
                            <br/>
                            <Link to="/account/sign-in" className="form-field-link">I'm already a member</Link>
                        </div>
                        
                    </form>
                
            </div>
        );
    }
    
    
}

export default SignUpForm;
