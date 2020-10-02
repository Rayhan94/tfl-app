//import react to useState and useEffect
import React, { useState, useEffect} from "react";

//function with destructering props
function StartEnd({ lines }){
  //state variable
   const[line, setLine] = useState([]);//line = [] and setLine updates
   //useEffect to fetch lines
   useEffect(() => {
      fetch(`https://api.tfl.gov.uk/Line/${lines}/Route`)
         .then((res) => res.json())
         .then((data) => setLine(data));


   },[lines]);

   //console.log(lines);
   
   if (!line) {
    return null;
  } else {
    //jsx 
    return (
      <div>
           
            <h3>Start of Line: </h3>
              {line.routeSections && line.routeSections[0].originationName}
           
         
           <h3>End of Line: </h3>
              {line.routeSections && line.routeSections[0].destinationName}
           
      </div>
    );
  }
}



    

export default StartEnd;