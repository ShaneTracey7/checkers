import React, {useState} from 'react';
import Space from './Space.js';
import styles from '../styles.css';
import escape from '../pics/escape_icon.png';

function Board(props)
{
        
    const [isCheckerSelected, setIsCheckerSelected] = useState(false); //is there a selected checker on the BOARD selected
    const [checkerCoordinates, setCheckerCoordinates] = useState(-1); //coordinates for the selected checker 
    const [isRed, setIsRed] = useState(false);  //is the selected checker red
    const [isRedTurn, setIsRedTurn] = useState(true); //is it the red players turn
    const [lastCheckerCoord, setLastCheckerCoord] = useState(100); //coordinates of last checker coordinates
    const [isWinner, setIsWinner] = useState(""); // "" if no winner, "r" if red won, "b" if black won

    //changing to horizontal/vertical view dependent on game style (vs. Human OR vs. Computer)
    const horizontalCoords =[7,15,23,31,39,47,55,63,6,14,22,30,38,46,54,62,5,13,21,29,37,45,53,61,4,12,20,28,36,44,52,60,3,11,19,27,35,43,51,59,2,10,18,26,34,42,50,58,1,9,17,25,33,41,49,57,0,8,16,24,32,40,48,56];
    const verticalCoords = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];
    let coordArr;
    let spaceColour;

    if (props.vsC)
    {
        coordArr = verticalCoords;
        spaceColour = [true,false];

    }
    else
    {
        coordArr = horizontalCoords;
        spaceColour = [false,true];
    }

    //initial data for each checker on on the board
    const intialCheckerData = [
        {isKing: false, isRed: true, coordinate: 0},
        {isKing: false, isRed: true, coordinate: 2},
        {isKing: false, isRed: true, coordinate: 4},
        {isKing: false, isRed: true, coordinate: 6},
        
        {isKing: false, isRed: true,coordinate: 9},
        {isKing: false, isRed: true, coordinate: 11},
        {isKing: false, isRed: true, coordinate: 13},
        {isKing: false, isRed: true, coordinate: 15},
        
        {isKing: false, isRed: true, coordinate: 16},
        {isKing: false,isRed: true, coordinate: 18},
        {isKing: false, isRed: true, coordinate: 20},
        {isKing: false, isRed: true, coordinate: 22},

        {isKing: false, isRed: false, coordinate: 41},
        {isKing: false, isRed: false, coordinate: 43},
        {isKing: false, isRed: false, coordinate: 45},
        {isKing: false, isRed: false, coordinate: 47},

        {isKing: false, isRed: false, coordinate: 48},
        {isKing: false, isRed: false, coordinate: 50},
        {isKing: false, isRed: false, coordinate: 52},
        {isKing: false, isRed: false, coordinate: 54},

        {isKing: false, isRed: false, coordinate: 57},
        {isKing: false, isRed: false, coordinate: 59},
        {isKing: false, isRed: false, coordinate: 61},
        {isKing: false, isRed: false, coordinate: 63}
      ];
    const [allCheckers, setAllCheckers] = useState(intialCheckerData); //checker object array 

    const checkerData = {
        coordinates: checkerCoordinates, 
        setCoordinates: setCheckerCoordinates, 
        color: isRed, 
        setColor: setIsRed
    };

    const gameData = {
        arr: allCheckers,
        setArr: setAllCheckers,
        winner: isWinner,
        setWinner: setIsWinner,
        turn: isRedTurn,
        setTurn: setIsRedTurn,
        vsC: props.vsC,
        level: props.level
    }


        // only used for development purposes
    function toDisplay()
    {
    let str = "";
    for (let i = 0; i < allCheckers.length; i++)
    {
        if (allCheckers[i].isRed)
        {
            str = str + "| R";
        }
        else
        {
            str = str + "| B";   
        }
        if (allCheckers[i].isKing)
        {
            str = str + "K";
        }
        str = str + allCheckers[i].coordinate;
    }
    return str;
    }

    let turnColor;
    let borderColor;
    if (isRedTurn)
    {
        turnColor = "red";
        borderColor = "5px solid black";
    }
    else
    {
        turnColor = "black"
        borderColor = "5px solid red"; 
    }
    const turnStyle = {
        borderRadius: "10px",
        backgroundColor: turnColor,
        border: borderColor, 
        margin: "0 auto",
        color: "white",
        marginBottom: "5px",
        padding: "5px"
    }
     
    function handleEscape()
    {
        props.showB(false);
    }

    function setGameSign()
    {
        if(isWinner == "r")
        {
                return "Red is the Winner!";
        }
        else if(isWinner == "b")
        {
                return "Black is the Winner!";
        }
        else
        {
                if(isRedTurn)
                {
                return "Red's turn";
                }
                else
                {
                return "Black's turn"; 
                }
        }
     }

     function handleSkipClick()
     {
        setIsRedTurn(!isRedTurn);
     }

     let conditionalButton = "";
     if(!props.vsC)
     {
        conditionalButton = <h3 onClick={handleSkipClick} style={{backgroundColor: "blue", margin: "10px", padding: "5px", border: "2px solid black", color: "white", borderRadius: "10px"}}>Skip Turn</h3>;     
     }


    return (
        <div style={{margin: "auto"}}>
                <small>{toDisplay()}</small>
            <p>{checkerData.coordinates} {checkerData.color ? 'Red':'Black'}</p>
            <div style={{display: "inline-flex", width: "500px", backgroundColor: "orange"}}>
                <img src={escape} onClick={handleEscape} style={{backgroundColor: "black", padding: "5px", borderRadius: "10px"}} width="30px" height="30px"/>
                <h2 style={turnStyle}>{setGameSign()}</h2>
                <h3 >Mode: {props.level}</h3>
                {conditionalButton}
            </div>
        <div style={styles} id='board'>    
        <div className='row'>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[0]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[1]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[2]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[3]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[4]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[5]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[6]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[7]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>
               
        </div>
        <div className='row'>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[8]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />       
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[9]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[10]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[11]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[12]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[13]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[14]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[15]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
         </div>
        <div className='row'>      
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[16]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[17]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[18]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[19]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[20]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[21]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[22]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[23]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
               
        </div>
        <div className='row'>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[24]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>       
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[25]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[26]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[27]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[28]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[29]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[30]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[31]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
         
        </div>
        <div className='row'>
               <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[32]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[33]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[34]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[35]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[36]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[37]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[38]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[39]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>
               
        </div>
        <div className='row'>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[40]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>       
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[41]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[42]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[43]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[44]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[45]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[46]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[47]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
         
        </div>
        <div className='row'>

                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[48]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[49]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]}/>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[50]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[51]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[52]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[53]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[54]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[55]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
               
        </div>
        <div className='row'>
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[56]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />       
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[57]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[58]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[59]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[60]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[61]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[62]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[1]} />
                <Space gameData={gameData} checkerData ={checkerData} coordinates = {coordArr[63]}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={spaceColour[0]} /*isEmpty={allCheckers[63]}*//>
         
        </div>
        
        </div>

        </div>
    );
}

export default Board;