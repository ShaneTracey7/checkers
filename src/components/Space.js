import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';
import Checker from './Checker';

function Space(props)
{

const [isHover, setIsHover] = useState(false); //boolean variable: true if player can move checker to space that is hovered over, false if player can't
//const [isRed, setIsRed] = useState(true); //boolean variable: true if  checker is red, false if checker is black
const coordinates = props.coordinates; //11 TO 88 (first-digit -> Y Axis, second-digit X Axis)
const [isCheckerSelected, setIsCheckerSelected] = useState(false); //is the checker on the SPACE selected

let isRed = isRedF(coordinates);
let isEmpty = isEmptyF(coordinates);
let isKing = isKingF(coordinates);
//const [checkerData, setCheckerData] = useState([]);
//const [isEmpty, setIsEmpty] = useState(true);


function isEmptyF(coord){
    for (let i = 0; i < props.checkerData.show.length; i++)
    {
      if (props.checkerData.show[i].coordinate == coord)
      {
         return false;
      }
    }
    return true;
}

function isRedF(coord){
    for (let i = 0; i < props.checkerData.show.length; i++)
    {
      if (props.checkerData.show[i].coordinate == coord)
      {
         return props.checkerData.show[i].isRed;
      }
    }
    return null;
}

//may have to adjust this function
function isKingF(coord){
    for (let i = 0; i < props.checkerData.show.length; i++)
    {
      if (props.checkerData.show[i].coordinate == coord)
      {
         return props.checkerData.show[i].isKing;
      }
    }
    return false;
}

function handleLoad()
{

}

//function that recieves data of where checker is and hides it from previous location, and shows it in current this space, if fulfill conditions
function handleClick()
{
    if (isEmpty == true && props.isWhite && props.isSelectedParentV /*&& isRed == props.checkerData.turn*/) 
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates || coords[1] == coordinates)
        {
            //change show new location checker got moved to
            let temp = props.checkerData.show;
            let index = temp.findIndex((obj) => obj.coordinate == props.checkerData.coordinates)
            temp[index].coordinate = coordinates;
            
            //check if checker is now a king
            if (temp[index].isRed)
            {
                if (coordinates == 57 || coordinates == 59 || coordinates == 61 || coordinates == 63)
                {
                    temp[index].isKing = true;
                }
            }
            else // is black
            {
                if (coordinates == 0 || coordinates == 2 || coordinates == 4 || coordinates == 6)
                {
                    temp[index].isKing = true;
                }
            }
            //set array with updated info
            props.checkerData.setShow(temp);

            //switches turn
            props.checkerData.setTurn(!props.checkerData.turn);

            setIsHover(false); // space is not highlighted
            setIsCheckerSelected(false);  //checker is not selected on SPACE
            props.isSelectedParentF(false); //checker is not selected on BOARD
            props.checkerData.setCoordinates(coordinates); //setting checker coordinates
            return;
        }

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])))
        {
            
                //find the 'skip' coordinate (the one 2 rows away from where the checker currently is)
            let skipCoordinate;
            let difference = props.checkerData.coordinates - coordinates
            switch(difference)
            {
                case (-18): skipCoordinate = coordinates - 9;break;
                case (-14): skipCoordinate = coordinates - 7;break;
                case 14: skipCoordinate = coordinates + 7;break;
                case 18: skipCoordinate = coordinates + 9;break;
                default: skipCoordinate = 0; return;
            }
                //check color (find a way to get this info)
            if (skipCoordinate != 0 && isRedFromArr(skipCoordinate) != null && isRedFromArr(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
                {
                    captureChecker();

                    //switches turn
                    props.checkerData.setTurn(!props.checkerData.turn);

                    setIsHover(false); // space is not highlighted
                    setIsCheckerSelected(false);  //checker is not selected on SPACE
                    props.isSelectedParentF(false); //checker is not selected on BOARD
                    props.checkerData.setCoordinates(coordinates); //setting checker coordinates
                    return;
                }
        }

    }
}

//adjusts
function captureChecker()
{
    let temp = props.checkerData.show;

    //changing location of moved checker 
    let index = temp.findIndex((obj) => obj.coordinate == props.checkerData.coordinates)
    temp[index].coordinate = coordinates;
    
    //check if checker is now a king
    if (temp[index].isRed)
    {
        if (coordinates == 57 || coordinates == 59 || coordinates == 61 || coordinates == 63)
        {
            temp[index].isKing = true;
        }
    }
    else // is black
    {
        if (coordinates == 0 || coordinates == 2 || coordinates == 4 || coordinates == 6)
        {
            temp[index].isKing = true;
        }
    }

    //getting index of captured checker
    let adjustment;
    let difference = props.checkerData.coordinates - coordinates;
    switch(difference)
    {
        case (-18): adjustment = 9;break;
        case (-14): adjustment = 7;break;
        case 14: adjustment = -7;break;
        case 18: adjustment = -9;break;
        default: adjustment = 0; return;
    }
    //removing captured checker 
    let index2 = temp.findIndex((obj) => obj.coordinate == props.checkerData.coordinates + adjustment)
    let firstHalf = temp.slice(0, index2);
    let secondHalf = temp.slice(index2 + 1);
    temp = firstHalf.concat(secondHalf);

    
    //set array with updated info
    props.checkerData.setShow(temp);
}

let checkerStr = "";

