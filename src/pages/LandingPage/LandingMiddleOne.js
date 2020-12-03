import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import TextBoxB from './components/TextBoxB';
import TextBoxC from './components/TextBoxC';

const Wrapper = styled.div`
  width: 100%;
  user-select: none;
  min-height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const WrapBottomContent = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export default function LandingMiddleOne({ myRef }) {
  return (
    <Wrapper ref={myRef}>
      <WrapContainer>
        <TextBoxB
          height={250}
          header="INTENTION OF WITHERVIEW"
          content="나를 위한 효과적인 면접 연습"
          summary={[
            '면접은, 위더뷰로! 합격의 자신감을 주기 위해 개발한',
            '면접 솔루션 위더뷰를 통해 이제 집에서 연습하세요.',
          ]}
        />
        <WrapBottomContent>
          <TextBoxC
            header="함께하는"
            summary={[
              '같은 산업과 직무를 준비하는 지원자들과 함께',
              '연습하고 서로 피드백을 공유할 수 있습니다.',
            ]}
          />
          <TextBoxC
            header="심플한"
            summary={[
              '명확하고 직관적인 서비스를 통해 스터디와',
              '혼자 연습 서비스를 용이하게 즐길 수 있습니다.',
            ]}
          />
          <TextBoxC
            header="편안한"
            summary={[
              '간단한 구조와 큰 화면으로 처음 접하시는',
              '지원자분들도 편안하게 스터디를 할 수 있습니다.',
            ]}
          />
        </WrapBottomContent>
      </WrapContainer>
    </Wrapper>
  );
}

LandingMiddleOne.propTypes = {
  myRef: PropTypes.object.isRequired,
};
