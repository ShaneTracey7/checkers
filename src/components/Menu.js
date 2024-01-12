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
let dim = (Math.min(props.size.width,(props.size.height)/**0.85*/)); 
let display; //variable that holds the html and it conditionally set for difficulty levels(Easy,Medium,Hard) for vs.Computer mode OR vs.Human(2-player) mode button
if (vsComputedSelected)
{
    display =
    <div id="levelButtons">
        <h2 style={{fontSize: dim > 400 ? "32px" : (dim > 335 ? "28px" : (dim > 250 ? "20px" : "15px"))}} >Difficulty</h2>
        <div>
            <p style={{backgroundColor: "darkgreen", padding: dim/25, fontSize: dim > 400 ? "18px" : (dim > 335 ? "15px" : (dim > 250 ? "12px" : "8px"))}} onClick={handleEasyClick}>Easy</p>
            <p onClick={handleMediumClick} style={{backgroundColor: "orange", padding: dim/25, fontSize: dim > 400 ? "18px" : (dim > 335 ? "15px" : (dim > 250 ? "12px" : "8px"))}}>Medium</p>
            <p onClick={handleHardClick} style={{backgroundColor: "red", padding: dim/25, fontSize: dim > 400 ? "18px" : (dim > 335 ? "15px" : (dim > 250 ? "12px" : "8px"))}}>Hard</p>
        </div>
    </div>
    
}
else
{
    display = <div style={{backgroundColor: "lightcoral", paddingLeft: "45px", paddingRight: "45px"}} onClick={handleClickHuman} class="menuButton">
    <div>
        <img style={{width: dim/10, height: dim/10}} src={person} alt="person"/>
        <h1 style={{margin: "5px", fontSize: dim > 400 ? "30px" : (dim > 300 ? "22px" : (dim > 200 ? "18px" : "12px"))}} >Vs.</h1>
        <img style={{width: dim/10, height: dim/10}} src={person} alt="person"/>
    </div>
    <caption style={{margin: "5px", fontSize: dim > 400 ? "18px" : (dim > 335 ? "15px" : (dim > 250 ? "12px" : "8px"))}}>  Play vs. Human  </caption>
</div>;                                                                                                                 
}

    return (
        <div style={{width: (dim/3)*2}} id="checkerMenu">
            <h1 style={{fontSize: dim > 400 ? "40px" : (dim > 335 ? "35px" : (dim > 250 ? "28px" : "22px"))}} id="title">Checkers</h1>
            <small style={{fontSize: dim > 335 ? "12px": "10px"}} >by Shane</small>
            <div style={{backgroundColor: color}} onClick={handleClickComputer} class="menuButton">
                <div>
                    <img style={{width: dim/10, height: dim/10}} src={person} alt="person"/>
                    <h1 style={{margin: "5px", fontSize: dim > 400 ? "30px" : (dim > 300 ? "22px" : (dim > 200 ? "18px" : "12px"))}}>Vs.</h1>
                    <img style={{width: dim/10, height: dim/10}} src={computer} alt="computer"/>
                </div>
                <caption style={{margin: "5px", fontSize: dim > 400 ? "18px" : (dim > 335 ? "15px" : (dim > 250 ? "12px" : "8px"))}} >Play vs. Computer</caption>
            </div>
            {display}
        </div>    
    )
}

export default Menu;