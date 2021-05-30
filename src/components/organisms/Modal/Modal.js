import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MODALS } from '@utils/constant';
import ModalWrapper from './ModalWrapper';
import QuestionListSaveModal from './QuestionListSaveModal';
import SelfTrainStartModal from './SelfTrainStartModal';
import StudyMakeModal from './StudyMakeModal';
import EvaluationModal from './EvaluationModal';
import QuestionListEditModal from './QuestionListEditModal';

export default function Modal({ modalName, func, roomId, questionListEdit }) {
  const isShow = useSelector((state) => state.modal[modalName]);
  const modalList = {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: <QuestionListSaveModal />,
    [MODALS.QUESTIONLIST_EDIT_MODAL]: (
      <QuestionListEditModal props={questionListEdit} />
    ),
    [MODALS.SELF_TRAIN_START_MODAL]: <SelfTrainStartModal />,
    [MODALS.STUDY_MAKE_MODAL]: <StudyMakeModal func={func} />,
    [MODALS.EVALUATION_MODAL]: <EvaluationModal roomId={roomId} />,
  };
  return (
    <>
      {isShow && (
        <ModalWrapper modalName={modalName}>
          {modalList[modalName]}
        </ModalWrapper>
      )}
    </>
  );
}

Modal.propTypes = {
  modalName: PropTypes.string,
  func: PropTypes.func,
  roomId: PropTypes.string,
  questionListEdit: PropTypes.object,
};

Modal.defaultProps = {
  modalName: '',
  func: () => {},
  roomId: '0',
};
