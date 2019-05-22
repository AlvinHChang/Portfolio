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
import styles from './AboutPage.css';

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

        <div className={styles.description}>
          Welcome! I am Alvin, a Software Engineer currently in the transition of moving from Urbana, IL to Chicago, IL.
          I enjoy developing and engineering new software and web apps. While I have experience in UI/UX design, my focus
          is on the Software Engineering and the best way to develop new technology/components. My main industry experience focuses
          in Full-Stack development and Software Architecture, but I also dabble in Machine Learning and Virtual Reality on the side.
        </div>
      </div>
    );
  }
}
