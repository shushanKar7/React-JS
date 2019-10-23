import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  state = {
    showMe: true
  }
  myFunc(){
    this.setState({
      showMe: !this.state.showMe
    })
  }

  render(){
    return (
      <div className = 'main'>
        <h1>hide and show in React JS</h1>
        
          {
            this.state.showMe?
            <div>
              PLEASE HIDE ME
            </div>
            
            : <div>
            PLEASE SHOW ME
          </div>
          }
        <button onClick={()=>this.myFunc()}>Click me</button>
        </div>
    )
        }
      } 
export default App;