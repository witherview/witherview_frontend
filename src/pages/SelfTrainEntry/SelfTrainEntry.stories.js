import React from 'react';
import SelfTrainEntry from './SelfTrainEntry';
import SelectCard from './SelectCard';

export default {
  title: 'Page/SelfTrainEntry',
  component: SelfTrainEntry,
};

export const SelfTrainEntryPage = () => <SelfTrainEntry />;
export const SelectCardDefault = () => (
  <>
    <SelectCard kind={0} />
    <SelectCard kind={0} clicked />

    <SelectCard kind={1} />
    <SelectCard kind={1} clicked />
  </>
);
