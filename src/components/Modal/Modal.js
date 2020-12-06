import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MODALS } from '@utils/constant';
import ModalWrapper from './ModalWrapper';
import QuestionListSaveModal from './QuestionListSaveModal';
import SelfTrainStartModal from './SelfTrainStartModal';
import StudyMakeModal from './StudyMakeModal';

export default function Modal({
  modalName, func,
}) {
  const isShow = useSelector((state) => state.modal[modalName]);
  const modalList = {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: <QuestionListSaveModal />,
    [MODALS.SELF_TRAIN_START_MODAL]: <SelfTrainStartModal />,
    [MODALS.STUDY_MAKE_MODAL]: <StudyMakeModal func={func} />,
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
  func: PropTypes.func,
};
Modal.defaultProps = {
  modalName: '',
  func: () => {},
};
