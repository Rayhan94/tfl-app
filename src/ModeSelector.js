//importing react and useState variable and useEffect for API call
import React, { useState, useEffect } from "react";
//importing lineselector component
import LineSelector from "./LineSelector";

//creating function called modeSelector
function ModeSelector() {
  const [dataLine, setDataLine] = useState([]);//dataLine = [] and setDataLine gets updated
  const [mode, setMode] = useState(false);//mode = false and setMode gets updated
  
 
  useEffect(() => {//useEffect fetch api mode
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then(res => res.json())//return a promise response and convert to json
      .then(data => { 
        setDataLine(data);
      });
  }, []);

  console.log(dataLine);

  function handleChange(event) {//function to check when select is pressed 
    //gets the event meaning gets what the user selects
    let mode = event.target.value;
    //puts it in the setMode
    setMode(mode);
    
  }

  return (
    <div>
      <select onChange={handleChange}>
        {dataLine.map(line => {
          return <option value={line.modeName}>{line.modeName}</option>;
          
        })}
      </select>
      <p>You have selected:{mode}</p>
      <LineSelector mode={mode} />
     
    </div>
  );
}

export default ModeSelector;
