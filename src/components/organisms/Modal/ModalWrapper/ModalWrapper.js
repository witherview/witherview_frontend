import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { hideModal } from '@store/Modal/modal';

const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  outline: none;
  z-index: 1000;
`;

const Content = styled.div`
  display: inline-block;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.04);
  background-color: #ffffff;
  margin: 0 auto;
  outline: none;
`;

export default function ModalWrapper({ modalName, children }) {
  const dispatch = useDispatch();
  const handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(hideModal(modalName));
    }
  };

  return (
    <>
      <Background />
      <Wrapper tabIndex="-1" onClick={handleCloseModal}>
        <Content tabIndex="0">{children}</Content>
      </Wrapper>
    </>
  );
}

ModalWrapper.propTypes = {
  modalName: PropTypes.string,
  children: PropTypes.element,
};

ModalWrapper.defaultProp = {
  modalName: '',
};
