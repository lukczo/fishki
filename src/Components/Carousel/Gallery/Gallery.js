import React from 'react';
 
const gallery = (props) => {
    return (
        <span className={props.styling.join(" ")}>{props.children}</span>
    )
};
 
export default gallery;