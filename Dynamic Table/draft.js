import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Titles } from "./Titles";
import {Fragment} from 'react';
import {Input} from "./Input"


class App extends Component {
  state = {
    data: [],
    titles: ["Full Name", "Email", "Company", "Position", "Country", "Edit/Delete"],
    inputValues: ["fullName", "email", "Company", "position", "country"],
    //hide/show elements onClick
    showInputValues: false,
    addNewData:false,
    fullName: "",
    email: "",
    company: "",
    position: "",
    country: "",
    
  };
 
  //close input form
  closeAddForm = () => {
    this.setState({
      addNewData: false
    })
  }
  closeForm = () => {
    this.setState({
      showInputValues:false
    })
  }
  addingNewData = () => {
    this.setState({
      addNewData: !this.addNewData
    })
  }
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
        country: this.country.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(res => res.json())
      .then(res => console.log(res))
  };

  addData = () => {
    fetch("http://rest.learncode.academy/api/johnbob/friends", {
      method: "POST",
      body: JSON.stringify({
        fullName: "White Walker",
        email: "white.walker@gmail.com",
        company: "GOT",
        position: "Night's King",
        country: "Winterfell",
        id: ""
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
                        <div className="i-wrapper">
                        <i class="material-icons" style={{ fontSize:"16px" }} onClick={() => this.showTD()}>&#xe254;</i>
                        <i class="fa fa-remove" style={{ fontSize:"16px" }} onClick={() => this.deleteRow()}></i>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
        </div>
        {/* Show input form while clicking on edit icon */}
        {this.state.showInputValues  ? (
          <div className="main2">
            <input
              placeholder="Full Name"
              ref={el => (this.fullName = el)}
              name="fullName" className="allInput"
            ></input><br/>
            <input
              placeholder="Email"
              ref={el => (this.email = el)}
              name="email" className="allInputs"
            ></input><br/>
            <input
              placeholder="Company"
              ref={el => (this.company = el)}
              name="company" className="allInputs"
            ></input><br/>
            <input
              placeholder="Position"
              ref={el => (this.position = el)}
              name="position" className="allInputs"
            ></input><br/>
            <input
              placeholder="Cuntry"
              ref={el => (this.country = el)}
              name="country" className="allInputs"
            ></input><br/>
            <div className="btnWrapper">
           <button onClick={this.changeData} className="btn2">Change</button> 
           <button onClick={this.closeForm} className="btn2">Close</button>
            </div> 
            </div>
        ) : null}
      {this.state.addNewData?
      <div className="main2">
      <input
        placeholder="Full Name"
        ref={el => (this.fullName = el)}
        name="fullName" className="allInput"
      ></input><br/>
      <input
        placeholder="Email"
        ref={el => (this.email = el)}
        name="email" className="allInputs"
      ></input><br/>
      <input
        placeholder="Company"
        ref={el => (this.company = el)}
        name="company" className="allInputs"
      ></input><br/>
      <input
        placeholder="Position"
        ref={el => (this.position = el)}
        name="position" className="allInputs"
      ></input><br/>
      <input
        placeholder="Cuntry"
        ref={el => (this.country = el)}
        name="country" className="allInputs"
      ></input><br/>
      <div className="btnWrapper">
     <button onClick={this.changeData} className="btn2">Add</button> 
     <button onClick={this.closeAddForm} className="btn2">Close</button>
      </div> 
      </div>
  : null }
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
        <button onClick={this.addingNewData} className="btn1"><strong>Add Data</strong></button>
      </div>
    );
  }
}
export default App;
