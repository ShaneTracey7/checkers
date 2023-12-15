import React, {useState} from 'react';
import Space from './Space.js';
import Checker from './Checker.js';
import styles from '../styles.css';

function Board()
{

    const [isCheckerSelected, setIsCheckerSelected] = useState(false);

    return (
        <div style={styles} id='board'>
        <div className='row'>
            <div className='container'>
                <Space isWhite={false}/>
                <div className='overlay'>
                    <Checker isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} onBoard={true} isRed={true}/> 
                </div>
            </div>
            <div className='container'>
                <Space isWhite={true}/>
                <div className='overlay'>
                    {/* <Checker onBoard={false}isRed={true}/> */}
                </div>
            </div>
            <div className='container'>
                <Space isWhite={false}/>
                <div className='overlay'>
                    <Checker isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} onBoard={true} isRed={true}/>
                </div>
            </div>
            <div className='container'>
                <Space isWhite={true}/>
                <div className='overlay'>
                   {/* <Checker onBoard={false} isRed={true}/> */}
                </div>
            </div>
            <div className='container'>
                <Space isWhite={false}/>
                <div className='overlay'>
                    <Checker  isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} onBoard={true} isRed={true}/>
                </div>
            </div>
            <div className='container'>
                <Space isWhite={true}/>
                <div className='overlay'>
                  {/*  <Checker onBoard={false} isRed={true}/> */}
                </div>
            </div>
            <div className='container'>
                <Space isWhite={false}/>
                <div className='overlay'>
                    <Checker isSelectedParentV={isCheckerSelected} isSelectedParentF= {setIsCheckerSelected} onBoard={true} isRed={true}/>
                </div>
            </div>
            <div className='container'>
                <Space isWhite={true}/>
                <div className='overlay'>
                  {/*  <Checker onBoard={false} isRed={true}/> */}
                </div>
            </div>
        </div>
        <div className='row'>
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        </div>
        <div  className='row'>
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        </div>
        <div className='row'>
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        </div>
        <div  className='row'>
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        </div>
        <div className='row'>
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        </div>
        <div  className='row'>
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        </div>
        <div className='row'>
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        <Space isWhite={true} />
        <Space isWhite={false} />
        </div>
        </div>
    );
}

export default Board;