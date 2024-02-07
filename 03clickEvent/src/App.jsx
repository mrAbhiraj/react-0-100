import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// alert("outside function") it will run auomatically 
function App() {

  // dont create direct variable we must have to use usestate  jisse ki hum apne item ko real time me update kr ske 
  let data = 'Abhi'

  function  enter(){
    data = "ramu"
    alert(data)
  }

  return (
    <>
     <div className="App">
       <h1>{data} </h1>
       <button onClick={enter}>Click Me  1 </button>
       <hr />
       <button onClick={()=>enter("hiii")}>Click Me 2</button>


      {/*this line will automatically run enter task 
  <button onClick={enter()}>Click Me</button> */}

     </div>

    </>
  )
}

export default App
