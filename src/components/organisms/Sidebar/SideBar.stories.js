/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SideBar from './SideBar';

export default {
  title: 'Organisms/Side Bar',
  component: SideBar,
};

export const sideBar = () => (
  <MemoryRouter>
    <SideBar />
  </MemoryRouter>
);
