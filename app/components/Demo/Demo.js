import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import posed from 'react-pose';
import styles from './Demo.css';

// requires react transition group and css modules and posed
const Box = posed.div({
  draggable: true,
});

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ toggled: !prevState.toggled }));
  };

  render() {
    const { objectType, componentName, componentItem } = this.props;
    const { toggled } = this.state;
    return (
      <Box>
        <div className={styles.demo}>
          <div className={styles.demoLabel}>
            <span>
              {componentName}
              <button
                className={styles.dropdownButton}
                type="button"
                onClick={this.toggleDropdown}
              >
                Show {objectType}
              </button>
            </span>
          </div>
          {toggled ? (
            <div className={styles.demoItem}>{componentItem}</div>
          ) : null}
        </div>
      </Box>
    );
  }
}

Demo.propTypes = {
  componentName: PropTypes.string,
  componentItem: PropTypes.object,
  objectType: PropTypes.string,
};

export default Demo;
