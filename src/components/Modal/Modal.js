import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MODALS } from '@utils/constant';
import QuestionListSaveModal from './QuestionListSaveModal';
import SelfTrainStartModal from './SelfTrainStartModal';
import EvaluationModal from './EvaluationModal';
import ModalWrapper from './ModalWrapper';

export default function Modal({
  modalName,
}) {
  const isShow = useSelector((state) => state.modal[modalName]);
  const modalList = {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: <QuestionListSaveModal />,
    [MODALS.SELF_TRAIN_START_MODAL]: <SelfTrainStartModal />,
    [MODALS.EVALUATION_MODAL]: <EvaluationModal />,
  };
  return (
    <>
      { isShow
      && (
      <ModalWrapper modalName={modalName}>
        {modalList[modalName]}
      </ModalWrapper>
      )}
    </>
  );
}

Modal.propTypes = {
  modalName: PropTypes.string,
};
Modal.defaultProps = {
  modalName: '',
};
