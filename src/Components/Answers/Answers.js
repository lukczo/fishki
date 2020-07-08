import React from 'react';
import Button from '../Button/Button';
import classes from './Answers.module.css';

const Answers = (props) => {
    return (
        <div className={classes.wrapper}>
            <Button>{props.answers[0]}</Button>
            <Button>{props.answers[1]}</Button>
            <Button>{props.answers[2]}</Button>
            <Button>{props.answers[3]}</Button>
        </div>
    )
};
 
export default Answers;