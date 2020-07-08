import React from 'react';
import classes from './Cards.module.css'

const cards = (props) => {
    return (
        <div className={classes.Cards} onClick={props.clear}>
            <strong>
            {props.children}
            </strong>
        </div>
    )
};
 
export default cards;