import React from "react";
import "./App.css";
import { useState } from "react";
const App = () => {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("anything");


  function getFormData(e) {
    console.log(name,  interest ,tnc);
    alert(interest)
    e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Handle form in React</h1>
      <form
        action=""
        onSubmit={getFormData}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
          }}
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <select
          style={{
            padding: "10px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
            color: "white"
          }}
          name=""
          id=""
          onChange={(e) => setInterest(e.target.value)}
        >
        <option value="">Select Interest</option>
          <option value="Cycle">Cycle</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
        </select>

        <input
          type="checkbox"
          onChange={(e) => setTnc(e.target.checked)} 
        />
        <span>Accept term and condition</span>
        <input
          style={{
            padding: "10px",
            borderRadius: "5px",
            outline: "none",
            border: "none",
          }}
          type="Submit"
        />
      </form>
    </div>
  );
};

export default App;

{/*
create form with inside input tags  and submit button
by using onSubmit attribute handle data 
use e.preventDefault  help to not submit automaically submit data
create state accoring to input tags and use it  
*/}