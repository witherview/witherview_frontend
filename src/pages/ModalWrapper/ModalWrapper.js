import React from 'react';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(249, 249, 249, 0.85);
  z-index: 100;
`;

const ModalWrapper = ({show, element, dropModal})=> {
  const Modal = element;

  const PreventModalOff = (e)=> {
    e.stopPropagation();
  }

  return (
    <>
      {show && <Container onMouseDown={dropModal}>    
        <Modal PreventModalOff={PreventModalOff} ModalOff={dropModal}></Modal>
      </Container>}
    </>
  );
}

export default ModalWrapper;