import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Iframe from 'react-iframe';
import styles from './Desktop.css';

// requires react-iframe and css modules test

// WIP, idea to be a component that simulates multiple desktops,
// currently halted because Cross-Origin doesn't allow loading through iFrames
class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlLink: '',
      iframeLink: '',
      toggled: false,
    };
  }

  toggleDropdown = () => {
    if (this.state.toggled) {
      document.removeEventListener('click', this.handleClickOutside);
    } else {
      document.addEventListener('click', this.handleClickOutside);
    }
    this.setState(prevState => ({ toggled: !prevState.toggled }));
  };

  handleClickOutside = event => {
    if (!this.node.contains(event.target)) {
      this.toggleDropdown();
    }
  };

  updateURL = event => {
    this.setState({
      urlLink: event.target.value,
    });
  };

  submitURL = () => {
    this.setState(prevState => ({ iframeLink: prevState.urlLink }));
  };

  render() {
    return (
      <div
        ref={node => {
          this.node = node;
        }}
        className={styles.dropdown}
      >
        <input value={this.state.urlLink} onChange={this.updateURL} />
        <button type="button" onClick={this.submitURL}>
          Go to URL
        </button>
        <CSSTransitionGroup
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
          transitionName={{
            enter: styles['example-enter'],
            enterActive: styles['example-enter-active'],
            leave: styles['example-leave'],
            leaveActive: styles['example-leave-active'],
          }}
        >
          <Iframe url={this.state.iframeLink} width="450px" height="450px" />
        </CSSTransitionGroup>
      </div>
    );
  }
}

Desktop.propTypes = {};

export default Desktop;
