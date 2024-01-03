import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';
import Checker from './Checker';

function Space(props)
{

const [isHover, setIsHover] = useState(false); //boolean variable: true if player can move checker to space that is hovered over, false if player can't
const coordinates = props.coordinates; //0 TO 63 
const [isCheckerSelected, setIsCheckerSelected] = useState(false); //is the checker on the SPACE selected

//use the props.checkerData.coordinates value if the value is within the range, as the condition for isCheckerSelected
let isCheckerSelectedSup = isCheckerSelectedF();

let isRed = isRedF(coordinates);
let isEmpty = isEmptyF(coordinates);
let isKing = isKingF(coordinates);
//let isLast = isLastF(coordinates);

//tester function
function isCheckerSelectedF(){
    let coord = props.checkerData.coordinates; //selected checker
    if (coord >= 0 && coord <= 63)
    {
       return true;
    }
    return false;
  }

//tester function
function isLastF(coord){
      if (props.checkerData.lastCoord == coord)
      {
         return true;
      }
      return false;
    }


//returns if space is empty
function isEmptyF(coord){
    for (let i = 0; i < props.gameData.arr.length; i++)
    {
      if (props.gameData.arr[i].coordinate == coord)
      {
         return false;
      }
    }
    return true;
}
//returns "r" or "b" if there is only one color left on the board,(someone won) and "" if no winner
function isWinnerF(arr){

    let red = false;
    let black = false;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].isRed)
        {
            red = true;
        }
        else //is black
        {
            black = true;
        }

        if (red && black)
        {
            return "";
        }
    }

    if (red) //red won
    {
        return "r";
    }
    else // black won
    {
        return "b";
    }
}

//returns if space has a checker and then if it is red
function isRedF(coord){
    for (let i = 0; i < props.gameData.arr.length; i++)
    {
      if (props.gameData.arr[i].coordinate == coord)
      {
         return props.gameData.arr[i].isRed;
      }
    }
    return null;
}

//returns if space has a king checker
function isKingF(coord){
    for (let i = 0; i < props.gameData.arr.length; i++)
    {
      if (props.gameData.arr[i].coordinate == coord)
      {
         return props.gameData.arr[i].isKing;
      }
    }
    return false;
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
            let temp = props.gameData.arr;
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
            props.gameData.setArr(temp);

            //switches turn
           // props.checkerData.setTurn(!props.checkerData.turn);
            
            setIsHover(false); // space is not highlighted
            props.checkerData.setCoordinates(-1);
            setIsCheckerSelected(false);  //checker is not selected on SPACE
            props.isSelectedParentF(false); //checker is not selected on BOARD
            props.checkerData.setLastCoord(props.checkerData.coordinates); //setting selected checkers last coord
            //props.checkerData.setCoordinates(coordinates); //setting checker coordinates


            if(props.gameData.vsC)
            {
                computersTurn(temp);
                //checker was never selected, it was chosen. 
                //space nvr highlighted
                //spaces only remove their highlight for the checker on them when a new checker moves there with a handlelick
            }
            else
            {
                    //switches turn
                props.gameData.setTurn(!props.gameData.turn);
            }

            return;
        }

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) ||  coords.length == 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3]))))
        {
                //find the 'skip' coordinate (the one 2 rows away from where the checker currently is)
            let skipCoordinate;
            let checkersCoord = props.checkerData.coordinates;
            let difference = checkersCoord - coordinates;
            
            switch(difference)
            {
                case (-18): 
                { 
                    if(isKingF(checkersCoord) || isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates - 9;
                    }break;
                }
                case (-14):
                { 
                    if(isKingF(checkersCoord) || isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates - 7;
                    }break;
                }
                case 14: 
                { 
                    if(isKingF(checkersCoord) || !isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates + 7;
                    }break;
                }
                case 18:
                { 
                    if(isKingF(checkersCoord) || !isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates + 9;
                    }break;
                }
                default: skipCoordinate = 0; return;
            }
                //check color (find a way to get this info)
            if (skipCoordinate != 0 && isRedF(skipCoordinate) != null && isRedF(skipCoordinate) != props.checkerData.color) //if both checkers are different colors
                {   

                    let arr = captureChecker(); //equals null or temp arr
            
                    setIsHover(false); // space is not highlighted
                    props.checkerData.setCoordinates(-1);
                    setIsCheckerSelected(false);  //checker is not selected on SPACE
                    props.isSelectedParentF(false); //checker is not selected on BOARD
                    //props.checkerData.setCoordinates(coordinates); //setting checker coordinates

                    //check if it was a winning move
                    let w = isWinnerF(arr);
                    if(w != "")
                    {
                        props.gameData.setWinner(w);
                    }

                    if(props.gameData.vsC)
                    {   
                        if (arr != null)
                        {
                            computersTurn(arr);
                        }
                        
                   //props.checkerData.setCoordinates(coordinates); //setting checker coordinates
                    }
                    else
                    {
                        //switches turn
                        props.gameData.setTurn(!props.gameData.turn);
                    }
                    return;
                }
        }

    }
}


