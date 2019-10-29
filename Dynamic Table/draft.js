import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Titles } from "./Titles";

class App extends Component {
  state = {
    data: [],
    titles: ["Full Name", "Email", "Company", "Position", "Country", "Edit"],
    inputValues: ["fullName", "email", "Company", "position", "country"],
    //hide/show elements onClick
    showInputValues: false,
    fullName: "",
    email: "",
    company: "",
    position: "",
    country: ""
  };
  //get input values for change
  getValues = () => {
    this.setState({
      fullName: this.fullName.value,
      email: this.email.value,
      company: this.company.value,
      position: this.position.value,
      country: this.country.value
    });
  };
  //hide/show elements onClick-edit
  showTD = () => {
    this.setState({
      showInputValues: !this.showInputValues
    });
  };
  
  componentDidMount() {
    this.addData();
    this.getData();
  }
  //make change on click, post changed data
  changeData = () => {
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
      method: "POST",
      body: JSON.stringify({
        fullName: this.fullName.value,
        email: this.email.value,
        company: this.company.value,
        position: this.position.value,
        country: this.country.value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(json => console.log(json));
  };

  addData = () => {
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
      method: "POST",
      body: JSON.stringify({
        fullName: "White Walker",
        email: "white.walker@gmail.com",
        company: "GOT",
        position: "Night's King",
        country: "Winterfell"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  };

  getData = () => {
    fetch("http://rest.learncode.academy/api/johnbob/friends")
      .then(response => response.json())
      .then(response => this.setState({ data: response }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="main">
        <h1>FIXED TABLE HEADER</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                {this.state.titles.map((item, index) => {
                  return <Titles key={index} title={item} />;
                })}
              </tr>
            </thead>
          </table>
        </div>

        <div className="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody></tbody>
            {/* draw table bodies on click(Show Data button) */}
            {this.state.data.length !== 0
              ? this.state.data.map((val, index) => {
                  return (
                    <tr key={index}>
                      <td>{val.fullName}</td>
                      <td>{val.email}</td>
                      <td>{val.company}</td>
                      <td>{val.position}</td>
                      <td>{val.country}</td>
                      <td>
                        <i class="fa fa-edit" onClick={() => this.showTD()}></i>
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
        </div>
        {/* Show input form while clicking on edit icon */}
        {this.state.showInputValues ? (
          <div className="main2">
            <input
              placeholder="Full Name"
              ref={el => (this.fullName = el)}
              name="fullName"
            ></input>
            <input
              placeholder="Email"
              ref={el => (this.email = el)}
              name="email"
            ></input>
            <input
              placeholder="Company"
              ref={el => (this.company = el)}
              name="company"
            ></input>
            <input
              placeholder="Position"
              ref={el => (this.position = el)}
              name="position"
            ></input>
            <input
              placeholder="Cuntry"
              ref={el => (this.country = el)}
              name="country"
            ></input>
            <button onClick={this.changeData}>Change</button>
            {/* change table body's values to new values */}
            {this.state.fullName !== this.state.fullName.value ||
            this.state.email !== this.state.email.value ||
            this.state.company !== this.state.company.value ||
            this.state.position !== this.state.position.value ||
            this.state.country !== this.state.country.value ? (
              <tr>
                <td>{this.state.fullName.value}</td>
                <td>{this.state.email.value}</td>
                <td>{this.state.company.value}</td>
                <td>{this.state.position.value}</td>
                <td>{this.state.country.value}</td>
              </tr>
            ) : null}
          </div>
        ) : null}
        <div class="made-with-love">
          Made with
          <i>♥</i> by
          <a target="_blank" href="">
            {" "}
            Shushan{" "}
          </a>
        </div>
        <button onClick={this.getData} className="btn">
          <strong>Show Data</strong>{" "}
        </button>
      </div>
    );
  }
}
export default App;