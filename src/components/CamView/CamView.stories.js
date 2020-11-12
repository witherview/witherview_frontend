import React from 'react';
import CamView from './CamView';


export default {
  title: 'CamView',
  component: CamView,
};

export const NormalCamView = () => <CamView />;
export const NormalCamViewRecord = () => <CamView isRecord />;
export const NormalCamViewRecordName = () => <CamView name="ABC" isRecord />;

export const ScriptCamView = () => <CamView width={773} height={590} name="AAA" isRecord />;
