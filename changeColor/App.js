import React, { Component } from 'react';
import './App.css';
import Paragraph from './paragraph';

class App extends Component{
state = {
  bool: false,
  arr: [
    {text: "This is first text", color: `rgb( ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) } )` },
    {text: "This is second text", color: `rgb( ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) } )` },
    {text: "This is third text", color: `rgb( ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) } )` },
    {text: "This is fourth text", color: `rgb( ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) } )` },
    {text: "This is fifth text", color: `rgb( ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) }, ${ Math.floor (Math.random() * 255) } )` },    
  ]
  
}
changeColor=()=>{
  this.setState({bool: !this.state.bool})
}
render(){
return(
  <div className="App">
    <header className="App-header">
      <button onClick = {()=>this.changeColor(true)}>Change color</button>
      <input style = {{backgroundColor: `${this.state.bool ? 'yellow' : 'pink'}`}} type = 'text'></input>
  {this.state.arr.map((item,index)=>{
    return  <Paragraph bool = {this.state.bool} key ={index} text ={item.text} bgColor={item.color} />
  })}
  
  </header>
  </div>
  )
}
}
export default App;