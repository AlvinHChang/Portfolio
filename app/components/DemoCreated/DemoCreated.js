import React from 'react';
import PropTypes from 'prop-types';
import styles from './DemoCreated.css';


class DemoCreated extends React.Component {
  render() {
    const { componentRendered } = this.props;
    return (
      <React.Fragment>
        {componentRendered.map((component, index) => (
          <div
            className={styles.offset}
            style={{ top: 20 + index * 20, left: 50 + index * 10 }}
          >
            {component}
          </div>
        ))}
      </React.Fragment>
    );
  }
}
DemoCreated.propTypes = {
  componentRendered: PropTypes.array,
};

export default DemoCreated;
