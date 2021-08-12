import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get } from '@utils/snippet';
import { setLogout } from '@store/Auth/auth';
import { withdrawApi } from '@repository/accountRepository';
import { displayModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';

import A from '@atoms';
import O from '@organisms';

const StepTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  .step-two-title {
    font-size: 3.6vh;
    font-weight: bold;
    padding-bottom: 3.4vh;
  }

  .sub-title {
    font-size: 2.4vh;
    font-weight: bold;
  }

  .info-container {
    margin-top: 3.4vh;
    padding: 3.2vh 5.4vh;
    background-color: #eeeeee;

    .delete-check {
      font-size: 2.4vh;
      font-weight: normal;
      line-height: 2.64;
      padding: 1.8vh 0 0 2.4vh;

      .item {
        display: flex;
        .kind {
          width: 20%;
        }

        .info {
          width: 80%;
          ${({ theme }) => theme.input}
        }
      }
    }
  }

  .action {
    display: flex;
    justify-content: center;
    padding-top: 3.2vh;

    > div {
      margin: 0 0.6vh;
      height: 5.8vh;
    }

    ${({ theme }) => theme.button}
  }
`;

export default function Two() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { email } = useSelector(get('auth'));
  const [password, setPassword] = useState(123456);
  const [confirmPassword, setConfirmPassword] = useState(123456);
  const [alertTitle, setAlertTitle] = useState();
  const [alertContent, setAlertContent] = useState();
  const [isSuccess, setIsSuccess] = useState();

  const callback = () => {
    if (isSuccess) return dispatch(setLogout());
    return undefined;
  };

  const withdraw = async () => {
    setAlertTitle('');
    setAlertContent('');

    if (password !== confirmPassword) {
      setAlertTitle('비밀번호가 같지 않습니다.');
      dispatch(displayModal({ modalName: MODALS.ALERT_MODAL }));
      return;
    }

    try {
      const result = await withdrawApi({
        password,
      });

      if (result.status !== 200) {
        setAlertTitle('회원탈퇴 요청을 실패했습니다.');
        setAlertContent(result.response.data.message);
      } else {
        setAlertTitle('회원탈퇴가 완료되었습니다.');
        setAlertContent(
          <span style={{ color: 'red' }}>
            그동안 위더뷰를 이용해 주셔서 감사합니다.
          </span>,
        );
        setIsSuccess(true);
      }
    } catch (e) {
      setAlertTitle(e.response.data.message);
    }

    dispatch(displayModal({ modalName: MODALS.ALERT_MODAL }));
  };

  return (
    <StepTwo>
      <O.Modal
        modalName={MODALS.ALERT_MODAL}
        title={alertTitle}
        func={callback}
      >
        {alertContent}
      </O.Modal>
      <span className="step-two-title">
        안전한 회원탈퇴를 위해, 비밀번호를 다시 확인해 주세요.
      </span>
      <span className="sub-title">비밀번호 확인 후 아이디는 탈퇴됩니다.</span>
      <span className="sub-title">
        탈퇴 후, 동일한 아이디는 사용하실 수 없으며 아이디와 데이터는 복구할 수
        없으니 신중하게 선택해 주세요.
      </span>
      <div className="info-container">
        <div className="delete-check">
          <div className="item">
            <span className="kind">아이디</span>
            <span className="info">{email}</span>
          </div>
          <div className="item">
            <span className="kind">비밀번호</span>
            <span className="info">
              <A.InputBar
                value={password}
                isFullWidth
                type="password"
                placeholder="비밀번호 입력"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </div>
          <div className="item">
            <span className="kind">비밀번호 확인</span>
            <span className="info">
              <A.InputBar
                value={confirmPassword}
                isFullWidth
                type="password"
                placeholder="비밀번호 확인"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="action">
        <A.Button
          theme="outline"
          text="탈퇴취소"
          width="180"
          func={() => history.goBack()}
        />
        <A.Button
          theme="outline"
          text="회원탈퇴"
          width="180"
          func={() => withdraw()}
        />
      </div>
    </StepTwo>
  );
}
