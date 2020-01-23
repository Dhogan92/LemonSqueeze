import React, { Component } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import axios from 'axios';


class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                email: '',
                password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event){
        const { value, name } = event.target
        axios.post('')
      
        fetch('http://localhost:5000/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.status === 200) {
                this.props.history.push('/');
            }
            else {
                const er = new Error(res.error)
                console.log(er);
            }
        })
        .catch(err => {
            console.error(err)
            alert('Error logging in please try again');
        })
        this.setState({
            [name]: value
          });
          event.preventDefault();
=======

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

        console.log("The Form was submitted with this data: ")
        console.log(this.state);
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
    }

    render() {
        return (
            <div>
                <form className="form-fields" onSubmit={this.handleSubmit}>
                
                <div className="form-field">
                    <label className="form-field-label" htmlFor="email">E-Mail Address</label>
<<<<<<< HEAD
                    <input type="email" id="email" value={this.state.email} onChange={this.handleChange} className="form-field-input" placeholder="Enter your email" name="email" required />
=======
                    <input type="email" id="email" className="form-field-input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                </div>

                <div className="form-field">
                    <label className="form-field-label" htmlFor="password">Password</label>
<<<<<<< HEAD
                    <input type="password" id="password" value={this.state.password} onChange={this.handleChange} className="form-field-input" placeholder="Enter your password" name="password" required />
                </div>

                <div className="form-field">
                    <button type="submit" value="Submit" className="form-field-button mr-20">Log In</button>
=======
                    <input type="password" id="password" className="form-field-input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="form-field">
                    <button className="form-field-button mr-20" htmlFor="email">Log In</button>
>>>>>>> 10d03627daa2042fef7fcb9e031bdf3d176949d7
                    <br/>
                    <Link to="/account/sign-up" className="form-field-link">create an account</Link>
                </div>
                    
                </form>
                
            </div>
        );
    }
    
    
}

export default SignInForm;
