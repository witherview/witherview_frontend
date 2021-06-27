import React, { useEffect } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import {
  setCompany,
  setJob,
  setSelectedQnaId,
  setViewAnswer,
} from '@store/Train/train';
import { get } from '@utils/snippet';
import { getQuestionListAPI } from '@repository/questionListRepository';
import A from '@atoms';
import M from '@molecules';
import { commonStyles } from '@style';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const WrapContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const WrapContainer = styled.div`
  height: 48vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8vh;
`;

const WrapSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WrapToggle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const WrapInput = styled.div`
  > input {
    height: 5vh;
    width: 100vh;
    font-size: 1.5vh;
    ::placeholder {
      font-size: 2vh;
    }
    :-ms-input-placeholder {
      font-size: 2vh;
    }
    ::-ms-input-placeholder {
      font-size: 2vh;
    }
  }
`;

const WrapText = styled.div`
  display: flex;
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  color: #6e6eff;
  ${({ padding }) =>
    padding ? 'padding-bottom: 2vh' : 'padding-right: 2.5vh'};
`;

const WrapButton = styled.div`
  ${commonStyles.button}
`;

export default function SelfTrainSettingPage({ match, history }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const { selectedQnaId, job, company, standardTime, viewAnswer } = useSelector(
    get('train'),
  );

  const fetch = async () => {
    try {
      const { data } = await getQuestionListAPI(id);

      dispatch(setCompany({ company: data[0].enterprise }));
      dispatch(setJob({ job: data[0].job }));
      dispatch(setSelectedQnaId({ selectedQnaId: data[0].id }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const onToggleBtn = (isChecked) => {
    if (isChecked) {
      dispatch(setViewAnswer({ viewAnswer: true }));
    } else {
      dispatch(setViewAnswer({ viewAnswer: false }));
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Wrapper>
      <WrapContent>
        <M.TextBox
          topText="환경설정을 시작하겠습니다."
          bottomText="답변 시간을 선택하고 기업이름과 직무이름을 입력해주세요."
        />
        <WrapContainer>
          <WrapSubContainer>
            <M.TimeButton time={30} unit="초" />
            <M.TimeButton time={45} unit="초" />
            <M.TimeButton time={60} unit="초" />
            <M.TimeButton time={90} unit="초" />
          </WrapSubContainer>
          <WrapToggle>
            <WrapText>답변 보기 허용</WrapText>
            <A.ToggleButton cb={onToggleBtn} checked={viewAnswer} />
          </WrapToggle>
          <WrapInput>
            <WrapText padding>기업 이름</WrapText>
            <A.InputBar
              value={company}
              onChange={(e) =>
                dispatch(setCompany({ company: e.target.value }))
              }
              width={967}
              placeholder="기본 질문 리스트"
            />
          </WrapInput>
          <WrapInput>
            <WrapText padding>직무 이름</WrapText>
            <A.InputBar
              value={job}
              onChange={(e) => dispatch(setJob({ job: e.target.value }))}
              width={967}
              placeholder="공통"
            />
          </WrapInput>
        </WrapContainer>
        <WrapButton>
          <A.Button
            btnTheme={company && job && standardTime > 0 ? 'blue' : 'gray'}
            text="다음"
            func={() => {
              console.log('click');
              history.push(`/self/train/${selectedQnaId}`);
            }}
          />
        </WrapButton>
      </WrapContent>
    </Wrapper>
  );
}

SelfTrainSettingPage.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};
