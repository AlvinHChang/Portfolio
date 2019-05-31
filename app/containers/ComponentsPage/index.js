/*
 * ComponentsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
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
        Here is an empty page! Hover over components, and click any item to
        create an instance of that demo!
      </div>
    );
  }
}
