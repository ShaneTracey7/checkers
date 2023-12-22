import React, {useState} from 'react';
import Space from './Space.js';
import Checker from './Checker.js';
import styles from '../styles.css';

function Board()
{
        
    const [isCheckerSelected, setIsCheckerSelected] = useState(false); //is there any checker on the BOARD selected
    const [checkerCoordinates, setCheckerCoordinates] = useState();
    const [lastCheckerCoordinates, setLastCheckerCoordinates] = useState();
    const [isRed, setIsRed] = useState(false);
    const [selectedCheckerData, setSelectedCheckerData] = useState([]);
    const [isRedTurn, setIsRedTurn] = useState(true);


    //data for each checker on on the board
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

    const [allCheckers, setAllCheckers] = useState(intialCheckerData);

    const checkerData = {
        show: allCheckers,
        setShow: setAllCheckers,
        coordinates: checkerCoordinates, 
        setCoordinates: setCheckerCoordinates, 
        lastCoordinates: lastCheckerCoordinates,
        setLastCoordinates: setLastCheckerCoordinates,
        color: isRed, 
        setColor: setIsRed,
        //may move this into different state later
        turn: isRedTurn,
        setTurn: setIsRedTurn

    };


// only used for developmen purposes
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

    return (
        <div>
                 <small>{toDisplay()}</small>
            <p>{checkerData.coordinates}</p>
            <p>{checkerData.color ? 'Red':'Black'}</p>
            <h1>{isRedTurn ? 'Red':'Black'}'s turn</h1>
        <div style={styles} id='board'>    
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {0}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {1}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {2}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {3}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {4}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {5}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {6}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {7}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {8}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />       
                <Space checkerData ={checkerData} coordinates = {9}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {10}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {11}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {12}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {13}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {14}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {15}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
         </div>
        <div className='row'>      
                <Space checkerData ={checkerData} coordinates = {16}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {17}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {18}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {19}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {20}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {21}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {22}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {23}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {24}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>       
                <Space checkerData ={checkerData} coordinates = {25}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {26}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {27}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {28}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {29}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {30}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {31}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
         
        </div>
        <div className='row'>
               <Space checkerData ={checkerData} coordinates = {32}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {33}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {34}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {35}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {36}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {37}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {38}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {39}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {40}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>       
                <Space checkerData ={checkerData} coordinates = {41}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {42}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {43}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {44}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {45}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {46}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {47}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
         
        </div>
        <div className='row'>

                <Space checkerData ={checkerData} coordinates = {48}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {49}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {50}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {51}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {52}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {53}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {54}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {55}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {56}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />       
                <Space checkerData ={checkerData} coordinates = {57}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {58}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {59}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {60}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {61}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} />
                <Space checkerData ={checkerData} coordinates = {62}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} />
                <Space checkerData ={checkerData} coordinates = {63}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} /*isEmpty={allCheckers[63]}*//>
         
        </div>
        
        </div>

        </div>
    );
}


 
        

















/*
                 <Space checkerData ={intialCheckerData[23]} coordinates = '81' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '82' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[20]} coordinates = '83' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '84' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[21]} coordinates = '85' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '86' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[22]} coordinates = '87' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '88' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                */

export default Board;