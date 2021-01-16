import React from 'react';

import AuthRoute from './AuthRoute';

const PeerStudyRoute = React.lazy(() => import('./PeerStudyRoute'));

export default {
  AuthRoute,
  PeerStudyRoute,
};
