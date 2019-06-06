import React from 'react';
import PropTypes from 'prop-types';
import Demo from '../Demo/Demo';

// A button that creates an instance of the demo passed in and calls the callback to add to parent class
class DemoCreateButton extends React.Component {
  createDemoItem = () => {
    this.props.spawnComponentCallback(<Demo {...this.props} />);
  };

  render() {
    const { componentName } = this.props;
    return (
      <button type="button" onClick={this.createDemoItem}>
        {componentName}
      </button>
    );
  }
}

DemoCreateButton.propTypes = {
  // Name of the component demoed
  componentName: PropTypes.string,
  // The object of the component demoed
  componentItem: PropTypes.object,
  // Optional tag that user can pass in, will display so that the Demo will identify type of component
  objectType: PropTypes.string,
  // callback that anchors the Demo items into the parent
  spawnComponentCallback: PropTypes.func,
};

export default DemoCreateButton;
