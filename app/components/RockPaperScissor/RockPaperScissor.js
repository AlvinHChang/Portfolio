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

// Rock Paper Scissor variant that is based off of the Chinese/Korean RPS
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
      gameMsg: 'Press Any Key to Start',
      errorMsg: '',
      progressMsg: 'Ready',
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

  // get random integer that is from 1 to Max inclusive
  getRandomInt = max => Math.floor(Math.random() * Math.floor(max) + 1);

  // starts the game
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
      gameMsg: 'Your Left Hand',
      progressMsg: 'In Progress',
      currentPhase: this.getLeftHand,
    });
  };

  // handles obtaining the left hand of the player
  getLeftHand = () => {
    let playerLeft = 99;
    let errorMsg = '';
    if (this.state.keyPressed === RockPaperScissor.RPSenum.keyS) {
      playerLeft = RockPaperScissor.RPSenum.ROCK;
    } else if (this.state.keyPressed === RockPaperScissor.RPSenum.keyD) {
      playerLeft = RockPaperScissor.RPSenum.PAPER;
    } else if (this.state.keyPressed === RockPaperScissor.RPSenum.keyF) {
      playerLeft = RockPaperScissor.RPSenum.SCISSOR;
    }
    let currentPhase = this.getRightHand;
    const gameMsg = 'Input Your Right Hand';
    if (playerLeft === 99) {
      currentPhase = this.getLeftHand;
      errorMsg = 'Invalid Left Hand';
      this.setState({
        errorMsg,
      });
      return;
    }

    this.setState({
      playerLeft,
      gameMsg,
      errorMsg,
      currentPhase,
    });
    this.updateGameState();
  };

  // handles obtaining the right hand of the player
  getRightHand = () => {
    let playerRight = 99;
    let errorMsg = '';
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
      errorMsg = 'Invalid Right Hand, input again';
      this.setState({
        errorMsg,
      });
      return;
    }

    const cpuLeft = this.getRandomInt(3);
    const cpuRight = this.getRandomInt(3);
    const gameMsg = `Choose Hand to Use`;

    this.setState({
      cpuLeft,
      cpuRight,
      playerRight,
      gameMsg,
      errorMsg,
      currentPhase,
    });
    this.updateGameState();
  };

  // handles the portion when player takes away a handle and compares the result based on retracted hand
  retractAndCompare = () => {
    // -1 implies it hasn't initialized
    let playerComparingHand = -1;
    // checks if inputs are valid
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
    // randomly generates the hand the computer will choose
    const cpuLeftOrRight = this.getRandomInt(2);
    const cpuComparingHand =
      cpuLeftOrRight === 1 ? this.state.cpuLeft : this.state.cpuRight;
    // We just compare the hands using arithmetic depending on the enums
    const comparedHandResult = playerComparingHand - cpuComparingHand;
    let result = 0;
    if (comparedHandResult === -1 || comparedHandResult === 2) {
      result = -1;
    } else if (comparedHandResult === 1 || comparedHandResult === -2) {
      result = 1;
    }
    let resultText = 'You Tied';
    if (result === 1) {
      resultText = 'You Won';
    } else if (result === -1) {
      resultText = 'You Lost';
    }
    this.setState({
      gameMsg: `Opponent chose ${
        cpuLeftOrRight === 1 ? 'Left Hand' : 'Right Hand'
      }`,
      progressMsg: `${resultText}, Press Any Key`,
      currentPhase: this.initialize,
    });
  };

  // handles keyPresses when this item is mounted
  handleKeyPress = event => {
    this.setState({
      keyPressed: event.charCode,
    });
    this.mainLoop();
  };

  // function to handle updating the game status, this is called after nearly every turn
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
    const {
      cpuGameState,
      playerGameState,
      gameMsg,
      progressMsg,
      errorMsg,
    } = this.state;
    return (
      <div>
        <H1>{cpuGameState}</H1>
        <H1>{playerGameState}</H1>
        <H2>{gameMsg}</H2>
        <h2 className={styles.progressMsg}>{progressMsg}</h2>
        <p className={styles.errorMsg}>{errorMsg}</p>
        <div className={styles.instructions}>
          <div>Instructions</div>
          <div>Simple game of Rock Paper Scissors</div>
          <div>- Press Any Key to Start</div>
          <div>- Select Rock, Paper, or Scissor for each of your hands</div>
          <div>
            - Then select the one you will use against CPU, press any button to
            play again
          </div>
          <div>- Results will show, then press any button to play again</div>
          <div>Choosing Hands</div>
          <div>
            <li>S = Rock</li>
            <li>D = Paper</li>
            <li>F = Scissor</li>
            <li>J = Rock</li>
            <li>K = Paper</li>
            <li>L = Scissor</li>
          </div>
        </div>
      </div>
    );
  }
}

RockPaperScissor.propTypes = {
  RPSenum: PropTypes.oneOf(Object.keys(Enum)),
};
RockPaperScissor.RPSenum = Enum;

export default RockPaperScissor;
