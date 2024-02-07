import React, { useState } from 'react'
import Student from './Student'
import  './App.css'

const App = () => {

  const [name, setName] = useState("Abhi")
  return (
    <div>
     <h1>Props In React</h1>

     <div > 
     <Student  username={name} age = "30" iq="10%" other={{state: "M.P" , city: "Satna" }} />
     <button onClick={()=> setName("Abhishek")}> Change to Abhishek</button>
     <button onClick={()=> setName("Abhi")}> Change to Abhi</button>

    {/* <Student username="Arish" age = "20" iq="14%" other={{state: "M.P" , city: "Bhopal" }} />   */}
     </div>

    </div>
  )
}

export default App