import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: " ",
    lName: " "
  })
  

  function handleChange(event){
      const newValue = event.target.value;
      const inputName = event.target.name;

      setFullName(prevValue =>{
        if (inputName === "fName"){
          return {
              fName: newValue,
              lName: prevValue.lName
          }
        } else if ( inputName === "lName"){
          return {
              fName: prevValue.fName,
              lName: newValue
        }
        }
      })
  }

 


  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input name="fName" placeholder="First Name" value={fullName.fName} onChange={handleChange} />
        <input name="lName" placeholder="Last Name"  value={fullName.lName} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;




/*
function App() {

  const [fName, setFName] = useState()
  const [lName, setLName] = useState()

  function updateFName(event){
      setFName(event.target.value)
  }

  function updateLName(event){
      setLName(event.target.value)
  }


  return (
    <div className="container">
      <h1>Hello {fName} {lName} </h1>
      <form>
        <input name="fName" placeholder="First Name" value={fName} onChange={updateFName} />
        <input name="lName" placeholder="Last Name"  value={lName} onChange={updateLName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

*/