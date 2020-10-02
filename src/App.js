import React, { useState } from 'react';
import "./App.css"
import ModeSelector from './ModeSelector';
import LineSelector from './LineSelector';
import StartEnd from './StartEnd';

function App() {
  const[mode, setMode] = useState(null);


  
  return (
    <div className="App">
       <ModeSelector/>
       <LineSelector mode={mode} />
       
    </div>
  );
}

export default App;
