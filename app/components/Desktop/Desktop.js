import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './Desktop.css';

// requires react-iframe and css modules

class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleMouseEnter = () => {
    if (this.props.isHover) {
      this.setState({ toggled: true });
    }
  };

  handleMouseLeave = () => {
    if (this.props.isHover) {
      this.setState({ toggled: false });
    }
  };

  handleClick = () => {
    if (!this.props.isHover) {
      this.toggleDropdown();
    }
  };

  render() {
    const { customButton, dropdownItem, dropdownBackgroundColor } = this.props;
    return (
      <div
        ref={node => {
          this.node = node;
        }}
        className={styles.dropdown}
      >
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          <button
            className={styles.dropdownButton}
            type="button"
            onClick={this.handleClick}
          >
            {customButton}
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
            {this.state.toggled ? (
              <div
                style={{ backgroundColor: dropdownBackgroundColor }}
                className={styles.dropdownItem}
              >
                {dropdownItem}
              </div>
            ) : null}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

Desktop.propTypes = {
  customButton: PropTypes.node,
  dropdownItem: PropTypes.object,
  dropdownBackgroundColor: PropTypes.string,
  isHover: PropTypes.bool,
};

export default Desktop;
