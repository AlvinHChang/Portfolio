/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.AboutDropdown';

export default defineMessages({
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  experience: {
    id: `${scope}.experience`,
    defaultMessage: 'Experiences',
  },
});
