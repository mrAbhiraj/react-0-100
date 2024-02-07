import React, {Component} from 'react'

import { useState } from 'react'
import './App.css'

// alert("outside function") it will run auomatically 
class App extends Component {

  constructor(){
    super() ;

    this.state= {
      data: 0
    }
   }
   apple(){
    // alert("hello ")
    this.setState({data: this.state.data+1})
   }

  render(){
    return (
      <>
       <div className="App">
         <h1>State React use Class Component</h1>
         <h2>{this.state.data}</h2>
         <button onClick={()=> this.apple()}>Click </button>
         
       </div>
  
      </>
    )
  }
}

export default App
