import React, {useState} from 'react';
import redChecker from '../pics/red-checker.png';
import blackChecker from '../pics/black-checker.png';

function Checker(props)
{

    const [isONBoard, setIsOnBoard] = useState(true);
    const [isSelected, setIsSelected] = useState(false);
    //const [coordinates, setCoordinates] = useState('');

    //setIsOnBoard((isONBoard) => isONBoard = false);
    //setIsOnBoard(props.onBoard);
    function handleClick()
    {

        if (isSelected)
        {
            if (props.isSelectedParentV)
            {
                props.isSelectedParentF(false);
                setIsSelected(false);
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
                props.isSelectedParentF(true);
                setIsSelected(true); 
                props.checkerData.setCoordinates(props.coordinates);
                props.checkerData.setColor(props.isRed); // not neccessay mainly for testing
            }
        }
        
    }
    let image;

    if (props.isRed)
    {
        image = redChecker; 
    }
    else
    {
        image = blackChecker;
    }

    let borderStyle;

    const b1 = {
        border: "3px solid blue",
        borderRadius: "30px"
      };

      const b2 = {
        border: "3px solid white",
        borderRadius: "30px"
      };

    if (isSelected)
    {
        borderStyle = b1;
    }
    else
    {
        borderStyle = b2;
    }

    if (isONBoard)
    {
    return (
            <img style={borderStyle} onClick={handleClick}src={image} height={50} width={50}/>
    )
    }

}

export default Checker;