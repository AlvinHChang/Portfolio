import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import YouTube from 'react-youtube';
import messages from './messages';
import DemoCreateButton from '../DemoCreateButton/DemoCreateButton';
import styles from './ComponentDropdown.css';
import RockPaperScissor from '../RockPaperScissor/RockPaperScissor';
import Dropdown from '../Dropdown/Dropdown';

class ComponentDropdown extends React.Component {
  render() {
    return (
      <div className={styles.componentDropdown}>
        <ul>
          <Link to="/about">
            <FormattedMessage {...messages.rps} />
          </Link>
        </ul>
        <ul>
          <Link to="/components">
            <FormattedMessage {...messages.react} />
          </Link>
        </ul>
        <ul>
          <DemoCreateButton
            {...this.props}
            componentName="Clearity Demo"
            componentItem={<YouTube videoId="k-dqfchI0us" />}
          />
        </ul>
        <ul>
          <DemoCreateButton
            {...this.props}
            componentName="RockPaperScissor"
            componentItem={<RockPaperScissor />}
          />
        </ul>
        <ul>
          <DemoCreateButton
            {...this.props}
            componentName="Dropdown"
            componentItem={
              <Dropdown
                customButton={
                  <button type="button">Example (Click Here)</button>
                }
                dropdownItem={<div>Click Again or Click Away</div>}
              />
            }
          />
        </ul>
      </div>
    );
  }
}

ComponentDropdown.propTypes = {
  spawnComponentCallback: PropTypes.func,
};

export default ComponentDropdown;
