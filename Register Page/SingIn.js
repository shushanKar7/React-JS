import React from 'react'
import { Component } from 'react'
import { Fragment } from 'react'

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

class SignIn extends Component {
    state = {
      formValid: false,
      errorCount: null,
      errors: {
        username: '',
        password: '',
      }
    }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'username': 
        errors.username = 
          value.length < 5
            ? 'Username must be 5 characters long!'
            : '';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({formValid: validateForm(this.state.errors)});
    this.setState({errorCount: countErrors(this.state.errors)});
  }

  render() {
    const {errors, formValid} = this.state;
    return (
      <Fragment>
      <div className="wrapper">
        <div className="box1">
          <div className="content">
            <div className="logo"></div>
          </div>
        </div>
        <div className="box2">
          <div className="contentSignIn">
            <h2 className="title">Sign In</h2>
            <form onSubmit={this.handleSubmit} noValidate>
              <div>
                <input
                  type="text"
                  required
                  name="username"
                  id="username"
                  placeholder="Enter Your Name"
                  onChange={this.handleChange} noValidate
                />
                 {errors.username.length > 0 && 
                  <span className='error'>{errors.username}</span>}
              </div>
              <div>
                <input
                  type="password"
                  required
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={this.handleChange} noValidate
                />
                {errors.password.length > 0 && 
                 <span className='error'>{errors.password}</span>}
              </div>
              <div>
                <button className="submit">Sign In</button>
              </div>
            </form>
            <p>
              Don't have an account?{" "}
              <a>
                Sign up
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
    )
  }
}
export default SignIn