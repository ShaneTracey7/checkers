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
    ];

    const checkerData = {
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
                 <Space checkerData ={checkerData} coordinates = {11}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {12}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {13}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {14}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {15}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {16}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {17}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {18}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {21}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>       
                <Space checkerData ={checkerData} coordinates = {22}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {23}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {24}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {25}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {26}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {27}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {28}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
         </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {31}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {32}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {33}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {34}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {35}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {36}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {37}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {38}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {41}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>       
                <Space checkerData ={checkerData} coordinates = {42}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {43}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {44}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {45}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {46}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {47}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {48}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
         
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {51}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {52}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {53}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {54}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {55}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {56}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {57}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {58}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {61}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>       
                <Space checkerData ={checkerData} coordinates = {62}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {63}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {64}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {65}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {66}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {67}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {68}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
         
        </div>
        <div className='row'>

                <Space checkerData ={checkerData} coordinates = {71}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {72}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {73}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {74}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {75}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {76}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {77}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {78}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
               
        </div>
        <div className='row'>
                <Space checkerData ={checkerData} coordinates = {81}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>       
                <Space checkerData ={checkerData} coordinates = {82}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {83}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {84}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {85}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {86}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={checkerData} coordinates = {87}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={checkerData} coordinates = {88}  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
         
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