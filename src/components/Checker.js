import React from 'react';
import redChecker from '../pics/red-checker.png';
import blackChecker from '../pics/black-checker.png';
import redKingChecker from '../pics/red-king-checker.png';
import blackKingChecker from '../pics/black-king-checker.png';

import '../styles.scss';
function Checker(props)
{
    //sets checker is not selected, when there is no checker selected on the board
    if(props.checkerData.coordinates === -1)
    {
        props.isSelectedF(false);
    }
    //for when the user clicks a checker, either results in a highlight or not, depending on the turn and updates the states accordingly
    function handleClick()
    {
            if (props.isSelectedV) // is checker selected from Space
            {   
                if (props.isSelectedParentV) // is checker selected from  Board
                {
                    props.isSelectedParentF(false);
                    props.checkerData.setCoordinates(-1);
                    props.isSelectedF(false);
                }
            }
            else
            {
                if (props.isSelectedParentV)
                {
                //do nothing
                }
                else
                {
                    if (props.gameData.turn === props.isRed)
                    {
                        props.isSelectedParentF(true);
                        props.isSelectedF(true); 
                        props.checkerData.setCoordinates(props.coordinates);
                        props.checkerData.setColor(props.isRed); // not neccessay mainly for testing
                    }
                    else
                    {
                        //do nothing
                    }
                }
            }
    }

    //setting image for checker based on color, and if it is a king
    let image;
    if (props.isRed)
    {   
        if (props.isKing)
        {
            image = redKingChecker;
        }
        else
        {
            image = redChecker; 
        }
    }
    else
    {
        if (props.isKing)
        {
            image = blackKingChecker;
        }
        else
        {
            image = blackChecker; 
        }
    }

    //setting highlight/shadow color dependant on if the checker is selected
    let shadowColor = props.isSelectedV && props.checkerData.coordinates !== -1 ? "1px 1px 8px 1px blue" : "1px 1px 10px 0px black";
    
    return (
            <img alt="checker" id='checker' style={{boxShadow: shadowColor}} onClick={handleClick} src={image} height={50} width={50}/>       
    )
}

export default Checker;