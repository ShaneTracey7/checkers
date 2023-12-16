import React, {useState} from 'react';
import Space from './Space.js';
import Checker from './Checker.js';
import styles from '../styles.css';

function Board()
{

    const [isCheckerSelected, setIsCheckerSelected] = useState(false);
    const [checkerCoordinates, setCheckerCoordinates] = useState();
    const [lastCheckerCoordinates, setLastCheckerCoordinates] = useState();
    const [isRed, setIsRed] = useState(false);
    const [selectedCheckerData, setSelectedCheckerData] = useState([]);

    const intialCheckerData = [
       false,true,false,true,false,true,false,true,
       true,false,true,false,true,false,true,false,
      false,true,false,true,false,true,false,true,
        //true,true,true,true,true,true,true,true,
        //true,true,true,true,true,true,true,true,
        //true,true,true,true,true,true,true,true,
        true,true,true,true,true,true,true,true,
        true,true,true,true,true,true,true,true,
       // true,true,true,true,true,true,true,true,
       // true,true,true,true,true,true,true,true,
       // true,true,true,true,true,true,true,true
        true,false,true,false,true,false,true,false,
        false,true,false,true,false,true,false,true,
        true,false,true,false,true,false,true,false
        
    ];

    const [allCheckers, setAllCheckers] = useState(intialCheckerData);



    

    /*const intialCheckerData = [ 
        {coordinates: 'A1', isRed: true},
        {coordinates: 'A3', isRed: true},
        {coordinates: 'A5', isRed: true},
        {coordinates: 'A7', isRed: true},
        {coordinates: 'B2', isRed: true},
        {coordinates: 'B4', isRed: true},
        {coordinates: 'B6', isRed: true},
        {coordinates: 'B8', isRed: true},
        {coordinates: 'C1', isRed: true},
        {coordinates: 'C3', isRed: true},
        {coordinates: 'C5', isRed: true},
        {coordinates: 'C7', isRed: true},

        {coordinates: 'F2', isRed: false},
        {coordinates: 'F4', isRed: false},
        {coordinates: 'F6', isRed: false},
        {coordinates: 'F8', isRed: false},
        {coordinates: 'G1', isRed: false},
        {coordinates: 'G2', isRed: false},
        {coordinates: 'G3', isRed: false},
        {coordinates: 'G4', isRed: false},
        {coordinates: 'H2', isRed: false},
        {coordinates: 'H4', isRed: false},
        {coordinates: 'H6', isRed: false},
        {coordinates: 'H8', isRed: false},
    ];*/

    const checkerData = {
        show: allCheckers,
        setShow: setAllCheckers,
        coordinates: checkerCoordinates, 
        setCoordinates: setCheckerCoordinates, 
        lastCoordinates: lastCheckerCoordinates,
        setLastCoordinates: setLastCheckerCoordinates,
        color: isRed, 
        setColor: setIsRed

    };



    return (
        <div>
            <p>{checkerData.coordinates}</p>
            <p>{String(checkerData.color)}</p>
            <p>Last {checkerData.lastCoordinates}</p>
        <div style={styles} id='board'>    
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {11}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[0]}/>
                <Space checkerData ={checkerData} coordinates = {12}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[1]}/>
                <Space checkerData ={checkerData} coordinates = {13}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[2]}/>
                <Space checkerData ={checkerData} coordinates = {14}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[3]}/>
                <Space checkerData ={checkerData} coordinates = {15}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[4]}/>
                <Space checkerData ={checkerData} coordinates = {16}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[5]}/>
                <Space checkerData ={checkerData} coordinates = {17}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[6]}/>
                <Space checkerData ={checkerData} coordinates = {18}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[7]}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {21}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[8]}/>       
                <Space checkerData ={checkerData} coordinates = {22}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[9]}/>
                <Space checkerData ={checkerData} coordinates = {23}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[10]}/>
                <Space checkerData ={checkerData} coordinates = {24}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[11]}/>
                <Space checkerData ={checkerData} coordinates = {25}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[12]}/>
                <Space checkerData ={checkerData} coordinates = {26}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[13]}/>
                <Space checkerData ={checkerData} coordinates = {27}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[14]}/>
                <Space checkerData ={checkerData} coordinates = {28}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[15]}/>
         </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {31}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[16]}/>
                <Space checkerData ={checkerData} coordinates = {32}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[17]}/>
                <Space checkerData ={checkerData} coordinates = {33}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[18]}/>
                <Space checkerData ={checkerData} coordinates = {34}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[19]}/>
                <Space checkerData ={checkerData} coordinates = {35}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[20]}/>
                <Space checkerData ={checkerData} coordinates = {36}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[21]}/>
                <Space checkerData ={checkerData} coordinates = {37}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[22]}/>
                <Space checkerData ={checkerData} coordinates = {38}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[23]}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {41}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[24]}/>       
                <Space checkerData ={checkerData} coordinates = {42}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[25]}/>
                <Space checkerData ={checkerData} coordinates = {43}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[26]}/>
                <Space checkerData ={checkerData} coordinates = {44}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[27]}/>
                <Space checkerData ={checkerData} coordinates = {45}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[28]}/>
                <Space checkerData ={checkerData} coordinates = {46}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[29]}/>
                <Space checkerData ={checkerData} coordinates = {47}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[30]}/>
                <Space checkerData ={checkerData} coordinates = {48}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[31]}/>
         
        </div>
        <div className='row'>
               <Space checkerData ={checkerData} coordinates = {51}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[32]}/>
                <Space checkerData ={checkerData} coordinates = {52}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[33]}/>
                <Space checkerData ={checkerData} coordinates = {53}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[34]}/>
                <Space checkerData ={checkerData} coordinates = {54}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[35]}/>
                <Space checkerData ={checkerData} coordinates = {55}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[36]}/>
                <Space checkerData ={checkerData} coordinates = {56}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[37]}/>
                <Space checkerData ={checkerData} coordinates = {57}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[38]}/>
                <Space checkerData ={checkerData} coordinates = {58}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}isEmpty={allCheckers[39]}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {61}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[40]}/>       
                <Space checkerData ={checkerData} coordinates = {62}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[41]}/>
                <Space checkerData ={checkerData} coordinates = {63}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[42]}/>
                <Space checkerData ={checkerData} coordinates = {64}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[43]}/>
                <Space checkerData ={checkerData} coordinates = {65}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[44]}/>
                <Space checkerData ={checkerData} coordinates = {66}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[45]}/>
                <Space checkerData ={checkerData} coordinates = {67}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[46]}/>
                <Space checkerData ={checkerData} coordinates = {68}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[47]}/>
         
        </div>
        <div className='row'>

                <Space checkerData ={checkerData} coordinates = {71}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[48]}/>
                <Space checkerData ={checkerData} coordinates = {72}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[49]}/>
                <Space checkerData ={checkerData} coordinates = {73}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[50]}/>
                <Space checkerData ={checkerData} coordinates = {74}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[51]}/>
                <Space checkerData ={checkerData} coordinates = {75}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[52]}/>
                <Space checkerData ={checkerData} coordinates = {76}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[53]}/>
                <Space checkerData ={checkerData} coordinates = {77}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[54]}/>
                <Space checkerData ={checkerData} coordinates = {78}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[55]}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {81}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[56]}/>       
                <Space checkerData ={checkerData} coordinates = {82}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[57]}/>
                <Space checkerData ={checkerData} coordinates = {83}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[58]}/>
                <Space checkerData ={checkerData} coordinates = {84}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[59]}/>
                <Space checkerData ={checkerData} coordinates = {85}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[60]}/>
                <Space checkerData ={checkerData} coordinates = {86}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[61]}/>
                <Space checkerData ={checkerData} coordinates = {87}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false} isEmpty={allCheckers[62]}/>
                <Space checkerData ={checkerData} coordinates = {88}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true} isEmpty={allCheckers[63]}/>
         
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