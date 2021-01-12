import React, { useState } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import P from '@pages';

const ROOM_PAGE = 0;
const SETTING_PAGE = 1;
const TRAIN_PAGE = 2;

export default function PeerStudyRoute({ match, history }) {
  const [step, setStep] = useState(ROOM_PAGE);
  const { id } = match.params;
  return {
    [ROOM_PAGE]: (
      <P.PeerStudyRoomPage
        id={id}
        history={history}
        setStepSetting={() => setStep(SETTING_PAGE)}
        setStepTrain={() => setStep(SETTING_PAGE)}
      />
    ),
    [SETTING_PAGE]: (
      <P.PeerStudySettingPage setStepTrain={() => setStep(TRAIN_PAGE)} />
    ),
    [TRAIN_PAGE]: <P.PeerStudyTrainPage roomId={id} history={history} />,
  }[step];
}

PeerStudyRoute.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
