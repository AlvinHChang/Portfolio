/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  react: {
    id: `${scope}.component`,
    defaultMessage: 'Components',
  },
  rps: {
    id: `${scope}.rps`,
    defaultMessage: 'Rock Paper Scissors Game',
  },
});
