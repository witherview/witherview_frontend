/* eslint-disable import/prefer-default-export */
import { reducers } from '@store';

import { withRedux } from '../../.storybook/decorators/addon-redux-toolkit';

export const withState = withRedux(reducers);
