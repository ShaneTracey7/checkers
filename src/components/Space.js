import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';
import Checker from './Checker';

function Space(props)
{

const [isHover, setIsHover] = useState(false); //boolean variable: true if player can move checker to space that is hovered over, false if player can't
const coordinates = props.coordinates; //11 TO 88 (first-digit -> Y Axis, second-digit X Axis)
const [isCheckerSelected, setIsCheckerSelected] = useState(false); //is the checker on the SPACE selected

let isRed = isRedF(coordinates);
let isEmpty = isEmptyF(coordinates);
let isKing = isKingF(coordinates);

//returns if space is empty
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

//returns if space has a checker and then if it is red
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

//returns if space has a king checker
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

//not in use
function handleLoad()
{

}

//function that moves checker and performs required operations to state, when checker is moved, if checker is satisfies requiremnts.
function handleClick()
{
    if (isEmpty == true && props.isWhite && props.isSelectedParentV /*&& isRed == props.checkerData.turn*/) 
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates || coords[1] == coordinates || coords.length == 4 && (coords[2] == coordinates || coords[3] == coordinates))
        {
            //change show new location checker got moved to
            let temp = props.checkerData.show;
            let index = temp.findIndex((obj) => obj.coordinate == props.checkerData.coordinates);
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

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) ||  coords.length == 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3]))))
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
            if (skipCoordinate != 0 && isRedF(skipCoordinate) != null && isRedF(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
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

//moves checker to new space and removes captured checker from board
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


//returns all possible locations a checker can move to (without overtaking a checker)
function getCoordinateOptions()
{
    const c = props.checkerData.coordinates;
    let factor1, factor2;

    if (isKingF(c))
    {
        if (c >= 56)
        {
            if(c == 63)
            {
                return [54,-1];
            }
            else
            {
                return [c - 9,c - 7];
            }
        }
        else if (c <= 7)
        {   
            if(c == 0)
            {
                return [-1,9];
            }
            else
            {
                return [c + 7,c + 9];
            }
        }
        else 
        {
            if(c == 16 || c == 32 || c == 48) //bounded by left side of board
            {
                return [-1,c-7,-1,c+9];
            }
            else if (c == 15 || c == 31 || c == 47) //bounded by right side of board
            {
                return [c-9,-1,c+7,-1];
            }
            else //not bounded by any sides
            {
                return [c-9,c-7,c+7,c+9];
            }

        }
    }
    else // not king
    {
        if (props.checkerData.color) //red
        {
            if (c >= 56)
            {
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
}

//highlights all spaces the selected checker can move to 
function handleMouseEnter()
{
    if (isEmpty && props.isWhite /*&& isRed == props.checkerData.turn*/)  
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates || coords.length == 4 && (coords[2] == coordinates || coords[3] == coordinates) )
        {
            setIsHover(true);
            return;
        }

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) ||  coords.length == 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3]))))
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
            if (skipCoordinate != 0 && isRedF(skipCoordinate) != null && isRedF(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
            {
                setIsHover(true);
                return;
            }
        }
    }
}

//highlights all spaces the selected checker can move to 
function handleMouseLeave()
{
    if (isEmpty && props.isWhite /*&& isRed == props.checkerData.turn*/)  
    { 
        let coords = getCoordinateOptions();
        if(coords[0] == coordinates ||coords[1] == coordinates || coords.length == 4 && (coords[2] == coordinates || coords[3] == coordinates) )
        {
            setIsHover(false);
            return;
        }

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) ||  coords.length == 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3]))))
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
            
            if (skipCoordinate != 0 && isRedF(skipCoordinate) != null && isRedF(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
             {
                 setIsHover(false);
                 return;
             }
        }
    }
}

let bg = ''; //border for space
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

if (isEmpty)
{
    //checkerStr = "";
}
else
{
    checkerStr = <Checker coordinates={props.coordinates} checkerData={props.checkerData} isSelectedParentV={props.isSelectedParentV} isSelectedParentF= {props.isSelectedParentF} onBoard={true} isSelectedF={setIsCheckerSelected} isSelectedV={isCheckerSelected} isRed={isRed} isKing={isKing}/>;
}

//onLoad={handleLoad}
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