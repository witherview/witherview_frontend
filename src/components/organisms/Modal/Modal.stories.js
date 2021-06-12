/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { displayModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import Modal from './Modal';

export default {
  title: 'Modals/Modals',
  description: 'modals',
};

const modals = (args) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayModal({ modalName: MODALS.QUESTIONLIST_SAVE_MODAL }));
    dispatch(displayModal({ modalName: MODALS.SELF_TRAIN_START_MODAL }));
    dispatch(displayModal({ modalName: MODALS.EVALUATION_MODAL }));
    dispatch(displayModal({ modalName: MODALS.STUDY_MAKE_MODAL }));
  });

  return <Modal {...args} />;
};
export const QuestionListSaveModal = modals.bind({});
export const SelfTrainStartModal = modals.bind({});
export const StudyMakeModal = modals.bind({});
export const EvaluationModal = modals.bind({});

QuestionListSaveModal.args = {
  modalName: MODALS.QUESTIONLIST_SAVE_MODAL,
};

SelfTrainStartModal.args = {
  modalName: MODALS.SELF_TRAIN_START_MODAL,
};

StudyMakeModal.args = {
  modalName: MODALS.STUDY_MAKE_MODAL,
};

EvaluationModal.args = {
  modalName: MODALS.EVALUATION_MODAL,
};
