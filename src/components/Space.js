import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import Checker from './Checker';

import '../styles.scss';

function Space(props)
{

const [isHover, setIsHover] = useState(false); //boolean variable: true if player can move checker to space that is hovered over, false if player can't
const coordinates = props.coordinates; //numberical value: 0 TO 63, corresponding to spaces of the checker board
const [isCheckerSelected, setIsCheckerSelected] = useState(false); //is the checker on the SPACE selected

let isEmpty = isEmptyF(coordinates); //is SPACE empty
let isRed = isRedF(coordinates); //is checker on SPACE red
let isKing = isKingF(coordinates); //is checker on SPACE a king

//returns if space is empty
function isEmptyF(coord){
    for (let i = 0; i < props.gameData.arr.length; i++)
    {
      if (props.gameData.arr[i].coordinate === coord)
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
      if (props.gameData.arr[i].coordinate === coord)
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
      if (props.gameData.arr[i].coordinate === coord)
      {
         return props.gameData.arr[i].isKing;
      }
    }
    return false;
}

//function that moves checker and performs required operations to state, when checker is moved, if checker is satisfies requiremnts
function handleClick()
{
    if (isEmpty === true && props.isWhite && props.isSelectedParentV) 
    { 
        let coords = getCoordinateOptions(); //gets all potential spaces checker can move, without ovetaking a checker
        if(coords[0] === coordinates || coords[1] === coordinates || (coords.length === 4 && (coords[2] === coordinates || coords[3] === coordinates)))
        {
            //update new location checker got moved to within checker array
            let temp = props.gameData.arr;
            let index = temp.findIndex((obj) => obj.coordinate === props.checkerData.coordinates);
            temp[index].coordinate = coordinates;
            
            //check if checker is now a king
            if (temp[index].isRed)
            {
                if (coordinates === 57 || coordinates === 59 || coordinates === 61 || coordinates === 63)
                {
                    temp[index].isKing = true;
                }
            }
            else // is black
            {
                if (coordinates === 0 || coordinates === 2 || coordinates === 4 || coordinates === 6)
                {
                    temp[index].isKing = true;
                }
            }
            //set array with updated info
            props.gameData.setArr(temp);
            
            setIsHover(false); // space is not highlighted
            props.checkerData.setCoordinates(-1); //set for no selected checker 
            setIsCheckerSelected(false);  //checker is not selected on SPACE
            props.isSelectedParentF(false); //checker is not selected on BOARD
       
            if(props.gameData.vsC) //is vs.Computer game mode
            {
                switch(props.gameData.level)
                {
                    case "Easy": computersTurnEasy(temp); break;
                    case "Medium": computersTurnMedium(temp); break;
                    case "Hard": computersTurnHard(temp); break;
                    default: /* do nothing */ break;
                }
            }
            else //is vs.Human(2-player) game mode
            {
                //switches turn
                props.gameData.setTurn(!props.gameData.turn);
            }
            return;
        }
        
        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) || (coords.length === 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3])))))
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
            //if a checker can overtake an opponents checker
            if (skipCoordinate !== 0 && isRedF(skipCoordinate) !== null && isRedF(skipCoordinate) !== props.checkerData.color) //if both checkers are different colors
                {   
                    let arr = captureChecker(); //equals null or temp arr
            
                    setIsHover(false); // space is not highlighted
                    props.checkerData.setCoordinates(-1); //set for no selected checker 
                    setIsCheckerSelected(false);  //checker is not selected on SPACE
                    props.isSelectedParentF(false); //checker is not selected on BOARD
                
                    //check if it was a winning move
                    let w = isWinnerF(arr);
                    if(w !== "")
                    {
                        props.gameData.setWinner(w);
                        return;
                    }

                    if(props.gameData.vsC) //is vs.Computer game mode
                    {   
                        if (arr !== null)
                        {
                            switch(props.gameData.level)
                            {
                                case "Easy": computersTurnEasy(arr); break;
                                case "Medium": computersTurnMedium(arr); break;
                                case "Hard": computersTurnHard(arr); break;
                                default: /* do nothing */ break;
                            }
                        }
                        
                    }
                    else //is vs.Human(2-player) game mode
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
    //update new location checker got moved to within checker array
    let temp = arr; 
    let index = temp.findIndex((obj) => obj.coordinate === currentCoord);
    temp[index].coordinate = destinationCoord;
    
    //check if checker is now a king
    if (destinationCoord === 0 || destinationCoord === 2 || destinationCoord === 4 || destinationCoord === 6)
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
        let index2 = temp.findIndex((obj) => obj.coordinate === currentCoord + adjustment)
        let firstHalf = temp.slice(0, index2);
        let secondHalf = temp.slice(index2 + 1);
        temp = firstHalf.concat(secondHalf);

        //check if it was a winning move
        let w = isWinnerF(temp);
            if(w !== "")
            {
                props.gameData.setWinner(w);
            }
    }

    //set array with updated info
    props.gameData.setArr(temp);  
}

