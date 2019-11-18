import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Fragment } from "react";

import { registerUserAction } from "../actions/authenticationActions";

class RegisterPage extends Component {
  onHandleRegistration = event => {
    event.preventDefault();

    let name = event.target.name.value;
    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      name,
      email,
      password
    };

    this.props.dispatch(registerUserAction(data));
  };

  componentDidMount() {
    document.title = "React Login";
  }

  render() {
    let message, isSuccess;

    if (this.props.response.register.hasOwnProperty("response")) {
      isSuccess = this.props.response.register.response.success;
      message = this.props.response.register.response.message;
    }

    return (
      <Fragment>
        <div className="bg"></div>
        <div className="modal">
          <div className="card1">
            <div className="title1">Sign up</div>
            {!isSuccess ? <div>{message}</div> : <Redirect to="login" />}
            <form onSubmit={this.onHandleRegistration}>
              <div className="input-group">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="input-group">
                <input type="text" name="surname" placeholder="Surname" />
              </div>
              <div className="input-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirm password"
                  placeholder="Confirm Password"
                />
              </div>
            </form>
            <button className="submit1">Register</button>
            <br />
            <span className="noAccount"> Already have account? </span>
            <br />
            <Link to="login">
              <span className="login">Login here</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = response => ({
  response
});

export default connect(mapStateToProps)(RegisterPage);