//called within computersTurn function, it updates all the data and moves the checker
function moveChecker(currentCoord, destinationCoord, isCapture, arr)
{
    //change show new location checker got moved to
    let temp = arr; //props.checkerData.arr;
    let index = temp.findIndex((obj) => obj.coordinate == currentCoord);
    temp[index].coordinate = destinationCoord;
    
    //check if checker is now a king
    if (destinationCoord == 0 || destinationCoord == 2 || destinationCoord == 4 || destinationCoord == 6)
    {
        temp[index].isKing = true;
    }
    if(isCapture)
    {
        //getting index of captured checker
        let adjustment;
        let difference = currentCoord - destinationCoord;
        switch(difference)
        {
            case (-18): adjustment = 9;break;
            case (-14): adjustment = 7;break;
            case 14: adjustment = -7;break;
            case 18: adjustment = -9;break;
            default: adjustment = 0; return;
        }
        //removing captured checker 
        let index2 = temp.findIndex((obj) => obj.coordinate == currentCoord + adjustment)
        let firstHalf = temp.slice(0, index2);
        let secondHalf = temp.slice(index2 + 1);
        temp = firstHalf.concat(secondHalf);

        //check if it was a winning move
        let w = isWinnerF(temp);
            if(w != "")
            {
                props.gameData.setWinner(w);
            }
    }

    //set array with updated info
    props.gameData.setArr(temp);

    //props.checkerData.setCoordinates(destinationCoord); //setting checker coordinates
    
}

//algorithm for the computer's turn 
function computersTurn(arr) /* arr =  props.checkerData.arr*/
{

for (let i = 0; i < arr.length; i++)
    {
            //find a checker on the board of the right color (default AI is gonna be black)
      if (arr[i].isRed == false)
      {
        let checkerCoord = arr[i].coordinate;
        let coords = getCoordinateOptionsComputer(checkerCoord);
            //find if checker can be moved
        if (coords[0] != -1 && isEmptyF(coords[0]))
        {
            moveChecker(checkerCoord,coords[0], false, arr);
            return;
        }
        else if (coords[1] != -1 && isEmptyF(coords[1]))
        {
            moveChecker(checkerCoord,coords[1], false, arr);
            return;
        }
        else if (coords.length == 4 && coords[2] != -1 && isEmptyF(coords[2]))
        {
            moveChecker(checkerCoord,coords[2], false, arr);
            
            return;
        }
        else if (coords.length == 4 && coords[3] != -1 && isEmptyF(coords[3]))
        {
            moveChecker(checkerCoord,coords[3], false, arr);
            return;
        }
    
        // check if any spaces have a red checker (opponents checker)
        else if (coords[0] != -1 && isRedF(coords[0]) != null && isRedF(coords[0])) 
        {
            if((checkerCoord - 18) >= 0 && (checkerCoord - 1) % 8 != 0 && isEmptyF(checkerCoord - 18))
            {
                moveChecker(checkerCoord,(checkerCoord - 18), true, arr);
                return;
            }
        }
        else if (coords[1] != -1 && isRedF(coords[1]) != null && isRedF(coords[1])) 
        {
            if((checkerCoord - 14) >= 0 && (checkerCoord - 6) % 8 != 0 && isEmptyF(checkerCoord - 14))
            {
                moveChecker(checkerCoord,(checkerCoord - 14), true, arr);
                return;
            }
        }
        else if ( coords.length == 4 && coords[2] != -1 && isRedF(coords[2]) != null && isRedF(coords[2]))
        {
            if((checkerCoord + 14) <= 63 && (checkerCoord - 1) % 8 != 0 && isEmptyF(checkerCoord + 14))
            {
                moveChecker(checkerCoord,(checkerCoord + 14), true, arr);
                return;
            }
        }
        else if (coords.length == 4 && coords[3] != -1 && isRedF(coords[2]) != null && isRedF(coords[2]))
        {
            if((checkerCoord + 18) <= 63 && (checkerCoord - 6) % 8 != 0 && isEmptyF(checkerCoord + 18))
            {
                moveChecker(checkerCoord,(checkerCoord + 18), true, arr);
                return;
            }
        }
        else
        {
            //do nothing
        }
      }
    }
}


