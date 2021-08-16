import React from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import A from '@atoms';
import LandingBottomImage from '@assets/images/landing_bottom.png';
import TextBoxB from './components/TextBoxB';

const Wrapper = styled.div`
  user-select: none;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const WrapImage = styled.img`
  height: 267px;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const WrapButton = styled.div`
  ${({ theme }) => theme.landingButton}
`;

export default function LandingBottom() {
  const history = useHistory();
  return (
    <Wrapper>
      <Div data-aos="fade-up" data-aos-duration="1000">
        <WrapContainer>
          <WrapImage src={LandingBottomImage} />
          <TextBoxB
            height={250}
            header="GET STARTED NOW"
            content="면접을 더 편하게, 더 많은 사람들에게 자신감을!"
            summary={[
              '위더뷰와 함께 화상 면접을 준비해볼까요? 지금 바로 시작해보세요.',
            ]}
          />
          <WrapButton>
            <A.Button
              theme="blue"
              width={180}
              func={() => history.push('./login')}
              text="시작하기"
            />
          </WrapButton>
        </WrapContainer>
      </Div>
    </Wrapper>
  );
}
