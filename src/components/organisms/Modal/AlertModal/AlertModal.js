import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import A from '@atoms';
import { removeModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import PropTypes from 'prop-types';

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71.8vh;
  padding: 0 3.8vh;

  .close {
    align-self: flex-end;
    margin: 2.6vh 2.6vh 1.1vh 0;
    > i {
      cursor: pointer;
    }
  }

  .title {
    display: flex;
    align-items: center;
    margin-bottom: 5.5vh;
    font-family: AppleSDGothicNeoEB00;
    font-size: 2.4vh;
    line-height: 1.44;

    > i {
      margin-right: 2.2vh;
    }
  }

  .action {
    padding: 3.6vh 0;
    ${({ theme }) => theme.button}
  }
`;

export default function AlertModal({ title, children, callback }) {
  const dispatch = useDispatch();

  const handleHideModal = () => {
    dispatch(removeModal({ modalName: MODALS.ALERT_MODAL }));
    if (callback) callback();
  };

  return (
    <>
      <Modal>
        <div className="close">
          <A.Icon type="cancel_blue" alt="" func={handleHideModal} />
        </div>
        <div className="title">
          <A.Icon type="alert_large" alt="" />
          {title}
        </div>
        <div className="content">{children}</div>
        <div className="action">
          <A.Button theme="outline" text="확인" func={handleHideModal} />
        </div>
      </Modal>
    </>
  );
}

AlertModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  callback: PropTypes.func,
};

AlertModal.defaultProp = {
  title: '',
  children: undefined,
  callback: () => {},
};
