import React, {useState} from 'react';
import computer from '../pics/computer-icon.png';
import person from '../pics/person-icon.png';
import '../styles.scss';

function Menu(props)
{
const [color, setColor] = useState("lightblue"); //used to change color of vs.Computer button
const [vsComputedSelected, setVsComputerSelected] = useState(false); //is vs.Computer button clicked or not

//on click of vs.Computer mode, changes the state and colour of the button
function handleClickComputer()
{
  setVsComputerSelected(!vsComputedSelected);

    if (color === "lightblue")
    {
        setColor("darkgreen");
    }
    else
    {
        setColor("lightblue");
    }
}

//set up and display board for vs.Computer on Easy mode
function handleEasyClick()
{
    props.showB(true);
    props.vsCF(true);
    props.setLevel("Easy");
}

//set up and display board for vs.Computer on Medium mode
function handleMediumClick()
{
    props.showB(true);
    props.vsCF(true);
    props.setLevel("Medium");
}

//set up and display board for vs.Computer on Hard mode
function handleHardClick()
{
    props.showB(true);
    props.vsCF(true);
    props.setLevel("Hard");
}

//set up and display board for vs.Human(2-player)
function handleClickHuman()
{
    props.showB(true);
    props.vsCF(false);
    props.setLevel("2-Player");
}
         
let display; //variable that holds the html and it conditionally set for difficulty levels(Easy,Medium,Hard) for vs.Computer mode OR vs.Human(2-player) mode button
if (vsComputedSelected)
{
    display =
    <div id="levelButtons">
        <h2>Difficulty</h2>
        <div>
            <p onClick={handleEasyClick} style={{backgroundColor: "darkgreen"}}>Easy</p>
            <p onClick={handleMediumClick} style={{ backgroundColor: "orange", paddingLeft: "5px", paddingRight: "5px"}}>Medium</p>
            <p onClick={handleHardClick} style={{backgroundColor: "red"}}>Hard</p>
        </div>
    </div>
    
}
else
{
    display = <div style={{backgroundColor: "lightcoral"}} onClick={handleClickHuman} class="menuButton">
    <div>
        <img src={person} height={50} width={50} alt="person"/>
        <h1 style={{margin: "5px"}} >Vs.</h1>
        <img src={person} height={50} width={50} alt="person"/>
    </div>
    <caption>Play vs. Human</caption>
</div>;
}

    return (
        <div id="checkerMenu">
            <h1 id="title">Checkers</h1>
            <small>by Shane</small>
            <div style={{backgroundColor: color}} onClick={handleClickComputer} class="menuButton">
                <div>
                    <img src={person} height={50} width={50} alt="person"/>
                    <h1>Vs.</h1>
                    <img src={computer} height={50} width={60} alt="computer"/>
                </div>
                <caption>Play vs. Computer</caption>
            </div>
            {display}
        </div>    
    )
}

export default Menu;