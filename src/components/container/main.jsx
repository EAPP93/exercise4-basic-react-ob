import React,{useState, useEffect} from 'react';
import MouseEvent from '../pure/mouseEvent';

const Main = () => {

    const [stateColor, setStateColors] = useState('0,0,0');
    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        let intervalID = null;
        changeColor ?
        intervalID = setInterval(() => {
            let newcolors = `${Math.trunc(Math.random() * 250)},${Math.trunc(Math.random() * 250)},${Math.trunc(Math.random() * 250)}`
            changeStateColors(newcolors);
        }, 1000)
        :
        clearInterval(intervalID);

        ;return () => {
            clearInterval(intervalID)
        };

    }, [changeColor,stateColor]);

    function changeStateColors(newcolors) {
        setStateColors(newcolors)
    }

    function changeColors(state) {
        setChangeColor(state);
    }

    return (
        <div style={{minWidth:'100vw', minHeight:'100vh',backgroundColor: 'lightblue', display: 'flex',alignItems:'center',justifyContent:'center'}}>
            <MouseEvent  changeColors={changeColors}  stateColor={stateColor}></MouseEvent>
        </div>
    );
}

export default Main;
