import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';
import Checker from './Checker';

function Space(props)
{

const [isHover, setIsHover] = useState(false);
const [isRed, setIsRed] = useState(true);
const coordinates = props.coordinates; //11 TO 88 (first-digit -> Y Axis, second-digit X Axis)
const [isCheckerSelected, setIsCheckerSelected] = useState(false);
//const [checkerData, setCheckerData] = useState([]);
//const [isEmpty, setIsEmpty] = useState(true);
/*
useEffect(
    () => {
      const subscription = props.source.subscribe();
      return () => {
        subscription.unsubscribe();
      };
    },
    [props.checkerData],
  );
*/

function handleLoad()
{
    if (coordinates == 11 || coordinates == 13 || coordinates == 15 || coordinates == 17 || coordinates == 22 || coordinates == 24 || coordinates == 26 || coordinates == 28 || coordinates == 31 || coordinates == 33 || coordinates == 35 || coordinates == 37)
    {
       setIsRed(true);
       
    } 
    if (coordinates == 62 || coordinates == 64 || coordinates == 66 || coordinates == 68 || coordinates == 71 || coordinates == 73 || coordinates == 75 || coordinates == 77 || coordinates == 82 || coordinates == 84 || coordinates == 86 || coordinates == 88)
    {
        setIsRed(false);
    }   
}

function coordToIndex(coord)
{
    let index = (coord -11) - 2*(((coord - (coord % 10))/10) - 1);
    return index;
}

//doesnt work atm
/*
function doThis()
{
if (props.checkerData.lastCoordinates == coordinates)
{
    setIsEmpty(true);
}
}
*/
//function that recieves data of where checker is and hides it from previous location, and shows it in current this space, if fulfill conditions
function handleClick()
{
    if (props.isEmpty && props.isWhite && props.isSelectedParentV) 
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates || coords[1] == coordinates)
        {
        // to do
        //setIsEmpty(false);
        let temp = props.checkerData.show;
        //change show new location checker got moved to
        temp[coordToIndex(coordinates)] = false;
        //remove old location where checker moved from
        temp[coordToIndex(props.checkerData.coordinates)] = true;
        //set array with updated info
        props.checkerData.setShow(temp);

        setIsHover(false);
        setIsRed(props.checkerData.color);
        setIsCheckerSelected(true);
        //props.checkerData.setLastCoordinates(props.checkerData.coordinates);
        props.checkerData.setCoordinates(coordinates);
        }
    }
}


let checkerStr = "";

//consider if a checker of the opposite colour is occupying one of the values.
function getCoordinateOptions()
{
    const c = props.checkerData.coordinates;
    let yCoord = (c - (c % 10))/ 10;
    let xCoord = c % 10;
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
            yNum = (yCoord + 1)*10;
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
            yNum = (yCoord - 1)*10;
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
    if (props.isEmpty && props.isWhite) 
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates || coords[1] == coordinates)
        {
        setIsHover(true);
        }
    }
}

function handleMouseLeave()
{
    if (props.isEmpty && props.isWhite)  
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates)
        {
        setIsHover(false);
        }
    }
}

let bg = '';

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
if (isHover && props.isSelectedParentV)
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
if (props.isEmpty)
{
    //checkerStr = "";
}
else
{
    checkerStr = <Checker coordinates={props.coordinates} checkerData={props.checkerData} isSelectedParentV={props.isSelectedParentV} isSelectedParentF= {props.isSelectedParentF} onBoard={true} isSelectedF={setIsCheckerSelected} isSelectedV={isCheckerSelected}isRed={isRed}/>;
}

//onClick={handleClick}
return (
<div style={styles} className='container'>
    <img style={{border:bg}} onLoad={handleLoad} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={image} height= {50} width={50} />
    <div className='overlay'>
        {checkerStr}
        </div>
</div>
)

}

export default Space;