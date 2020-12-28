import React from 'react';
import SelfTrainEntryPage from './SelfTrainEntryPage';
import SelectCard from './SelectCard';

export default {
  title: 'Page/SelfTrainEntryPage',
  component: SelfTrainEntryPage,
};

export const SelfTrainEntryPageDefault = () => <SelfTrainEntryPage />;
export const SelectCardDefault = () => (
  <>
    <SelectCard kind={0} />
    <SelectCard kind={0} clicked />
    <SelectCard kind={1} />
    <SelectCard kind={1} clicked />
  </>
);
