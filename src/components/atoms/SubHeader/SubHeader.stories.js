/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import SubHeader from './SubHeader';

export default {
  title: 'Atoms/SubHeader',
  component: SubHeader,
};
const SubHeaderComponent = (args) => <SubHeader {...args} />;

export const defaultSubHeader = SubHeaderComponent.bind({});

defaultSubHeader.args = {
  subHeaderText: '서브헤더',
  children: <span>본문</span>,
  fontSize: 24,
  subTitleColor: '#6e6eff',
};
