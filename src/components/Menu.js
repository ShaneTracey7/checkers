import React, {useState} from 'react';
import styles from '../styles.css';
import computer from '../pics/computer-icon.png';
import person from '../pics/person-icon.png';

function Menu(props)
{

    //just to test things work
const [color, setColor] = useState("blue");
const [color2, setColor2] = useState("red");

function handleClick1()
{
    props.showB(true);
    props.vsCF(true);

    if (color == "blue")
    {
        setColor("green");
    }
    else
    {
        setColor("blue");
    }
}

function handleClick2()
{
    props.showB(true);
    props.vsCF(false);
    
    if (color2 == "red")
    {
        setColor2("yellow");
    }
    else
    {
        setColor2("red");
    }
}
    

    return (
        <div id="menu" style={styles}>
            <h1>Checkers</h1>
            
            <div style={{backgroundColor: color}} onClick={handleClick1} class="menuButton">
                <div style={{display: "flex"}} >
                    <img src={person} height={50} width={50}/>
                    <h1 style={{margin: "5px"}} >Vs.</h1>
                    <img src={computer} height={50} width={60}/>
                </div>
                <caption style={{display: "block", verticalAlign: "top"}} >Play vs. Computer</caption>
            </div>
            <div style={{backgroundColor: color2}} onClick={handleClick2} class="menuButton">
                <div style={{display: "flex"}} >
                    <img src={person} height={50} width={50}/>
                    <h1 style={{margin: "5px"}} >Vs.</h1>
                    <img src={person} height={50} width={50}/>
                </div>
                <caption style={{display: "block", verticalAlign: "top"}} >Play vs. Human</caption>
            </div>
        </div>
            
    )
  //  }

}

export default Menu;