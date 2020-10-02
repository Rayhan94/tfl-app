import React, { useState, useEffect } from "react";
import StartEnd from "./StartEnd";
//destructering props
function LineSelector({ mode }) {
  const [transport, setTransport] = useState([]);//transport = [] update setTransport
  const [selectedLine, setSelectedLine] = useState();//selectedLIne = () update setSelectedLine
  
  useEffect(() => {
    if(!mode) return;
    //useEffect to fetch api with mode props at the end
    fetch(`https://api.tfl.gov.uk/Line/Mode/${mode}`)
    //get the promise and response turn to json
      .then(res => res.json())
      //setTransport update it with transport
      .then(transport => {
        setTransport(transport);
      });
  }, [mode]);
//function listens to an event and stores the event in variable
//updates it from state variable
  function handleChange(event){
    let type = event.target.value;
    setSelectedLine(type);
    //console.log(type);
  }

 //console.log(transport);
 //jsx: returns the select box that calls handleChange
 //mapping through transport and returning option id
 //rendering startEnd
  return(
    <div>
      <select onChange={handleChange}>
        {transport.map(lines => {
          return(
        <option key={lines.id} value={lines.id}>{lines.id}
        
        </option>
          );
        })}
      </select>
      
      <StartEnd lines={selectedLine}/>
    </div>
   
   
  );

}

export default LineSelector;
