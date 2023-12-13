import React from 'react';

function PictureDisplay(props)
{
    return (
        <div>
        <img src={props.image} width="300" height= "300"/>
        <caption>{props.caption}</caption>
        </div>
    )
}

export default PictureDisplay;