import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Dropdown from '../Dropdown/Dropdown';

import styles from './index.css';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <Dropdown
          isHover
          customButton={
            <HeaderLink to="/features">
              <div>
                <FormattedMessage {...messages.portfolio} />
              </div>
            </HeaderLink>
          }
          dropdownItem={<PortfolioDropdown />}
          dropdownBackgroundColor="black"
        />
      </NavBar>
    );
  }
}

export default Header;

function PortfolioDropdown() {
  return (
    <div className={styles.portfolioDropdown}>
      <ul>
        <Link to="/components">
          <FormattedMessage {...messages.react} />
        </Link>
      </ul>
      <ul>
        <Link to="/rps">
          <FormattedMessage {...messages.rps} />
        </Link>
      </ul>
    </div>
  );
}
