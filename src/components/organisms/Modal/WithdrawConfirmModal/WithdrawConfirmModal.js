import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { withdrawApi } from '@repository/accountRepository';
import A from '@atoms';
import { removeModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';
import { setLogout } from '@store/Auth/auth';
import { useHistory } from 'react-router-dom';

const WithdrawModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 71.8vh;
  height: 50vh;

  .close {
    align-self: flex-end;
    margin: 2.6vh 2.6vh 1.1vh 0;
    > i {
      cursor: pointer;
    }
  }

  .title {
    margin-top: 2.5vh;
    font-family: AppleSDGothicNeoEB00;
    font-size: 3.6vh;
    font-weight: normal;
    font-stretch: normal;
    font-style: bold;
    line-height: 1.44;
    letter-spacing: normal;
    text-align: left;
    color: #000000;
  }

  .content {
    margin: 2vh 0 3.8vh 0;
    font-family: AppleSDGothicNeoM00;
    font-size: 2.4vh;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #3d3d3d;
  }

  .password-field {
    display: flex;

    > div {
      margin: 0 2vh 2.8vh 2vh;

      input {
        height: inherit;
        font-size: 1.8vh;
      }
    }
  }

  .button-wrapper {
    ${({ theme }) => theme.button}
  }
`;

export default function WithdrawConfirmModal() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const handleHideModal = () => {
    dispatch(removeModal({ modalName: MODALS.WITHDRAW_CONFIRM_MODAL }));
  };

  const handleStart = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 같지 않습니다.');
      return;
    }

    try {
      const result = await withdrawApi({
        password,
      });

      if (result.status !== 200) alert(result.response.data.message);
      else {
        dispatch(removeModal({ modalName: MODALS.WITHDRAW_CONFIRM_MODAL }));
        dispatch(setLogout());
        history.push('/');
        alert(result.data);
      }
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <>
      <WithdrawModal>
        <div className="close">
          <A.Icon type="cancel_blue" alt="" func={handleHideModal} />
        </div>
        <A.Icon type="check_large" alt="" />
        <div className="title">정말 탈퇴하시겠습니까?</div>
        <div className="content">
          탈퇴할 경우 계정 재사용 및 복구가 불가능합니다.
        </div>
        <div className="password-field">
          <A.SubHeader subHeaderText="비밀번호" fontSize="2vh">
            <A.InputBar
              value={password}
              isFullWidth
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </A.SubHeader>
          <A.SubHeader subHeaderText="비밀번호 확인" fontSize="2vh">
            <A.InputBar
              value={confirmPassword}
              isFullWidth
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </A.SubHeader>
        </div>
        <div className="button-wrapper">
          <A.Button
            text="탈퇴하기"
            theme="blue"
            func={async () => await handleStart()}
          />
        </div>
      </WithdrawModal>
    </>
  );
}
