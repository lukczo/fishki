import React, { Component } from "react";
import classes from "./FishkiCore.module.css";
import Button from "../../Components/Button/Button";
import FlashCard from "../../Components/FlashCard/FlashCard";
import Cards from "../../Components/Cards/Cards";
import FishkiGame from "../../Containers/FishkiGame/FishkiGame";

class FishkiCore extends Component {
  state = {
    query: "",
    def: "",
    termList: [],
    value: "",
    clearedCards: false,
    finished: false
  };

  LIST = [];

  getWords(event, q, d) {

    if (q !== '' && d !== ''){
      event.preventDefault();
      let currentList = this.state.termList;
  
      this.LIST.concat(currentList);
  
      let id = Math.floor(Math.random() * 1001);
  
      this.LIST.push({ query: q, def: d, id: id });
  
      this.setState({
        termList: this.LIST,
        query: "",
        def: "",
        clearedCards: false,
      });
      console.log("this.state.termList:", this.state.termList);
      console.log("LIST:", this.LIST);
    } else {
      console.error('Input fields are empty, please enter some text')
    }

  }

  clearCards = (id) => {
    console.log("Clearing cards...");

    if (id !== "all") {
      for (let [index, listed] of this.LIST.entries()) {
        if (listed.id === id) {
          this.LIST.splice(index, 1);
          console.log("Object removed from LIST", listed.id, this.LIST);
        }
        this.setState({
          clearedCards: true,
          termList: this.LIST
        });
        this.setState({
          clearedCards: false
        });
      }
    } else {
      this.setState({
        clearedCards: true,
        termList: [],
      });
      this.LIST.length = 0;
    }
  };



  render() {
    let cards = [];

    if (!this.clearedCards) {
      for (let [index, card] of this.LIST.entries()) {
        cards.push(
          <Cards key={index} clear={this.clearCards.bind(this, card.id)}>
            {card.query} <br />
            {card.def} <br />
          </Cards>
        );
      }
    } else {
      cards.length = 0;
    }

    return this.props.fishkiOn && !this.state.finished ? (
      <main>
        <div className={classes.hero}>
          <FlashCard termList={this.props.termList} btnFunction={this.getWords.bind(this)} />
          <div className={classes.buttonWrapper}>
            <Button btnFunction={this.props.finished} finished={this.props.finished}>Finish</Button>
            <Button btnFunction={this.clearCards.bind(this, 'all')}>Clear</Button>
          </div>

          <div className={classes.cardsWrapper}>
            {!this.state.clearedCards ? cards : null}
          </div>
        </div>
      </main>
    ) 
    : null
  }
}

export default FishkiCore;
