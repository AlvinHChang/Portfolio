/*
 * ComponentsPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import YouTube from 'react-youtube';

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
          Current Projects:
          <ul>
            <div className={styles.githubLink}>
              <ul>
                <a href="https://github.com/AlvinHChang/PrettyHandwriting">
                  PrettyHandwriting
                </a>
              </ul>
            </div>
            I believe why most of our handwriting is messy is because the size
            and position of each letter are not aligned. PrettyHandwriting hopes
            to rescale each letter in a handwritten note to the same size. I
            hope that it would make the handwriting more pleasing to read.
          </ul>
          <ul>
            <div className={styles.githubLink}>
              <ul>
                <a href="https://github.com/AlvinHChang/Portfolio">Portfolio</a>
              </ul>
            </div>
            This is the link to the Github of my current website. I made a quick
            version of it to demonstrate to employers, but I plan on expanding
            and improving it as time goes on. The website is in ReactJS.
          </ul>
        </div>
        <div className={styles.description}>
          Past Projects:
          <ul>
            <div className={styles.githubLink}>
              <ul>
                <a href="https://github.com/AlvinHChang/ISRCafe">ISRCafe</a>
              </ul>
            </div>
            ISRCafe was named after one of the dormitories that I still visit
            after I graduated. The idea was to integrate Google Form/Sheet API
            with a frontend. The end result allowed us to serve refreshments to
            the community in the dormitory in real time. Them sending their
            order, us fulfilling them and allowing them to see when to pick up
            their drink
          </ul>
          <ul>
            <div className={styles.githubLink}>
              <ul>
                <a href="https://github.com/ahchang6/chess">Chess</a>
              </ul>
            </div>
            Chess is one of my passions, so it is only natural that I created a
            simple chess application. Inside the repo includes the testPlan and
            the various files reflecting the designs I have for the game
          </ul>
          <ul>
            <div className={styles.githubLink}>
              <ul>
                <a href="https://clearity-702b7.firebaseapp.com/">Clearity</a>
              </ul>
            </div>
            <YouTube videoId="k-dqfchI0us" />
            Clearity was a project I created with a group of people to help
            streamline questions from students to professors and vice versa. In
            this project, I handled all of backend and helped design the front
            end. I also edited, directed and narrated the demo video.
          </ul>
        </div>
      </div>
    );
  }
}
