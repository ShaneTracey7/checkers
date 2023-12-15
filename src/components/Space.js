import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';
import Checker from './Checker';

function Space(props)
{
//const [isEmpty, setIsEmpty] = useState(true);
const [isHover, setIsHover] = useState(false);
const [isRed, setIsRed] = useState(true);
const coordinates = props.coordinates; //11 TO 88 (first-digit -> Y Axis, second-digit X Axis)
//const [checkerData, setCheckerData] = useState([]);

let isEmpty = true;


//function that recieves data of where checker is and hides it from previous location, and shows it in current this space, if fulfill conditions
function handleClick()
{

    if (true)//a valid move
    {
    isEmpty = false;

    }
}


let checkerStr = "";
if (coordinates == 11 || coordinates == 13 || coordinates == 15 || coordinates == 17)
{
   // setIsEmpty(!isEmpty); //toggle
   //props.checkerData.setColor(true);
   //props.checkerData.setCoordinates(coordinates);
   isEmpty = false;
}

function getCoordinateOptions()
{
    let yCoord = (coordinates - (coordinates % 10))/ 10
    let xCoord = coordinates % 10;
    let xNum1,xNum2, yNum;

    if (props.checkerData.color) //red
    {
        if (yCoord == 8)
        {
            //do nothing
            return [0,0];
        }
        else
        {
            yNum = (yCoord + 1)*10
        }
    }
    else //black
    {
        if (yCoord == 1)
        {
            //do nothing
            return [0,0];
        }
        else
        {
            yNum = (yCoord - 1)*10
        }
    }
    
    if (xCoord == 1)
    {
        xNum1 = 2;
        return [yNum+xNum1,0];
    }
    else if(xCoord == 8)
    {           
         xNum1 = 7;
        return [yNum+xNum1,0];
    }
    else
    {
        xNum1 = xCoord - 1;
        xNum2 = xCoord + 1;
        return [yNum+xNum1,yNum+xNum2];
    }
    
}
function handleMouseEnter()
{
    if (isEmpty && props.isWhite) 
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates )
        {
        setIsHover(true);
        }
    }
}

function handleMouseLeave()
{
    if (isEmpty && props.isWhite)  
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates )
        {
        setIsHover(false);
        }
    }
}
/*function handleClick()
{
    if (isEmpty)
    {
        if 
    }
    else
    {
        //DON NOTHING
    }

}*/

let bg = 'black';

let image;

if (props.isWhite)
{
    image = whiteSpace;
    bg = '3px solid white';
}
else
{
    image = blackSpace;
    bg = '3px solid black';
}
if (isHover && !props.isSelectedParentV)
{
    //setColor('blue');
    bg = '3px solid blue';
}
else
{
    if (props.isWhite)
    {
        bg = '3px solid white'; 
    }
    else
    {
        bg = '3px solid black';
    }
    
}
//let checkerStr;
if (isEmpty)
{
    //checkerStr = "";
}
else
{
    checkerStr = <Checker coordinates={props.coordinates} checkerData={props.checkerData} isSelectedParentV={props.isSelectedParentV} isSelectedParentF= {props.isSelectedParentF} onBoard={true} isRed={isRed}/>;
}

//onClick={handleClick}
return (
<div style={styles} className='container'>
    <img style={{border:bg}}  onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={image} height= {50} width={50} />
    <div className='overlay'>
        {checkerStr}
       <p>{props.checkerData['coordinates']}</p> 
        </div>
</div>
)

}

export default Space;