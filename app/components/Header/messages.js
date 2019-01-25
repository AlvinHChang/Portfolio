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
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
  portfolio: {
    id: `${scope}.portfolio`,
    defaultMessage: 'Portfolio',
  },
  react: {
    id: `${scope}.react`,
    defaultMessage: 'React Components',
  },
  rps: {
    id: `${scope}.rps`,
    defaultMessage: 'Rock Paper Scissors Game',
  },
});
