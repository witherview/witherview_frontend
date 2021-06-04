import React, { useEffect, useState } from 'react';

import ReactRouterPropTypes from 'react-router-prop-types';

import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { get } from '@utils/snippet';
import { handleReset } from '@store/Time/time';

import A from '@atoms';
import M from '@molecules';
import { commonStyles } from '@style';

import SelectCard from './SelectCard';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const WrapContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WrapCardSection = styled.div`
  display: flex;
  margin-top: 3vh;
  margin-bottom: 3.3vh;
  padding: 2.5vh;
`;

const WrapButton = styled.div`
  ${commonStyles.button}
`;

const SELECT_NOTHING = 0;
const GUIDE_BUTTON = 1;
const ADD_QUESTION_BUTTON = 2;

export default function SelfTrainEntryPage({ history }) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(SELECT_NOTHING);
  const { name } = useSelector(get('auth'));

  useEffect(() => {
    dispatch(handleReset({ keepTrain: false }));
  }, []);

  const handleToggle = (select) => {
    if (select === clicked) return setClicked(SELECT_NOTHING);
    return setClicked(select);
  };

  const isGuide = clicked === GUIDE_BUTTON;

  return (
    <Wrapper>
      <WrapContent>
        <M.TextBox
          topText={`${name}님 화상 면접을 연습하세요`}
          bottomText="원하는 기능을 선택하여 화상 면접을 대비해 보세요."
        />
        <WrapCardSection>
          <SelectCard
            kind={GUIDE_BUTTON}
            clicked={clicked === GUIDE_BUTTON}
            func={() => handleToggle(GUIDE_BUTTON)}
          />
          <SelectCard
            kind={ADD_QUESTION_BUTTON}
            clicked={clicked === ADD_QUESTION_BUTTON}
            func={() => handleToggle(ADD_QUESTION_BUTTON)}
          />
        </WrapCardSection>
        <WrapButton>
          <A.Button
            func={
              // TODO: 기본 질문목록 endpoint 재호님이 추가하면 바꿔야 함
              isGuide
                ? () => history.push('/self/setting/1')
                : () => history.push('/self/questionlist')
            }
            btnTheme={clicked ? 'blue' : 'gray'}
            text="다음"
          />
        </WrapButton>
      </WrapContent>
    </Wrapper>
  );
}

SelfTrainEntryPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
