import React from 'react';
import PropTypes from 'prop-types';
import styles from './DemoCreated.css';

// An anchor point for all created Demo objects to anchor onto, it automatically creates an offset for multiple spawning
// class DemoCreated extends React.Component {
function DemoCreated(props) {
  const { componentRendered } = props;
  return (
    <React.Fragment>
      {componentRendered.map((component, index) => (
        <div
          className={styles.offset}
          style={{ top: 20 + index * 20, left: 50 + index * 10 }}
          key={`${typeof component} ${index}`}
        >
          {component}
        </div>
      ))}
    </React.Fragment>
  );
}

DemoCreated.propTypes = {
  // Array that contains the array of components rendered in this anchor
  componentRendered: PropTypes.array,
};

export default DemoCreated;
