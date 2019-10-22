import React, {Component} from 'react';
import 'table.css';

class Table extends Component {
    constructor(props) {
       super(props)
       this.state = {
          students: [
             { id: 1, name: 'John', age: 21, email: 'john@email.com' },
             { id: 2, name: 'Peter', age: 19, email: 'peter@email.com' },
             { id: 3, name: 'Ricky', age: 16, email: 'ricky@email.com' },
             { id: 4, name: 'Pedro', age: 25, email: 'pedro@email.com' }
          ]
       }
    }
 
    renderTableHeader() {
       let header = Object.keys(this.state.students[0])
       return header.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
       })
    }
 
    renderTableData() {
       return this.state.students.map((student, index) => {
          const { id, name, age, email } = student 
          return (
             <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
             </tr>
          )
       })
    }
 
    render() {
       return (
          <div>
             <h1 id='title'>React Dynamic Table</h1>
             <table id='students'>
                <tbody>
                   <tr>{this.renderTableHeader()}</tr>
                   {this.renderTableData()}
                </tbody>
             </table>
          </div>
       )
    }
 }
 
 ReactDOM.render(<Table />, document.getElementById('root'));