//moves checker to new space and removes captured checker from board
function captureChecker()
{
    let temp = props.gameData.arr;

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
        default: adjustment = 0; return null;
    }
    //removing captured checker 
    let index2 = temp.findIndex((obj) => obj.coordinate == props.checkerData.coordinates + adjustment)
    let firstHalf = temp.slice(0, index2);
    let secondHalf = temp.slice(index2 + 1);
    temp = firstHalf.concat(secondHalf);

    //set array with updated info
    props.gameData.setArr(temp);
    return temp; //new 
}

let checkerStr = "";


//returns all possible locations a checker can move to (without overtaking a checker)
function getCoordinateOptionsComputer(coord)
{
    const c = coord;
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


//returns all possible locations a checker can move to (without overtaking a checker)
function getCoordinateOptions()
{
    const c = props.checkerData.coordinates; //selected checker
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
            let checkersCoord = props.checkerData.coordinates;
            let difference = checkersCoord - coordinates;

            switch(difference)
            {
                case (-18): 
                { 
                    if(isKingF(checkersCoord) || isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates - 9;
                    }break;
                }
                case (-14):
                { 
                    if(isKingF(checkersCoord) || isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates - 7;
                    }break;
                }
                case 14: 
                { 
                    if(isKingF(checkersCoord) || !isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates + 7;
                    }break;
                }
                case 18:
                { 
                    if(isKingF(checkersCoord) || !isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates + 9;
                    }break;
                }
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
            let checkersCoord = props.checkerData.coordinates;
            let difference = checkersCoord - coordinates;
            
            switch(difference)
            {
                case (-18): 
                { 
                    if(isKingF(checkersCoord) || isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates - 9;
                    }break;
                }
                case (-14):
                { 
                    if(isKingF(checkersCoord) || isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates - 7;
                    }break;
                }
                case 14: 
                { 
                    if(isKingF(checkersCoord) || !isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates + 7;
                    }break;
                }
                case 18:
                { 
                    if(isKingF(checkersCoord) || !isRedF(checkersCoord))
                    {
                        skipCoordinate = coordinates + 9;
                    }break;
                }
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
    }
    else
    {
        image = blackSpace;
    }
let sty;
if (isHover && props.isSelectedParentV)
{
    const s1 = {
        border: "3px solid white",
        borderRadius: "100%",
         filter: "opacity(80%) invert(70%) sepia(100%) saturate(5000%) hue-rotate(245deg) brightness(150%) contrast(147%) blur(3px)"
      };
      sty = s1;
}
else
{
    if (props.isWhite)
    {
        const s2 = {
           border: "3px solid white",
          };
          sty = s2;
    }
    else
    {
        const s3 = {
           border: "3px solid black",
          };
          sty = s3;
    }
}


if (isEmpty)
{
    //checkerStr = "";
    //props.checkerData.setCoordinates(-1);
}
else
{
    checkerStr = <Checker gameData={props.gameData} coordinates={props.coordinates} checkerData={props.checkerData} isSelectedParentV={props.isSelectedParentV} isSelectedParentF= {props.isSelectedParentF} onBoard={true} isSelectedF={setIsCheckerSelected} isSelectedV={isCheckerSelected} isRed={isRed} isKing={isKing}/>;
}
//<img style={{sty}}  onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={image} height= {50} width={50} />
//onLoad={handleLoad}
return (
<div style={styles} className='container'>
    <img style={sty} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={image} height= {50} width={50} />
    <div className='overlay'>
        {checkerStr}
        </div>
</div>
)
}

export default Space;