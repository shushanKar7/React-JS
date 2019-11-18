import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Fragment } from "react";

import { loginUserAction } from "../actions/authenticationActions";
import { setCookie } from "../utils/cookies";

class LoginPage extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email,
      password
    };

    this.props.dispatch(loginUserAction(data));
  };

  componentDidMount() {
    document.title = "React Login";
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty("response")) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;

      if (isSuccess) {
        setCookie("token", this.props.response.login.response.token, 1);
      }
    }

    return (
      <Fragment>
        <div className="bg"></div>
        <div className="modal">
          <div className="card">
            <div className="title">Sign in</div>
            {!isSuccess ? <div>{message}</div> : <Redirect to="dashboard" />}
            <form onSubmit={this.onHandleLogin}>
              <div className="input-group">
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="input-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
            </form>
            <button className="submit">Sign in</button>
            <br />
            <span className="noAccount">Don't have account?</span>
            <br />
            <Link to="register">
              <span className="register">Register here</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = response => ({ response });
export default connect(mapStateToProps)(LoginPage);
