import React, { useState } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import useSockStomp from '@hooks/useSockStomp';
import P from '@pages';

const ROOM_PAGE = 0;
const SETTING_PAGE = 1;
const TRAIN_PAGE = 2;

export default function PeerStudyRoute({ match, history }) {
  const [step, setStep] = useState(ROOM_PAGE);
  const { id } = match.params;
  const { handleClick, roomChat, feedbackChat, isConnectStomp } = useSockStomp({
    roomId: id,
  });

  return {
    [ROOM_PAGE]: (
      <P.PeerStudyRoomPage
        id={id}
        history={history}
        setStepSetting={() => setStep(SETTING_PAGE)}
        setStepTrain={() => setStep(TRAIN_PAGE)}
        handleClick={handleClick}
        chat={roomChat}
        isConnectStomp={isConnectStomp}
      />
    ),
    [SETTING_PAGE]: (
      <P.PeerStudySettingPage setStepTrain={() => setStep(TRAIN_PAGE)} />
    ),
    [TRAIN_PAGE]: (
      <P.PeerStudyTrainPage
        roomId={id}
        history={history}
        handleClick={handleClick}
        chat={feedbackChat}
        isConnectStomp={isConnectStomp}
      />
    ),
  }[step];
}

PeerStudyRoute.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
