import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './Dropdown.css';

// requires react transition group and css modules

// Dropdown item, this item act as a dropdown. Only requires passing in a button/text as the dropdown button
// Also requires the items that show up when the dropdown is shown.
class Dropdown extends React.Component {
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
    const { toggled } = this.state;
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
            {toggled ? (
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

Dropdown.propTypes = {
  // Can be text, or can pass object in for the button to be the dropdown button
  customButton: PropTypes.node,
  // the object that will show up when the dropdown is opened
  dropdownItem: PropTypes.object,
  // Optional color of the dropdown item
  dropdownBackgroundColor: PropTypes.string,
  // Whether the dropdown opens through hovering or clicking over the button
  isHover: PropTypes.bool,
};

export default Dropdown;
