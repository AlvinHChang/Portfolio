/*
 * ComponentsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import Demo from 'components/Demo/Demo';
import Dropdown from 'components/Dropdown/Dropdown';
import RockPaperScissor from 'components/RockPaperScissor/RockPaperScissor';
import YouTube from 'react-youtube';
import messages from './messages';

export default class ComponentsPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>React Components</title>
          <meta
            name="React Components"
            content="List of React Components that I've made"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Demo
          componentName="Clearity Demo"
          componentItem={<YouTube videoId="k-dqfchI0us" />}
        />
        <Demo
          componentName="RockPaperScissor"
          componentItem={<RockPaperScissor />}
        />
        <Demo
          componentName="Dropdown"
          componentItem={
            <Dropdown
              customButton={<button type="button">Example (Click Here)</button>}
              dropdownItem={<div>Click Again or Click Away</div>}
            />
          }
        />
      </div>
    );
  }
}
