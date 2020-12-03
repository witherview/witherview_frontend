import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';

import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { showModal, hideModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import Modal from '@components/Modal/Modal';

export default function ConferenceButton({ history }) {
  const dispatch = useDispatch();
  const handleCreate = () => {
    const id = uuid();
    history.push(`/room/${id}`);
  };

  return (
    <>
      <Modal modalName={MODALS.QUESTIONLIST_SAVE_MODAL} />
      <button type="button" onClick={() => handleCreate()}>컨퍼런스 생성</button>
      <button onClick={() => dispatch(showModal(MODALS.QUESTIONLIST_SAVE_MODAL))} type="button">Modal open</button>
      <button onClick={() => dispatch(hideModal(MODALS.QUESTIONLIST_SAVE_MODAL))} type="button">Modal close</button>
      <button type="button" onClick={() => history.push('/self-training')}>혼자연습하기 로딩 및 질의응답</button>
    </>
  );
}

ConferenceButton.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};

ConferenceButton.defaultProp = {
  history: {},
};
