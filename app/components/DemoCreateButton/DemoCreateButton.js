import React from 'react';
import PropTypes from 'prop-types';
import Demo from '../Demo/Demo';

// requires react transition group and css modules and posed
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
  componentName: PropTypes.string,
  componentItem: PropTypes.object,
  objectType: PropTypes.string,
  spawnComponentCallback: PropTypes.func,
};

export default DemoCreateButton;
