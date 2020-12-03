import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import C from '@components';
import TextBoxA from './components/TextBoxA';

const Wrapper = styled.div`
  width: 100%;
  user-select: none;
  height: 950px;
  background-color: #f9f9ff;
  padding-top: 140px;
`;

const WrapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapImage = styled.img`
  height: 818px;
`;

const DUMMY = '';
export default function LandingTop({ myRef }) {
  const history = useHistory();
  return (
    <Wrapper ref={myRef}>
      <WrapContainer>
        <WrapContent>
          <TextBoxA
            height={400}
            header="INVERVIEW PRACTICE WEB"
            content={['집에서 편리하게', '경험해 볼 수 있는', '면접 스터디']}
            summary={[
              '위더뷰를 통해 내가 원하는 직무와 관련된',
              '화상 면접 스터디를 다양하게 체험해보세요.',
            ]}
          />
          <C.Button
            theme="blue"
            width={240}
            func={() => history.push('./login')}
            text="시작하기"
          />
        </WrapContent>
        {/* TODO: 이미지로 교체 */}
        <WrapImage src={DUMMY} />
      </WrapContainer>
    </Wrapper>
  );
}

LandingTop.propTypes = {
  myRef: PropTypes.object.isRequired,
};
