import React from 'react';
import styles from './RockPaperScissor.css';

import H1 from '../H1/index';
import H2 from '../H2/index';

class RockPaperScissor extends React.Component {
  RPSDict = {
    99: '?',
    0: 'R',
    1: 'P',
    2: 'S',
  };

  constructor(props) {
    super(props);
    this.state = {
      keyPressed: 0,
      currentPhase: this.initialize,
      cpuGameState: '? ?',
      playerGameState: '? ?',
      gameMessage: 'start game by pressing any button',
      errorMessage: '',
      cpuLeft: 0,
      cpuRight: 0,
      playerLeft: 0,
      playerRight: 0,
    };
  }

  componentWillMount() {
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  mainLoop = () => {
    this.state.currentPhase();
  };

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

  initialize = () => {
    const cpuLeft = this.getRandomInt(3);
    const cpuRight = this.getRandomInt(3);
    this.setState({
      cpuLeft,
      cpuRight,
      gameMessage: 'Your Left Hand',
      currentPhase: this.getLeftHand,
    });
  };

  getLeftHand = () => {
    let playerLeft = 99;
    let errorMessage = '';
    if (this.state.keyPressed === 115) {
      playerLeft = 0;
    } else if (this.state.keyPressed === 100) {
      playerLeft = 1;
    } else if (this.state.keyPressed === 102) {
      playerLeft = 2;
    }
    let currentPhase = this.getRightHand;
    const gameMessage = 'Input Your Right Hand';
    if (playerLeft === 99) {
      currentPhase = this.getLeftHand;
      errorMessage = 'Invalid Left Hand';
      this.setState({
        errorMessage,
      });
      return;
    }

    this.setState({
      playerLeft,
      playerGameState: `${this.RPSDict[playerLeft]} ?`,
      gameMessage,
      errorMessage,
      currentPhase,
    });
  };

  getRightHand = () => {
    let playerRight = 99;
    let errorMessage = '';
    if (this.state.keyPressed === 106) {
      playerRight = 0;
    } else if (this.state.keyPressed === 107) {
      playerRight = 1;
    } else if (this.state.keyPressed === 108) {
      playerRight = 2;
    }
    let currentPhase = this.retractAndCompare;
    // we can initialize the cpu here, if I place it afterward error checking
    // it might lead to longer checks
    if (playerRight === 99) {
      currentPhase = this.getRightHand;
      errorMessage = 'Invalid Right Hand, input again';
      this.setState({
        errorMessage,
      });
      return;
    }

    const cpuLeft = this.getRandomInt(3);
    const cpuRight = this.getRandomInt(3);
    const gameMessage = `Choose Hand to retract`;

    this.setState(prevState => ({
      cpuLeft,
      cpuRight,
      playerRight,
      gameMessage,
      errorMessage,
      currentPhase,
      cpuGameState: `${this.RPSDict[cpuLeft]} ${this.RPSDict[cpuRight]}`,
      playerGameState: `${this.RPSDict[prevState.playerLeft]} ${
        this.RPSDict[playerRight]
      }`,
    }));
  };

  retractAndCompare = () => {
    let playerComparingHand = -1;
    if (
      this.state.keyPressed === 115 ||
      this.state.keyPressed === 100 ||
      this.state.keyPressed === 102
    ) {
      playerComparingHand = this.state.playerRight;
    } else if (
      this.state.keyPressed === 106 ||
      this.state.keyPressed === 107 ||
      this.state.keyPressed === 108
    ) {
      playerComparingHand = this.state.playerLeft;
    } else {
      return;
    }
    const cpuComparingHand =
      this.getRandomInt(2) === 0 ? this.state.cpuLeft : this.state.cpuRight;
    const comparedHand = playerComparingHand - cpuComparingHand;
    let result = 0;
    if (comparedHand === -1 || comparedHand === 2) {
      result = -1;
    } else if (comparedHand === 1 || comparedHand === -2) {
      result = 1;
    }
    this.setState(prevState => ({
      playerRight: prevState.keyPressed,
      gameMessage: `Opponent chose ${
        this.RPSDict[cpuComparingHand]
      } Result ${result}, press any key to play again`,
      currentPhase: this.initialize,
    }));
  };

  handleKeyPress = event => {
    this.setState({
      keyPressed: event.charCode,
    });
    this.mainLoop();
  };

  render() {
    return (
      <div>
        <H1>{this.state.cpuGameState}</H1>
        <H1>{this.state.playerGameState}</H1>
        <H2>{this.state.gameMessage}</H2>
        <span className={styles.errorMsg}>{this.state.errorMessage}</span>
      </div>
    );
  }
}

RockPaperScissor.propTypes = {};

export default RockPaperScissor;
