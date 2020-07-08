import React from 'react';
import classes from './InputField.module.css';
 
const InputField = (props) => {
    return(
        <li>
        <input type="text" onChange={props.inputFunction} value={props.value}></input>
      </li>
    )
};
 
export default InputField;