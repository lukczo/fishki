import React from 'react';
 
const dot = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="25px" height="25px">
            <circle cx="12.5" cy="12.5" r="5" stroke="#ecf0f1" strokeWidth="1" fill={props.filling} />
        </svg> 
    )
};
 
export default dot;
