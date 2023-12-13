import React, {useState} from 'react';
import whiteSpace from '../pics/white-space.png';
import blackSpace from '../pics/black-space.png';
import styles from '../styles.css';

function Space(props)
{
const [isEmpty, setIsEmpty] = useState(false);
const [color, setColor] = useState('black');
const [isHover, setIsHover] = useState(false);

let bg = 'black';

let image;

function handleHover(e)
{
    e.target.style.backgroundColor = 'black';
    /*
    if (e.target.style.backgroundColor ==="#000000")
    {
        setColor("#0000ff");
        counter+= 1;
    }
    else
    {
        setColor("#000000");
        counter+= 2;
    }*/
    //highlight space
}

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

return (
<div style={styles}>
<img style={{border:bg}} onMouseEnter={()=> {if (isEmpty) { setIsHover(true)} }} onMouseLeave={()=> {if (isEmpty) { setIsHover(false)} }} src={image} height= {50} width={50} />
</div>
)

}

export default Space;