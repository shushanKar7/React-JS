import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    data: [],
  }
  componentDidMount(){
    this.addData();
    this.getData();
  }


  addData = () => {
    fetch('http://rest.learncode.academy/api/johnbob/friends', {
      method: 'POST',
      body: JSON.stringify({
      fullName: "White Walker",
      email: "white.walker@gmail.com",
      company: "GOT",
      position: "Night's King",
      country: "Winterfell",
      }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  }

  getData = () => {
    fetch('http://rest.learncode.academy/api/johnbob/friends')
    .then(response => response.json())
    .then(response => this.setState({data:response}))
    .catch(err => console.log(err));
  }
   
  render(){
    return (
      <div className = 'main'>
        <h1>FIXED TABLE HEADER</h1>
        <div class="tbl-header">
      <table cellpadding="0" cellspacing="0" border="0">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Position</th>
            <th>Country</th>
            <th>ID</th>
 
          </tr>
        </thead>
      </table>
    </div>
    <div className="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr></tr>
          </tbody>
          {
            this.state.data.length !== 0 ? this.state.data.map((val, index) => {
              return (
                <tr key={index}> 
                  {
                    Object.values(val).map((value, index) => {
                      return <td key={index}>{value} <br/>
                      <i class="fa fa-edit"></i>
                      </td>
                }
               )
                }
                
                  </tr> )
            }) : null
          }
        </table>
        </div >
        <div class="made-with-love">
    Made with
    <i>♥</i> by
    <a target="_blank" href=""> Shushan </a>
  </div>
  <button onClick={this.getData} className='btn' ><strong>Show Data</strong>  </button>
      </div>
    );
  }
}
export default App;
