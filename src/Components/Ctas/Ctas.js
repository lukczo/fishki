import React from 'react';
import Button from '../Button/Button';
import classes from './Ctas.module.css';

const Ctas = (props) => {
    return (
        <div className={classes.Ctas}>
            <Button btnFunction={props.btnFunction}>Create your flashcards</Button>
        </div>
    )
};
 
export default Ctas;