import React, {useState} from 'react'
import "./App.css"
const App = () => {
  const [data, setData] = useState("");
  const [print, setPrint] = useState(false);

  function getData(val){
   console.log(val.target.value)
   setData(val.target.value)
   setPrint(false)

  }

  return (
    <div>
       <h1>Get Input Box Value</h1>
        {
        print ?
        <h1>{data}</h1>: null
        }
       
       <input type="text"  onChange={getData}/>

       <button onClick={()=>setPrint(true)}>Print data</button>
    </div>
  )
}

export default App