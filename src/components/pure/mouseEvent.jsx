import React from 'react';

const MouseEvent = (color) => {
    
    function randomColor(){
        setInterval(() => {
            console.log('hello')
        }, 1000);
    }

    return (
        <div id='box' style={{width:'225px', height:'255px',backgroundColor:'black'}} onMouseOver={()=>randomColor()}>
            
        </div>
    );
}

export default MouseEvent;
