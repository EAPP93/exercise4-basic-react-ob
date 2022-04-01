import React,{useState} from 'react';
import MouseEvent from '../pure/mouseEvent';

const Main = () => {

    let red;
    let blue;
    let green;

    const [color, setColor] = useState('black');

    return (
        <div style={{minWidth:'100vw', minHeight:'100vh',backgroundColor: 'lightblue', display: 'flex',alignItems:'center',justifyContent:'center'}}>
            <MouseEvent></MouseEvent>
        </div>
    );
}

export default Main;
