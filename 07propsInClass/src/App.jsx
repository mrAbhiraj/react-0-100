import React from 'react'
import Student from './Student'
import  './App.css'

class App extends React.Component {
 
  constructor(){
    super() ;
    this.state={
      name: "Abhishek"
    }
  }

  render(){
    return (
      <div>
       <h1>Props In React</h1>
  
        <Student  username={this.state.name} age="20-yr"/>
        <button onClick={()=> this.setState({name: "Raju"})}> Change Name to Raju </button>
        <button onClick={()=> this.setState({name: "Abhishek"})}> Change Name to Abhishek </button>

      </div>
    )
  }
  
}

export default App