//gets first 
function getCoordinateOptions()
{
    const c = props.checkerData.coordinates;
    let factor1, factor2;
    if (props.checkerData.color) //red
    {
        if (c >= 56)
        {
            //do nothing
            return [-1,-1];
        }
        factor1 = 9;
        factor2 = 7;
    }
    else //black
    {
        if (c <= 7)
        {
            //do nothing
            return [-1,-1];
        }
        factor1 = -7;
        factor2 = -9;
    }
    
    if (c == 0 || c == 16 || c ==32 || c == 48) //left column of board
    {
        return [-1, c + (factor1)];
    }
    else if(c == 15 || c == 31|| c == 47 || c == 63)
    {           
        return [c + (factor2), -1];
    }
    else
    {
        return [c + (factor2),c + (factor1)];
    }
    
}
//is there a way to tell if a space isEmpty, from outside that space? yes, using allcheckers
/*function handleMouseEnter()
{
    if (props.isEmpty && props.isWhite /*&& isRed == props.checkerData.turn) 
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates || coords[1] == coordinates)
        {
        setIsHover(true);
        }
    }
}*/
function handleMouseEnter()
{
    if (isEmpty && props.isWhite /*&& isRed == props.checkerData.turn*/)  
    { 
        //double check this
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates)
        {
            setIsHover(true);
            return;
        }

       // if (!(props.checkerData.show[coords[0]])) //if coord 0 is not empty
        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])))
        {
            
                //find the 'skip' coordinate (the one 2 rows away from where the checker currently is)
                let skipCoordinate;
                let difference = props.checkerData.coordinates - coordinates
                switch(difference)
                {
                    case (-18): skipCoordinate = coordinates - 9;break;
                    case (-14): skipCoordinate = coordinates - 7;break;
                    case 14: skipCoordinate = coordinates + 7;break;
                    case 18: skipCoordinate = coordinates + 9;break;
                    default: skipCoordinate = 0; return;
                }
                //check color (find a way to get this info)
            if (skipCoordinate != 0 && isRedFromArr(skipCoordinate) != null && isRedFromArr(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
                {
                    setIsHover(true);
                    return;
                }
            
        }
        //else if(!(props.checkerData.show[coords[1]])) //if coord 1 is not empty
       /* else if (!(isEmptyF(coords[1])))
        {
             //find the 'skip' coordinate (the one 2 rows away from where the checker currently is)
             let skipCoordinate;
                let difference = props.checkerData.coordinates - coordinates
                switch(difference)
                {
                    case (-18): skipCoordinate = coordinates + 9;break;
                    case (-14): skipCoordinate = coordinates + 7;break;
                    case 14: skipCoordinate = coordinates - 7;break;
                    case 18: skipCoordinate = coordinates - 9;break;
                    default: skipCoordinate = 0; return;
                }
             //check color (find a way to get this info)
         if (skipCoordinate != 0 && isRedFromArr(skipCoordinate) != null && isRedFromArr(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
             {
                 setIsHover(true);
                 return;
             }
        }*/
        
    }
}

function handleMouseLeave()
{
    if (isEmpty && props.isWhite /*&& isRed == props.checkerData.turn*/)  
    { 
        //double check this
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates)
        {
            setIsHover(false);
            return;
        }

        //if (!(props.checkerData.show[coords[0]])) //if coord 0 is not empty
        if(!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])))
        {
             //find the 'skip' coordinate (the one 2 rows away from where the checker currently is)
             let skipCoordinate;
                let difference = props.checkerData.coordinates - coordinates
                switch(difference)
                {
                    case (-18): skipCoordinate = coordinates - 9;break;
                    case (-14): skipCoordinate = coordinates - 7;break;
                    case 14: skipCoordinate = coordinates + 7;break;
                    case 18: skipCoordinate = coordinates + 9;break;
                    default: skipCoordinate = 0; return;
                }
             //check color (find a way to get this info)
         if (skipCoordinate != 0 && isRedFromArr(skipCoordinate) != null && isRedFromArr(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
             {
                 setIsHover(false);
                 return;
             }
        }
        //else if(!(props.checkerData.show[coords[1]])) //if coord 1 is not empty
       /* else if (!(isEmptyF(coords[1])))
        {
             //find the 'skip' coordinate (the one 2 rows away from where the checker currently is)
             let skipCoordinate;
                let difference = props.checkerData.coordinates - coordinates
                switch(difference)
                {
                    case (-18): skipCoordinate = coordinates + 9;break;
                    case (-14): skipCoordinate = coordinates + 7;break;
                    case 14: skipCoordinate = coordinates - 7;break;
                    case 18: skipCoordinate = coordinates - 9;break;
                    default: skipCoordinate = 0; return;
                }
             //check color (find a way to get this info)
         if (skipCoordinate != 0 && isRedFromArr(skipCoordinate) != null && isRedFromArr(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
             {
                 setIsHover(false);
                 return;
             }
        }*/
        
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
if (isEmpty)
{
    //checkerStr = "";
}
else
{
    checkerStr = <Checker coordinates={props.coordinates} checkerData={props.checkerData} isSelectedParentV={props.isSelectedParentV} isSelectedParentF= {props.isSelectedParentF} onBoard={true} isSelectedF={setIsCheckerSelected} isSelectedV={isCheckerSelected} isRed={isRed} isKing={isKing}/>;
}

function isRedFromArr(coord) {

    //var result  = props.checkerData.show.filter(function(obj){return obj.coordinate == coord;});
    //return result ? result[0].isRed : null; // or undefined
    
    for (let i = 0; i < props.checkerData.show.length; i++)
    {
      if (props.checkerData.show[i].coordinate == coord)
      {
         return props.checkerData.show[i].isRed;
      }
    }
    return null;
  }

//onClick={handleClick} onLoad={handleLoad}
return (
<div style={styles} className='container'>
    <img style={{border:bg}}  onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={image} height= {50} width={50} />
    <div className='overlay'>
        {checkerStr}
        {coordinates}
        </div>
</div>
)

}

export default Space;