
import Board from './components/Board.js';
import Menu from './components/Menu.js';
import './App.css';
import React, {useState} from 'react';

function App() {

const [showBoard, setShowBoard] = useState(false);
const [vsComputer, setVsComputer] = useState(false); //gamestyle is either vs Computer or vs Human
const [level, setLevel] = useState("2-Player"); //gamestyle is either vs Computer or vs Human
let display;
if (showBoard)
{
  display = <Board vsC={vsComputer} showB={setShowBoard} level={level}/>;
}
else
{
  display = <Menu vsCF={setVsComputer} showB={setShowBoard} setLevel={setLevel}/>;
}

  return (
    <div className="App">
    {display}
    </div>
  );


  
}

export default App;

