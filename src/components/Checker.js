import React, {useState} from 'react';
import redChecker from '../pics/red-checker.png';
import blackChecker from '../pics/black-checker.png';
import redKingChecker from '../pics/red-king-checker.png';
import blackKingChecker from '../pics/black-king-checker.png';

function Checker(props)
{
    //const [isONBoard, setIsOnBoard] = useState(true);
    //const [isSelected, setIsSelected] = useState(false);
    //const [coordinates, setCoordinates] = useState('');

    //setIsOnBoard((isONBoard) => isONBoard = false);
    //setIsOnBoard(props.onBoard);
    function handleClick()
    {
            if (props.isSelectedV)
            {   
                if (props.isSelectedParentV)
                {
                    props.isSelectedParentF(false);
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

                    if (props.checkerData.turn == props.isRed)
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

    let borderStyle;

    const b1 = {
        //border: "3px solid blue",
        marginTop: "3px",
        marginLeft: "3px",
        borderRadius: "30px",
        boxShadow: "1px 1px 8px 1px blue"
      };

      const b2 = {
        //border: "3px solid white",
        marginTop: "3px",
        marginLeft: "3px",
        borderRadius: "30px",
        boxShadow: "1px 1px 10px 0px black"
      };

    if (props.isSelectedV)
    {
        borderStyle = b1;
    }
    else
    {
        borderStyle = b2;
    }

    /*if (isONBoard)
    {*/
    return (
            <img style={borderStyle} onClick={handleClick} src={image} height={50} width={50}/>
            
    )
  //  }

}

export default Checker;