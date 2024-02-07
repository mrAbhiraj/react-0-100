import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// alert("outside function") it will run auomatically 
function App() {

   const [data, setData] = useState(0)
  function  incData(){
     setData(data+1)
  }
  function  decData(){
    setData(data-1)
 }

  return (
    <>
     <div className="App">
       <h1>State React</h1>
       <h2>{data}</h2>
       <button onClick={incData}>
         Increment
       </button>
       <hr />

       <button onClick={decData}>
         decrement
       </button>
     </div>

    </>
  )
}

export default App
