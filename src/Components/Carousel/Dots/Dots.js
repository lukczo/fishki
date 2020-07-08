import React from 'react'; 
import Dot from './Dot/Dot';
import classes from './Dots.module.css';

const dots = (props) => {

    return (
        <div className={classes.dotWrapper}>
        <Dot filling={props.filling === 0 ? "#ecf0f1" : 'none'}/>
        <Dot filling={props.filling === 1 ? "#ecf0f1" : 'none'}/>
        <Dot filling={props.filling === 2 ? "#ecf0f1" : 'none'}/>
        <Dot filling={props.filling === 3 ? "#ecf0f1" : 'none'}/>
        </div>
    )
};
 
export default dots;