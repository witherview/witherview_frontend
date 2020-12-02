import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { MODALS } from '@utils/constant';
import QuestionListSaveModal from './QuestionListSaveModal';

export default function Modal({
  modalName,
}) {
  const isShow = useSelector((state) => state.modal[modalName]);
  const modalList = {
    [MODALS.QUESTIONLIST_SAVE_MODAL]: <QuestionListSaveModal />,
  };
  return (
    <>
      { isShow && modalList[modalName] }
    </>
  );
}

Modal.propTypes = {
  modalName: PropTypes.string,
};
Modal.defaultProps = {
  modalName: '',
};
