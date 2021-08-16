import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { displayModal } from '@store/Modal/modal';
import { MODALS } from '@utils/constant';

import A from '@atoms';
import O from '@organisms';

const StepOne = styled.div`
  width: 100%;

  .step-one-title {
    font-size: 3.6vh;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 5.4vh;
    padding: 3.2vh 5.4vh;
    border-radius: 1vh;
    box-shadow: 0 0.6vh 2.4vh 0 rgba(158, 158, 158, 0.1);
    border: solid 0.1vh #f6f6f6;
    background-color: #ffffff;
    color: #3d3d3d;

    .info-title {
      font-size: 2.4vh;
      font-weight: bold;
      padding-bottom: 3.4vh;
    }

    .content {
      font-size: 1.8vh;
      font-weight: normal;
      line-height: 1.44;

      .highlight-text {
        font-weight: bold;
        color: #f2886b;
      }
    }

    .delete-info {
      font-size: 1.8vh;
      font-weight: normal;
      line-height: 1.84;
      padding: 1.8vh 0 0 2.4vh;

      .item {
        display: flex;
        .kind {
          font-weight: bold;
          width: 20%;
        }

        .info {
          width: 80%;
          color: #9e9e9e;
        }
      }
    }
  }

  .confirm {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 2.6vh;
    font-weight: bold;
    font-size: 2.2vh;
    line-height: 4.4vh;
    color: #9e9e9e;

    label {
      margin-right: 6.2vh;
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

export default function One({ next }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isCheckConfirm, setIsCheckConfirm] = useState(false);

  const changeStep = () => {
    if (!isCheckConfirm) {
      dispatch(displayModal({ modalName: MODALS.ALERT_MODAL }));
      return;
    }

    next();
  };

  return (
    <StepOne>
      <O.Modal
        modalName={MODALS.ALERT_MODAL}
        title="유의사항을 읽고 동의해 주시기 바랍니다."
      />
      <span className="step-one-title">
        회원탈퇴에 앞서 안내사항을 꼭 숙지해 주시기 바랍니다.
      </span>
      <div className="info-container">
        <span className="info-title">
          위더뷰 아이디 재사용 및 복구 불가능 안내
        </span>
        <span className="content">
          회원탈퇴 시 사용하고 계신 아이디는 타인을 포함해
          <span className="highlight-text">
            &nbsp;재사용이나 복구가 불가능합니다.&nbsp;
          </span>
          신중히 생각하신 후 결정해주세요.
        </span>
      </div>
      <div className="info-container">
        <span className="info-title">
          탈퇴 후 회원정보 및 서비스 이용 기록 삭제 안내
        </span>
        <span className="content">
          다음 아래의 서비스 이용기록이 모두 삭제되며,
          <span className="highlight-text">
            &nbsp;삭제된 데이터는 복구되지 않습니다.
          </span>
        </span>
        <div className="delete-info">
          <div className="item">
            <span className="kind">질문리스트</span>
            <span className="info">질문리스트 내 답변 스크립트 삭제</span>
          </div>
          <div className="item">
            <span className="kind">답변 스크립트</span>
            <span className="info">
              혼자연습 질문리스트 제목, 기업이름, 직무이름 삭제
            </span>
          </div>
          <div className="item">
            <span className="kind">혼자연습 영상</span>
            <span className="info">
              면접복기 내 혼자연습 영상과 체크리스트 기록 삭제
            </span>
          </div>
          <div className="item">
            <span className="kind">1:1 연습 영상</span>
            <span className="info">
              면접복기 내 1:1 연습 영상 과 면접관 피드백 삭제
            </span>
          </div>
          <div className="item">
            <span className="kind">마이페이지</span>
            <span className="info">
              마이페이지 내 면접스터디, 혼자연습, 질문 리스트, 면접 평균 점수,
              합불 정보 삭제
            </span>
          </div>
        </div>
      </div>
      <div className="confirm">
        <A.CheckBox func={(e) => setIsCheckConfirm(e.target.checked)} />
        위의 회원탈퇴 시 주의사항에 동의합니다.
      </div>
      <div className="action">
        <A.Button theme="blue" text="탈퇴취소" func={() => history.goBack()} />
        <A.Button theme="outline" text="다음" func={() => changeStep()} />
      </div>
    </StepOne>
  );
}

One.propTypes = {
  next: PropTypes.func,
};
