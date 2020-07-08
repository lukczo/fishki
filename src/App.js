import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar/Toolbar';
import LandingPage from './Containers/LandingPage/LandingPage';
import FishkiCore from './Containers/FishkiCore/FishkiCore';
import FishkiGame from './Containers/FishkiGame/FishkiGame';

class App extends Component {
  state = {
    fishkiOn: false,
    finished: false,
    termList: []
  }

  showFishkiCore = () => {
    this.setState(
      {
        fishkiOn: true
      }
    )
    console.log(this.state.fishkiOn)
  }

  finishHandler = () => {
    this.setState({
      finished: true
    })
    console.log('finishHandler...')
  }

  render() {
    return (<div>
      <Toolbar />
      <LandingPage fishkiOn={this.state.fishkiOn} btnFunction={this.showFishkiCore}/>
      
      {this.state.fishkiOn && this.state.finished === false ? <FishkiCore fishkiOn={this.state.fishkiOn} finished={this.finishHandler} termList={this.state.termList}/> : null }

      {this.state.finished
      ? <FishkiGame finished={this.state.finished} />
      : null}
    </div>)
  }
}


export default App;
