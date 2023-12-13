import React, {useState} from 'react';
import redChecker from '../pics/red-checker.png';
import blackChecker from '../pics/black-checker.png';

function Checker(props)
{

    const [isONBoard, setIsOnBoard] = useState(true);
    //setIsOnBoard((isONBoard) => isONBoard = false);
    setIsOnBoard(props.onBoard);

    let image;

    if (props.isRed)
    {
        image = redChecker;
    }
    else
    {
        image = blackChecker;
    }

    if (isONBoard)
    {
    return (
            <img src={image} height={50} width={50}/>
    )
    }

}

export default Checker;