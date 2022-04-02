import React from 'react';

const MouseEvent = ({changeColors,stateColor}) => { 

    function randomColor(){
        changeColors(true)
    }

    function stopRandomColor() {
        changeColors(false)
    }

    return (
        <div id='box' style={{width:'225px', height:'255px',backgroundColor:`rgb(${stateColor}`}} onMouseOver={()=>randomColor()} onMouseLeave={()=>stopRandomColor()} onDoubleClick={()=>stopRandomColor()}>
        </div>
    );
}

export default MouseEvent;
