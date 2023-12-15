import React, {useState} from 'react';
import Space from './Space.js';
import Checker from './Checker.js';
import styles from '../styles.css';

function Board()
{

    const [isCheckerSelected, setIsCheckerSelected] = useState(false);
    const [checkerCoordinates, setCheckerCoordinates] = useState();
    const [isRed, setIsRed] = useState();
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
        color: isRed, 
        setColor: setIsRed
    };



    return (
        <div>
            <p>{checkerData.coordinates}</p>
            <p>{checkerData.color}</p>
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
                <Space checkerData ={[]} coordinates = '51' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={[]} coordinates = '52' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '53' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={[]} coordinates = '54' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '55' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={[]} coordinates = '56' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '57' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={[]} coordinates = '58' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                
        </div>
        <div className='row'>
                 <Space checkerData ={intialCheckerData[15]} coordinates = '61' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '62' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[12]} coordinates = '63' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '64' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[13]} coordinates = '65' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '66' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[14]} coordinates = '67' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '68' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                
        </div>
        <div className='row'>

                <Space checkerData ={[]} coordinates = '71' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[16]} coordinates = '72' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '73' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[17]} coordinates = '74' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '75' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[18]} coordinates = '76' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '77' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[19]} coordinates = '78' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                
        </div>
        <div className='row'>
                 <Space checkerData ={intialCheckerData[23]} coordinates = '81' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '82' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[20]} coordinates = '83' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '84' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[21]} coordinates = '85' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '86' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                <Space checkerData ={intialCheckerData[22]} coordinates = '87' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={false}/>
                <Space checkerData ={[]} coordinates = '88' checkerCoordinatesF={setCheckerCoordinates} isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} isWhite={true}/>
                
        </div>
        
        </div>

        </div>
    );
}

export default Board;