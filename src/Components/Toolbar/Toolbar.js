import React from 'react';
import classes from './Toolbar.module.css'
const toolbar = (props) => {
    return (
        <nav className={classes.Toolbar}>
            <span onClick={()=>{window.location.reload(false);}}> FishkiApp </span>
        </nav>
    )
};
 
export default toolbar;