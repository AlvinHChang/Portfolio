import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import styles from './Demo.css';

// requires react transition group and css modules

class Demo extends React.Component {
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

  handleClick = () => {
    if (!this.props.isHover) {
      this.toggleDropdown();
    }
  };

  render() {
    const { objectType, componentName, componentItem } = this.props;
    const { toggled } = this.state;
    return (
      <div className={styles.demo}>
        <div className={styles.demoLabel}>
          <span>
            {componentName}
            <button
              className={styles.dropdownButton}
              type="button"
              onClick={this.handleClick}
            >
              Show {objectType}
            </button>
          </span>
        </div>
        {toggled ? (
          <div className={styles.demoItem}>{componentItem}</div>
        ) : null}
      </div>
    );
  }
}

Demo.propTypes = {
  componentName: PropTypes.string,
  componentItem: PropTypes.object,
  objectType: PropTypes.string,
  dropdownBackgroundColor: PropTypes.string,
  isHover: PropTypes.bool,
};

export default Demo;
