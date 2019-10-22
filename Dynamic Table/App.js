import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    data: []
  }
  addData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
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
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            
          </tr>
        </thead>
      </table>
    </div>
    <div className="tbl-content">
      <table cellpadding="0" cellspacing="0" border="0">
        <tbody>
          <tr> </tr>
          </tbody>
          {
            this.state.data.length !== 0 ? this.state.data.map((val, index) => {
              return (
                <tr key={index}>
                  {
                    Object.values(val).map((value, index) => {
                      if ( val.id <= 25 ) return <td key={index} > {value} </td>
                    })
                                    
                  }
                 
                </tr>);
            }) : null
          }
        </table>
        </div>
        <div class="made-with-love">
    Made with
    <i>♥</i> by
    <a target="_blank" href=""> Shushan</a>
  </div>
  <button onClick={this.addData} className='btn' ><strong>Show Data</strong>  </button>
      </div>
    );
  }
}
export default App;