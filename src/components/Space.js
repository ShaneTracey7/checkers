import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';

function Space(props)
{
const [isEmpty, setIsEmpty] = useState(true);
const [color, setColor] = useState('black');
const [isHover, setIsHover] = useState(false);

/*function handleClick()
{
    if (isEmpty)
    {
        if 
    }
    else
    {
        //DON NOTHING
    }

}*/

let bg = 'black';

let image;

if (props.isWhite)
{
    image = whiteSpace;
    bg = '3px solid white';
}
else
{
    image = blackSpace;
    bg = '3px solid black';
}
if (isHover)
{
    //setColor('blue');
    bg = '3px solid blue';
}
else
{
    if (props.isWhite)
    {
        bg = '3px solid white'; 
    }
    else
    {
        bg = '3px solid black';
    }
    
}
//onClick={handleClick}
return (
<div style={styles}>
<img style={{border:bg}}  onMouseEnter={()=> {if (isEmpty) { setIsHover(true)} }} onMouseLeave={()=> {if (isEmpty) { setIsHover(false)} }} src={image} height= {50} width={50} />
</div>
)

}

export default Space;