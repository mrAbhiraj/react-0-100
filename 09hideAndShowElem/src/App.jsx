import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState(true) ;



  return (
    <>
       { status? <h1>I am Abhishek</h1> : null}

       <h2>hide and show using two button</h2>
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>


        <h2>hide and show using single button</h2>
        <button onClick={()=>setStatus(!status)}>Toggle</button>

    </>
  )
}

export default App
