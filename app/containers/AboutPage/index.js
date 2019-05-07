/*
 * ComponentsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H3 from 'components/H3';
import messages from './messages';

export default class AboutPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>About Me Page</title>
          <meta name="About Me" content="Short bio about Alvin" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <H3>
          Alvin Chang is a Software Engineer with experience in Full-Stack
          development, Machine Learning and Virtual Reality.
        </H3>
      </div>
    );
  }
}
