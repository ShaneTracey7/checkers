
import Board from './components/Board.js';
import './App.css';
import React, {useState} from 'react';
/*/return (
    <div className="App">
    <Board />
    
    </div>
  );
  */
 
  /*
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
    </div>
  );
  */


function App() {

  return (
    <div className="App">
    <Board />
    
    </div>
  );


  
}

export default App;

