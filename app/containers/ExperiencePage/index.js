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
import styles from './ExperiencePage.css';

export default class ExperiencePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Experiences Page</title>
          <meta
            name="Experiences Page"
            content="Items and/or links pertaining to my experiences"
          />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <div className={styles.description}>
          Here are the links to my GitHub pages. I have a school use account and
          a personal use account:
          <div className={styles.githubLink}>
            <ul>
              <a href="https://github.com/ahchang6">School Use</a>
            </ul>
            <ul>
              <a href="https://github.com/AlvinHChang">Personal Use</a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
