import React from 'react';
import { FormattedMessage } from 'react-intl';

import posed from 'react-pose';

import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Dropdown from '../Dropdown/Dropdown';
import ComponentDropdown from '../ComponentSpawnDropdown/ComponentDropdown';
import styles from './index.css';

const Box = posed.div({
  draggable: true,
});

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
        <Box className={styles.navBar}>
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
              dropdownItem={
                <ComponentDropdown
                  spawnComponentCallback={this.renderComponent}
                />
              }
              dropdownBackgroundColor="#0277BD"
            />
          </NavBar>
        </Box>
        {componentRendered.map(component => component)}
      </div>
    );
  }
}

export default Header;
