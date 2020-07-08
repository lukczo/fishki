import React, { Component } from 'react';
import classes from './Carousel.module.css';
import Gallery from './Gallery/Gallery';
import Dots from './Dots/Dots';

const PICS = [classes.Hero1, classes.Hero2, classes.Hero3, classes.Hero4];

class Carousel extends Component {
  state = {
    pics: PICS[0],
    styling: [classes.Picture, PICS[0]],
    indexHolder: 0,
    intervalID: 0
  };

  intervalID = 0;

  nextPic = () => {
    let i = this.state.indexHolder;
    i++;

    if (i <= 3) {
      this.setState({
        styling: [classes.Picture, PICS[i]],
        indexHolder: i,
      });
      console.log(this.state.styling, this.state.indexHolder);
    } else {
      this.setState({
        styling: [classes.Picture, PICS[0]],
        indexHolder: 0,
      });
      console.warn('Index > 3');
    }
  };

  componentDidMount() {
    this.intervalID = setInterval(this.nextPic, 4000);
  }
  render() {
    return (
      <div className={classes.Wrapper} onClick={this.nextPic}>
        <Gallery styling={this.state.styling}>
            <Dots filling={this.state.indexHolder} />
        </Gallery>
      </div>
    );
  }
  componentWillUnmount() {
    console.log('[Component will unmount]')
    clearInterval(this.intervalID);
  }
}

export default Carousel;
