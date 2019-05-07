import React from 'react';
import PropTypes from 'prop-types';
import styles from './RockPaperScissor.css';

import H1 from '../H1/index';
import H2 from '../H2/index';

import rock from './assets/rockPlaceholder.png';
import paper from './assets/paperPlaceholder.png';
import scissor from './assets/scissorPlaceholder.png';
import nothing from './assets/nothing.png';

const Enum = {
  ROCK: 1,
  PAPER: 2,
  SCISSOR: 3,
  WIDTH: 150,
  HEIGHT: 150,
  keyS: 115,
  keyD: 100,
  keyF: 102,
  keyJ: 106,
  keyK: 107,
  keyL: 108,
};

class RockPaperScissor extends React.Component {
  RPSDict = {
    99: nothing,
    1: rock,
    2: paper,
    3: scissor,
  };

  constructor(props) {
    super(props);
    this.state = {
      keyPressed: 0,
      currentPhase: this.initialize,
      cpuGameState: null,
      playerGameState: null,
      gameMessage: 'start game by pressing any button',
      errorMessage: '',
      cpuLeft: 99,
      cpuRight: 99,
      playerLeft: 99,
      playerRight: 99,
    };
  }

  componentWillMount() {
    document.addEventListener('keypress', this.handleKeyPress, false);
    this.updateGameState();
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  mainLoop = () => {
    this.state.currentPhase();
  };

  getRandomInt = max => Math.floor(Math.random() * Math.floor(max) + 1);

  initialize = () => {
    const cpuLeft = 99;
    const cpuRight = 99;
    const playerLeft = 99;
    const playerRight = 99;
    this.setState({
      cpuLeft,
      cpuRight,
      playerLeft,
      playerRight,
      gameMessage: 'Your Left Hand',
      currentPhase: this.getLeftHand,
    });
  };

  getLeftHand = () => {
    let playerLeft = 99;
    let errorMessage = '';
    if (this.state.keyPressed === RockPaperScissor.RPSenum.keyS) {
      playerLeft = RockPaperScissor.RPSenum.ROCK;
    } else if (this.state.keyPressed === RockPaperScissor.RPSenum.keyD) {
      playerLeft = RockPaperScissor.RPSenum.PAPER;
    } else if (this.state.keyPressed === RockPaperScissor.RPSenum.keyF) {
      playerLeft = RockPaperScissor.RPSenum.SCISSOR;
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
      gameMessage,
      errorMessage,
      currentPhase,
    });
    this.updateGameState();
  };

  getRightHand = () => {
    let playerRight = 99;
    let errorMessage = '';
    if (this.state.keyPressed === RockPaperScissor.RPSenum.keyJ) {
      playerRight = RockPaperScissor.RPSenum.ROCK;
    } else if (this.state.keyPressed === RockPaperScissor.RPSenum.keyK) {
      playerRight = RockPaperScissor.RPSenum.PAPER;
    } else if (this.state.keyPressed === RockPaperScissor.RPSenum.keyL) {
      playerRight = RockPaperScissor.RPSenum.SCISSOR;
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
    const gameMessage = `Choose Hand to Use`;

    this.setState({
      cpuLeft,
      cpuRight,
      playerRight,
      gameMessage,
      errorMessage,
      currentPhase,
    });
    this.updateGameState();
  };

  retractAndCompare = () => {
    let playerComparingHand = -1;
    if (
      this.state.keyPressed === RockPaperScissor.RPSenum.keyS ||
      this.state.keyPressed === RockPaperScissor.RPSenum.keyD ||
      this.state.keyPressed === RockPaperScissor.RPSenum.keyF
    ) {
      playerComparingHand = this.state.playerLeft;
    } else if (
      this.state.keyPressed === RockPaperScissor.RPSenum.keyJ ||
      this.state.keyPressed === RockPaperScissor.RPSenum.keyK ||
      this.state.keyPressed === RockPaperScissor.RPSenum.keyL
    ) {
      playerComparingHand = this.state.playerRight;
    } else {
      return;
    }
    const cpuComparingHand =
      this.getRandomInt(2) === 1 ? this.state.cpuLeft : this.state.cpuRight;
    // We just compare the hands using arithmetic depending on the enums
    const comparedHand = playerComparingHand - cpuComparingHand;
    let result = 0;
    if (comparedHand === -1 || comparedHand === 2) {
      result = -1;
    } else if (comparedHand === 1 || comparedHand === -2) {
      result = 1;
    }
    let resultText = 'You Tied';
    if (result === 1) {
      resultText = 'You Won';
    } else if (result === -1) {
      resultText = 'You Lost';
    }
    this.setState(prevState => ({
      playerRight: prevState.keyPressed,
      gameMessage: `Opponent chose ${
        this.RPSDict[cpuComparingHand]
      } Result ${resultText}, press any key to play again`,
      currentPhase: this.initialize,
    }));
  };

  handleKeyPress = event => {
    this.setState({
      keyPressed: event.charCode,
    });
    this.mainLoop();
  };

  updateGameState = () => {
    const updateGameState = prevState => {
      const playerGameState = (
        <span>
          <img
            alt="playerLeft"
            height={RockPaperScissor.RPSenum.HEIGHT}
            width={RockPaperScissor.RPSenum.WIDTH}
            src={this.RPSDict[prevState.playerLeft]}
          />{' '}
          <img
            alt="playerRight"
            height={RockPaperScissor.RPSenum.HEIGHT}
            width={RockPaperScissor.RPSenum.WIDTH}
            src={this.RPSDict[prevState.playerRight]}
          />
        </span>
      );
      const cpuGameState = (
        <span>
          <img
            alt="cpuLeft"
            height={RockPaperScissor.RPSenum.HEIGHT}
            width={RockPaperScissor.RPSenum.WIDTH}
            src={this.RPSDict[prevState.cpuLeft]}
          />{' '}
          <img
            alt="cpuRight"
            height={RockPaperScissor.RPSenum.HEIGHT}
            width={RockPaperScissor.RPSenum.WIDTH}
            src={this.RPSDict[prevState.cpuRight]}
          />
        </span>
      );
      return { playerGameState, cpuGameState };
    };
    this.setState(updateGameState);
  };

  render() {
    return (
      <div>
        <H1>{this.state.cpuGameState}</H1>
        <H1>{this.state.playerGameState}</H1>
        <H2>{this.state.gameMessage}</H2>
        <span className={styles.errorMsg}>{this.state.errorMessage}</span>
        <span>Instructions</span>
        <div>Simple game of Rock Paper Scissors</div>
        <span>Choosing Hands</span>
        <span>
          <li>S = Rock</li>
          <li>D = Paper</li>
          <li>F = Scissor</li>
          <li>J = Rock</li>
          <li>K = Paper</li>
          <li>L = Scissor</li>
        </span>
      </div>
    );
  }
}

RockPaperScissor.propTypes = {
  RPSenum: PropTypes.oneOf(Object.keys(Enum)),
};
RockPaperScissor.RPSenum = Enum;

export default RockPaperScissor;
