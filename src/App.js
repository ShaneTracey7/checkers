
import Board from './components/Board.js';
import Menu from './components/Menu.js';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

const [screenSize, setScreenSize] = useState({width: window.innerWidth, height: window.innerHeight});

useEffect(() => {
  const handleWindowResize = () => setScreenSize({width: window.innerWidth, height: window.innerHeight})
  window.addEventListener("resize", handleWindowResize);

  // Return a function from the effect that removes the event listener
  return () => window.removeEventListener("resize", handleWindowResize);
}, []);

const [showBoard, setShowBoard] = useState(false); //if true checker board is displayed, otherwise menu is displayed
const [vsComputer, setVsComputer] = useState(false); //gamestyle is either vs Computer or vs Human
const [level, setLevel] = useState("2-Player"); //gamestyle is either vs Computer or vs Human

let display;
if (showBoard)
{
  display = <Board size={screenSize} vsC={vsComputer} showB={setShowBoard} level={level}/>;
}
else
{
  display = <Menu size={screenSize} vsCF={setVsComputer} showB={setShowBoard} setLevel={setLevel}/>;
}

  return (
    <div className="App">
    {display}
    </div>
  );
}

export default App;

