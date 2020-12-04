import React from 'react';

import LandingPage from './LandingPage';
import LandingHeader from './LandingHeader';
import LandingTop from './LandingTop';
import LandingBottom from './LandingBottom';

export default {
  title: 'page/LandingPage',
  component: LandingPage,
};

export const LandingPageDefault = () => <LandingPage />;

export const LandingHeaderDefault = () => <LandingHeader />;
export const LandingTopDefault = () => <LandingTop />;
export const LandingBottomDefault = () => <LandingBottom />;
