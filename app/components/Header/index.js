import React from 'react';
import { FormattedMessage } from 'react-intl';


import HeaderLink from './HeaderLink';
import messages from './messages';
import Dropdown from '../Dropdown/Dropdown';
import ComponentDropdown from '../ComponentDropdown/ComponentDropdown';
import AboutDropdown from '../AboutDropdown/AboutDropdown';
import styles from './index.css';
import DemoCreated from '../DemoCreated/DemoCreated';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentRendered: [],
    };
  }

  renderComponent = newComponent => {
    // appending the new component
    this.setState(prevState => ({
      componentRendered: [...prevState.componentRendered, newComponent],
    }));
  };

  render() {
    const { componentRendered } = this.state;
    return (
      <div>
        <div className={styles.navBar}>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <Dropdown
            isHover
            customButton={
              <HeaderLink to="/about">
                <div>
                  <FormattedMessage {...messages.about} />
                </div>
              </HeaderLink>
            }
            dropdownItem={<AboutDropdown />}
            dropdownBackgroundColor="#0277BD"
          />
          <Dropdown
            isHover
            customButton={
              <HeaderLink to="/components">
                <div>
                  <FormattedMessage {...messages.react} />
                </div>
              </HeaderLink>
            }
            dropdownItem={
              <ComponentDropdown
                spawnComponentCallback={this.renderComponent}
              />
            }
            dropdownBackgroundColor="#0277BD"
          />
        </div>
        <DemoCreated componentRendered={componentRendered} />
      </div>
    );
  }
}

export default Header;
