import React from 'react';

import useReactMediaRecorder from '../../hooks/useMediaRecorder';

import CamView from './CamView';
import ButtonGroup from './ButtonGroup';

export default {
  title: 'CamView',
  component: CamView,
};

export const NormalCamView = () => {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    screen: true,
  });

  return (
    <div>
      <button type="button" onClick={() => startRecording()}>
        Start Record
      </button>
      <button type="button" onClick={() => stopRecording()}>
        Stop Recroing
      </button>
      <div>{status}</div>
      <CamView status={status} mediaBlobUrl={mediaBlobUrl} />
    </div>
  );
};

export const NormalCamViewRecord = () => <CamView status="recording" />;
export const NormalCamViewRecordName = () => (
  <CamView name="ABC" status="recording" />
);

export const ScriptCamView = () => (
  <CamView width={773} height={590} name="AAA" />
);

export const OneOnOneCamView = () => (
  <CamView oneOnOne width={800} height={590} />
);

export const ButtonGroupDefault = () => <ButtonGroup />;
