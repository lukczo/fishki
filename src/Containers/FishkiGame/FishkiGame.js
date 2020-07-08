import React, { Component } from "react";
import classes from "./FishkiGame.module.css";
import Score from "../../Components/Score/Score";
import Timer from "../../Components/Timer/Timer";
import Button from "../../Components/Button/Button";
import Cards from "../../Components/Cards/Cards";
import Answers from "../../Components/Answers/Answers";

class FishkiGame extends Component {
  state = {
    score: 0,
    time: 0,
    question: 'test',
    answers: ['a', 'b', 'c', 'd'],
    wordList: []
  }
  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.wrapperRow}>
          <Score />
          <Timer />
          <Button>Quit game</Button>
        </div>

    <Cards>{this.state.question} {this.state.wordList}</Cards>
        <Answers answers={this.state.answers}/>
      </div>
    );
  }
}

export default FishkiGame;
