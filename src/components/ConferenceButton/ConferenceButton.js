import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import { v1 as uuid } from 'uuid';

export default function ConferenceButton({ history }) {
  const handleCreate = () => {
    const id = uuid();
    history.push(`/room/${id}`);
  };

  return (
    <button type="button" onClick={() => handleCreate()}>컨퍼런스 생성</button>
  );
}

ConferenceButton.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

ConferenceButton.defaultProp = {
  history: {},
};
