import React from 'react';

import useReactMediaRecorder from '@hooks/useMediaRecorder';

import CamView from './CamView';

export default {
  title: 'Organisms/Cam View',
  component: CamView,
};

export const normalCamView = () => {
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

export const normalCamViewRecord = () => <CamView status="recording" />;
export const normalCamViewRecordName = () => (
  <CamView name="ABC" status="recording" />
);

export const scriptCamView = () => (
  <CamView width={773} height={590} name="AAA" />
);

export const oneOnOneCamView = () => (
  <CamView oneOnOne width={800} height={590} />
);