//used to randomize order of elements in array (mainly used to randomize checker moves)
function randomize(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

    //algorithm for the computer's turn in Easy Mode
    function computersTurnEasy(arr) 
    {
    let randomizedCheckerArr = arr;
    randomize(randomizedCheckerArr);
    for (let i = 0; i < randomizedCheckerArr.length; i++)
        {
                //find a checker on the board of the right color (default AI is gonna be black)
          if (randomizedCheckerArr[i].isRed === false)
          {
            let checkerCoord = randomizedCheckerArr[i].coordinate;
            let coords = getCoordinateOptionsComputer(checkerCoord);
                
                
                //randomized 4 num array and assign index to each one
            let randomizedArr = [0,1,2,3]
            randomize(randomizedArr);

            for(let i = 0; i < 4; i++)
            {          
                //find if checker can be moved 
                switch(randomizedArr[i])
                {
                case 0: 
                {
                    if (coords[0] !== -1 && isEmptyF(coords[0]))
                    {
                        moveChecker(checkerCoord,coords[0], false, arr);
                        return;
                    }
                    else if (coords[0] !== -1 && isRedF(coords[0]) !== null && isRedF(coords[0])) 
                    {
                        if((checkerCoord - 18) >= 0 && (checkerCoord - 1) % 8 !== 0 && isEmptyF(checkerCoord - 18))
                        {
                            moveChecker(checkerCoord,(checkerCoord - 18), true, arr);
                            return;
                        }
                    }
                    
                    break;
                }
                case 1: 
                {
                    if (coords[1] !== -1 && isEmptyF(coords[1]))
                    {
                        moveChecker(checkerCoord,coords[1], false, arr);
                        return;
                    }
                    else if (coords[1] !== -1 && isRedF(coords[1]) !== null && isRedF(coords[1])) 
                    {
                        if((checkerCoord - 14) >= 0 && (checkerCoord - 6) % 8 !== 0 && isEmptyF(checkerCoord - 14))
                        {
                            moveChecker(checkerCoord,(checkerCoord - 14), true, arr);
                            return;
                        }
                    }
                    
                    break;
                }
                case 2: 
                {
                    if (coords.length === 4 && coords[2] !== -1 && isEmptyF(coords[2]))
                    {
                        moveChecker(checkerCoord,coords[2], false, arr);
                        return;
                    }
                    else if ( coords.length === 4 && coords[2] !== -1 && isRedF(coords[2]) !== null && isRedF(coords[2]))
                    {
                        if((checkerCoord + 14) <= 63 && (checkerCoord - 1) % 8 !== 0 && isEmptyF(checkerCoord + 14))
                        {
                            moveChecker(checkerCoord,(checkerCoord + 14), true, arr);
                            return;
                        }
                    }
                    
                    
                    break;
                }
                case 3: 
                {
                    if (coords.length === 4 && coords[3] !== -1 && isEmptyF(coords[3]))
                    {
                        moveChecker(checkerCoord,coords[3], false, arr);
                        return;
                    }
                    else if (coords.length === 4 && coords[3] !== -1 && isRedF(coords[3]) !== null && isRedF(coords[3]))
                    {
                        if((checkerCoord + 18) <= 63 && (checkerCoord - 6) % 8 !== 0 && isEmptyF(checkerCoord + 18))
                        {
                            moveChecker(checkerCoord,(checkerCoord + 18), true, arr);
                            return;
                        }
                    }
                    
                    break;
                } 
                default:{/* do nothing (should nvr happen) */}
                }
            }   

          }
        }
    }

//algorithm for the computer's turn in Medium Mode
function computersTurnMedium(arr)
{
let randomizedCheckerArr = arr;
randomize(randomizedCheckerArr);
for (let i = 0; i < randomizedCheckerArr.length; i++)
    {
            //find a checker on the board of the right color (default AI is gonna be black)
      if (randomizedCheckerArr[i].isRed === false)
      {
        let checkerCoord = randomizedCheckerArr[i].coordinate;
        let coords = getCoordinateOptionsComputer(checkerCoord);
            
            
            //randomized 4 num array and assign index to each one
        let randomizedArr = [0,1,2,3]
        randomize(randomizedArr);

        for(let i = 0; i < 4; i++)
        {      
            //find if checker can be moved     
            switch(randomizedArr[i])
            {
            case 0: 
            {
                if (coords[0] !== -1 && isEmptyF(coords[0]))
                {
                    moveChecker(checkerCoord,coords[0], false, arr);
                    return;
                }
                else if (coords[0] !== -1 && isRedF(coords[0]) !== null && isRedF(coords[0])) 
                {
                    if((checkerCoord - 18) >= 0 && (checkerCoord - 1) % 8 !== 0 && isEmptyF(checkerCoord - 18))
                    {
                        moveChecker(checkerCoord,(checkerCoord - 18), true, arr);
                        return;
                    }
                }
                
                break;
            }
            case 1: 
            {
                if (coords[1] !== -1 && isRedF(coords[1]) !== null && isRedF(coords[1])) 
                {
                    if((checkerCoord - 14) >= 0 && (checkerCoord - 6) % 8 !== 0 && isEmptyF(checkerCoord - 14))
                    {
                        moveChecker(checkerCoord,(checkerCoord - 14), true, arr);
                        return;
                    }
                }
                else if (coords[1] !== -1 && isEmptyF(coords[1]))
                {
                    moveChecker(checkerCoord,coords[1], false, arr);
                    return;
                }
                
                break;
            }
            case 2: 
            {
                if ( coords.length === 4 && coords[2] !== -1 && isRedF(coords[2]) !== null && isRedF(coords[2]))
                {
                    if((checkerCoord + 14) <= 63 && (checkerCoord - 1) % 8 !== 0 && isEmptyF(checkerCoord + 14))
                    {
                        moveChecker(checkerCoord,(checkerCoord + 14), true, arr);
                        return;
                    }
                }
                else if (coords.length === 4 && coords[2] !== -1 && isEmptyF(coords[2]))
                {
                    moveChecker(checkerCoord,coords[2], false, arr);
                    return;
                }
                
                break;
            }
            case 3: 
            {
                if (coords.length === 4 && coords[3] !== -1 && isEmptyF(coords[3]))
                {
                    moveChecker(checkerCoord,coords[3], false, arr);
                    return;
                }
                else if (coords.length === 4 && coords[3] !== -1 && isRedF(coords[3]) !== null && isRedF(coords[3]))
                {
                    if((checkerCoord + 18) <= 63 && (checkerCoord - 6) % 8 !== 0 && isEmptyF(checkerCoord + 18))
                    {
                        moveChecker(checkerCoord,(checkerCoord + 18), true, arr);
                        return;
                    }
                }
                
                break;
            } 
            default:{/* do nothing (should nvr happen) */}
            }
        }   

      }
    }
}

//algorithm for the computer's turn in Hard Mode
function computersTurnHard(arr)
{
//check possiblities until, one that ovetakes a checker is reached, or one that becomes a king is reached
let randomizedCheckerArr = arr;
randomize(randomizedCheckerArr);

let selectedCheckerData = [-1,-1];

for (let i = 0; i < randomizedCheckerArr.length; i++)
    {
            //find a checker on the board of the right color (default AI is gonna be black)
      if (randomizedCheckerArr[i].isRed === false)
      {
        let checkerCoord = randomizedCheckerArr[i].coordinate;
        let coords = getCoordinateOptionsComputer(checkerCoord);
            
            
            //randomized 4 num array and assign index to each one
        let randomizedArr = [0,1,2,3]
        randomize(randomizedArr);

        for(let i = 0; i < 4; i++)
        {           
            //find if checker can be moved
            switch(randomizedArr[i])
            {
            case 0: 
            {
                if (coords[0] !== -1 && isRedF(coords[0]) !== null && isRedF(coords[0])) 
                {
                    if((checkerCoord - 18) >= 0 && (checkerCoord - 1) % 8 !== 0 && isEmptyF(checkerCoord - 18))
                    {
                        moveChecker(checkerCoord,(checkerCoord - 18), true, arr);
                        return;
                    }
                }

                else if (coords[0] !== -1 && isEmptyF(coords[0]))
                {
                    if(coords[0] <= 7 && !(randomizedCheckerArr[i].isKing))
                    {
                        selectedCheckerData = [checkerCoord, coords[0]];
                    }
                    else if (selectedCheckerData[0] === -1)
                    {
                        selectedCheckerData = [checkerCoord, coords[0]];
                        
                    }
                }
                
                break;
            }
            case 1: 
            {
                if (coords[1] !== -1 && isRedF(coords[1]) !== null && isRedF(coords[1])) 
                {
                    if((checkerCoord - 14) >= 0 && (checkerCoord - 6) % 8 !== 0 && isEmptyF(checkerCoord - 14))
                    {
                        moveChecker(checkerCoord,(checkerCoord - 14), true, arr);
                        return;
                    }
                }
    
                else if (coords[1] !== -1 && isEmptyF(coords[1]))
                {
                    if(coords[0] <= 7 && !(randomizedCheckerArr[i].isKing))
                    {
                        selectedCheckerData = [checkerCoord, coords[1]];
                    }
                    else if (selectedCheckerData[0] === -1)
                    {
                        selectedCheckerData = [checkerCoord, coords[1]];
                        
                    }
                }
                
                break;
            }
            case 2: 
            {
                if ( coords.length === 4 && coords[2] !== -1 && isRedF(coords[2]) !== null && isRedF(coords[2]))
                {
                    if((checkerCoord + 14) <= 63 && (checkerCoord - 1) % 8 !== 0 && isEmptyF(checkerCoord + 14))
                    {
                        moveChecker(checkerCoord,(checkerCoord + 14), true, arr);
                        return;
                    }
                }
                else if (coords.length === 4 && coords[2] !== -1 && isEmptyF(coords[2]))
                {
                    if (selectedCheckerData[0] === -1)
                    {
                        selectedCheckerData = [checkerCoord, coords[2]];
                        
                    }
                }
                
                break;
            }
            case 3: 
            {
                if (coords.length === 4 && coords[3] !== -1 && isRedF(coords[3]) !== null && isRedF(coords[3]))
                {
                    if((checkerCoord + 18) <= 63 && (checkerCoord - 6) % 8 !== 0 && isEmptyF(checkerCoord + 18))
                    {
                        moveChecker(checkerCoord,(checkerCoord + 18), true, arr);
                        return;
                    }
                }
                else if (coords.length === 4 && coords[3] !== -1 && isEmptyF(coords[3]))
                {
                    if (selectedCheckerData[0] === -1)
                    {
                        selectedCheckerData = [checkerCoord, coords[3]];
                        
                    }
                }
                
                break;
            } 
            default:{/* do nothing (should nvr happen) */}
            }
        }   

      }
    }
    if(selectedCheckerData[0] === -1) //not possible move for computer
    {
        return;
    }
    else //didn't find a checker that could overtake the human players
    {
        moveChecker(selectedCheckerData[0],selectedCheckerData[1], false, arr);
    }
}
    
//moves checker to new space and removes captured checker from board
function captureChecker()
{
    let temp = props.gameData.arr;

    //changing location of moved checker 
    let index = temp.findIndex((obj) => obj.coordinate === props.checkerData.coordinates)
    temp[index].coordinate = coordinates;
    
    //check if checker is now a king
    if (temp[index].isRed)
    {
        if (coordinates === 57 || coordinates === 59 || coordinates === 61 || coordinates === 63)
        {
            temp[index].isKing = true;
        }
    }
    else // is black
    {
        if (coordinates === 0 || coordinates === 2 || coordinates === 4 || coordinates === 6)
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
    let index2 = temp.findIndex((obj) => obj.coordinate === props.checkerData.coordinates + adjustment)
    let firstHalf = temp.slice(0, index2);
    let secondHalf = temp.slice(index2 + 1);
    temp = firstHalf.concat(secondHalf);

    //set array with updated info
    props.gameData.setArr(temp);
    return temp; //new 
}

let checkerStr = "";


//returns all possible locations a checker can move to (without overtaking a checker) (for computer moves)
function getCoordinateOptionsComputer(coord)
{
    const c = coord;

    if (isKingF(c))
    {
        if (c >= 56)
        {
            if(c === 63)
            {
                return [54,-1,-1,-1];
            }
            else
            {
                return [c - 9,c - 7,-1,-1];
            }
        }
        else if (c <= 7)
        {   
            if(c === 0)
            {
                return [-1,-1,-1,9];
            }
            else
            {
                return [-1,-1, c + 7,c + 9];
            }
        }
        else 
        {
            if(c === 16 || c === 32 || c === 48) //bounded by left side of board
            {
                return [-1,c-7,-1,c+9];
            }
            else if (c === 15 || c === 31 || c === 47) //bounded by right side of board
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
    
        if (c === 0 || c === 16 || c === 32 || c === 48) //left column of board
        {
            return [-1, c - 7];
        }
        else if(c === 15 || c === 31|| c === 47 || c === 63) //right column of board
        {           
            return [c - 9, -1];
        }
        else
        {
            return [c - 9,c - 7];
        }
    }
}


//returns all possible locations a checker can move to (without overtaking a checker) (for human moves)
function getCoordinateOptions()
{
    const c = props.checkerData.coordinates; //selected checker
    let factor1, factor2;

    if (isKingF(c))
    {
        if (c >= 56)
        {
            if(c === 63)
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
            if(c === 0)
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
            if(c === 16 || c === 32 || c === 48) //bounded by left side of board
            {
                return [-1,c-7,-1,c+9];
            }
            else if (c === 15 || c === 31 || c === 47) //bounded by right side of board
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
    
        if (c === 0 || c === 16 || c === 32 || c === 48) //left column of board
        {
            return [-1, c + (factor1)];
        }
        else if(c === 15 || c === 31|| c === 47 || c === 63)
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
    if (isEmpty && props.isWhite)  
    { 
        let coords = getCoordinateOptions();
        if(coords[0] === coordinates ||coords[1] === coordinates || (coords.length === 4 && (coords[2] === coordinates || coords[3] === coordinates) ))
        {
            setIsHover(true);
            return;
        }

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) ||  (coords.length === 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3])))))
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

                ////if a checker can overtake an opponents checker
            if (skipCoordinate !== 0 && isRedF(skipCoordinate) !== null && isRedF(skipCoordinate) !== props.checkerData.color) //if both checkers are different colors
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
    if (isEmpty && props.isWhite)  
    { 
        let coords = getCoordinateOptions();
        if(coords[0] === coordinates ||coords[1] === coordinates || (coords.length === 4 && (coords[2] === coordinates || coords[3] === coordinates) ))
        {
            setIsHover(false);
            return;
        }

        if (!(isEmptyF(coords[0])) || !(isEmptyF(coords[1])) ||  (coords.length === 4 && ( !(isEmptyF(coords[2])) || !(isEmptyF(coords[3])))))
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
            //if a checker can overtake an opponents checker
            if (skipCoordinate !== 0 && isRedF(skipCoordinate) !== null && isRedF(skipCoordinate) !== props.checkerData.color) //if both checkers are different colors
             {
                 setIsHover(false);
                 return;
             }
        }
    }
}
//adjust style of space if selected or not, and if white or black
let image;
if (props.isWhite) //SPACE is white
    {
        image = whiteSpace;
    }
    else //SPACE is black
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
    if (props.isWhite) //SPACE is white
    {
        const s2 = {
           border: "3px solid white",
          };
          sty = s2;
    }
    else //SPACE is black
    {
        const s3 = {
           border: "3px solid black",
          };
          sty = s3;
    }
}

if (isEmpty) //SPACE is empty
{
    //Do nothing
}
else //SPACE isn't empty
{
    checkerStr = <Checker gameData={props.gameData} coordinates={props.coordinates} checkerData={props.checkerData} isSelectedParentV={props.isSelectedParentV} isSelectedParentF= {props.isSelectedParentF} onBoard={true} isSelectedF={setIsCheckerSelected} isSelectedV={isCheckerSelected} isRed={isRed} isKing={isKing}/>;
}

return (
<div className='spaceContainer'>
    <img style={sty} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={image} height= {50} width={50} alt="space"/>
    <div className='spaceOverlay'>
        {checkerStr}
        </div>
</div>
)
}

export default Space;