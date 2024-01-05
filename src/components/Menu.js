import React, {useState} from 'react';
import styles from '../styles.css';
import computer from '../pics/computer-icon.png';
import person from '../pics/person-icon.png';

function Menu(props)
{

    //just to test things work
const [color, setColor] = useState("blue");
const [color2, setColor2] = useState("red");
const [vsComputedSelected, setVsComputerSelected] = useState(false);

function handleClickComputer()
{
   // props.showB(true);
  // props.vsCF(true);

  setVsComputerSelected(!vsComputedSelected);

    if (color == "blue")
    {
        setColor("green");
    }
    else
    {
        setColor("blue");
    }
}

function handleEasyClick()
{
    props.showB(true);
    props.vsCF(true);
    props.setLevel("Easy");
}

function handleMediumClick()
{
    props.showB(true);
    props.vsCF(true);
    props.setLevel("Medium");
}

function handleHardClick()
{
    props.showB(true);
    props.vsCF(true);
    props.setLevel("Hard");
}


function handleClickHuman()
{
    props.showB(true);
    props.vsCF(false);
    props.setLevel("2-Player");
}
         
let display; //variable that holds the html and it conditionally set
if (vsComputedSelected)
{
    display =
    <div style= {{margin: "auto"}}>
        <h2 style= {{marginTop: "10px", marginBottom: "0px"}}>Difficulty</h2>
        <div style={{display: "inline-flex"}}>
            <p onClick={handleEasyClick} style={{marginRight: "5px", border: "2px solid black", color: "white", backgroundColor: "darkgreen", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "15px", paddingRight: "15px", borderRadius: "50px"}}>Easy</p>
            <p onClick={handleMediumClick} style={{marginRight: "5px", border: "2px solid black",color: "white", backgroundColor: "orange", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "5px", paddingRight: "5px", borderRadius: "50px"}}>Medium</p>
            <p onClick={handleHardClick} style={{border: "2px solid black",color: "white", backgroundColor: "red", paddingTop: "20px", paddingBottom: "20px",paddingLeft: "15px", paddingRight: "15px", borderRadius: "50px"}}>Hard</p>
        </div>
    </div>
    
}
else
{
    display = <div style={{backgroundColor: "red"}} onClick={handleClickHuman} class="menuButton">
    <div style={{display: "flex"}} >
        <img src={person} height={50} width={50}/>
        <h1 style={{margin: "5px"}} >Vs.</h1>
        <img src={person} height={50} width={50}/>
    </div>
    <caption style={{display: "block", verticalAlign: "top"}} >Play vs. Human</caption>
</div>;
}

    return (
        <div id="menu" style={styles}>
            <h1>Checkers</h1>
            
            <div style={{marginBottom: "10px", backgroundColor: color}} onClick={handleClickComputer} class="menuButton">
                <div style={{display: "flex"}} >
                    <img src={person} height={50} width={50}/>
                    <h1 style={{margin: "5px"}} >Vs.</h1>
                    <img src={computer} height={50} width={60}/>
                </div>
                <caption style={{display: "block", verticalAlign: "top"}} >Play vs. Computer</caption>
            </div>
            <div>
                {display}
            </div>
        </div>
            
    )
  //  }

}

export default Menu;