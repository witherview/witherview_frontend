import React from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import C from '@components';
import TextBoxB from './components/TextBoxB';

const Wrapper = styled.div`
  user-select: none;
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const WrapImage = styled.img`
  height: 267px;
`;

const DUMMY = '';
export default function LandingBottom() {
  const history = useHistory();
  return (
    <Wrapper>
      <WrapContainer>
        {/* TODO: 이미지로 교체 */}
        <WrapImage src={DUMMY} />
        <TextBoxB
          height={250}
          header="GET STARTED NOW"
          content="면접을 더 편하게, 더 많은 사람들에게 자신감을!"
          summary={[
            '위더뷰와 함께 화상 면접을 준비해볼까요? 지금 바로 시작해보세요.',
          ]}
        />
        <C.Button
          theme="blue"
          width={240}
          func={() => history.push('./login')}
          text="시작하기"
        />
      </WrapContainer>
    </Wrapper>
  );
}
