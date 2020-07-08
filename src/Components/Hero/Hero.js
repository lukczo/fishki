import React from 'react';
import classes from './Hero.module.css';
import Carousel from '../Carousel/Carousel';

const hero = (props) => {
    return (
        <main>     
            <Carousel />
            <div className={classes.hero}>
                <h3>
                    Welcome to FishkiApp!
                </h3>
                <p>Here you can create your own memory cards which will help your learning immensily!</p>
                <p>Just click the button below and enter word pairs to start.</p>
            </div>     
        </main>
    )
};
 
export default hero;