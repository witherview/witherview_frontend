import React from 'react';

import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import A from '@atoms';
import { commonStyles } from '@style';
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

const WrapTitle = styled.div`
  height: 12vh;
  font-size: 6.5vh;
  font-family: TitilliumWebBold;
  color: ${commonStyles.colors.cornflower};
`;

const WrapText = styled.div`
  max-width: 80vw;
  font-size: 2.5vh;
  line-height: 4vh;
`;

const WrapImage = styled.div`
  height: 24vh;
  min-height: 25vw;
  min-width: 70vw;
  z-index: 1000;
  background-image: url(${({ source }) => source});
  background-position: center center;
  background-size: cover;
  margin-right: 2.5vw;
  margin-top: 8.5vh;
  margin-bottom: 6.5vh;
`;

const WrapButton = styled.div`
  ${commonStyles.button}
`;

export default function FragileRatio() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <WrapTitle>화면 크기를 조절해주세요!</WrapTitle>
      <WrapText>
        화면의 높이를 줄여주세요. 16:9 비율에 최적화 되어 있습니다.
      </WrapText>
      <WrapImage source={StudyBackground} />
      <WrapButton>
        <A.Button
          btnTheme="blue"
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
