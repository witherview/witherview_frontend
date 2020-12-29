import React from 'react';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import C from '@components';
import { setLogout } from '@store/Auth/auth';

import StudyBackground from '@assets/images/fragile_ratio.png';

const Wrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 4vw;
  line-height: 7vw;
  text-align: center;
`;

const WrapOops = styled.div`
  font-size: 4vw;
  font-family: TitilliumWebBold;
  color: ${({ theme }) => theme.colors.cornflower};
`;

const WrapText = styled.div`
  font-size: 1.6vw;
  line-height: 2vw;
`;

const WrapImage = styled.div`
  height: 24vw;
  width: 80vw;
  z-index: 1000;
  background-image: url(${({ source }) => source});
  background-position: center center;
  background-size: cover;
  object-fit: cover;
  margin-right: 2.5vw;
  margin-top: 5vw;
  margin-bottom: 5vw;
`;

const WrapButton = styled.div`
  > div {
    width: 29.6wh;
    height: 6wh;
    > p {
      font-size: 1.9wh;
    }
  }
`;
export default function FragileRatio() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <WrapOops>Ooops!</WrapOops>
      <WrapText>
        브라우저 창의 높이를 줄여주세요. 16:9 비율에 최적화 되어 있습니다.
      </WrapText>
      <WrapImage source={StudyBackground} />
      <WrapButton>
        <C.Button
          theme="blue"
          text="돌아가기"
          func={() => {
            dispatch(setLogout());
            history.push('/');
          }}
        />
      </WrapButton>
    </Wrapper>
  );
}
