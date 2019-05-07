import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import messages from './messages';
import styles from './AboutDropdown.css';

class AboutDropdown extends React.Component {
  render() {
    return (
      <div className={styles.componentDropdown}>
        <ul>
          <Link to="/about">
            <FormattedMessage {...messages.about} />
          </Link>
        </ul>
        <ul>
          <Link to="/experience">
            <FormattedMessage {...messages.experience} />
          </Link>
        </ul>
      </div>
    );
  }
}

export default AboutDropdown;
