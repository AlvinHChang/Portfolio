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
import styles from './ProjectPage.css';

export default class ProjectPage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Project Page</title>
          <meta name="Project Page" content="Current Projects" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>

        <div className={styles.description}>
          Here are a few descriptions on my current projects
          <div className={styles.githubLink}>
            <ul>
              <div className={styles.githubLink}>
                <ul>
                  <a href="https://github.com/AlvinHChang/PrettyHandwriting">
                    PrettyHandwriting
                  </a>
                </ul>
              </div>
              I believe why most of our handwriting is messy is because the size
              and position of each letter are not aligned. PrettyHandwriting
              hopes to rescale each letter in a handwritten note to the same
              size. I hope that it would make the handwriting more pleasing to
              read.
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
