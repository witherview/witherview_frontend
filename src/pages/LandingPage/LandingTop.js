import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import A from '@atoms';
import { commonStyles } from '@style';
import LandingTopImage from '@assets/images/landing_top.png';
import { useSelector } from 'react-redux';
import { get } from '@utils/snippet';
import TextBoxA from './components/TextBoxA';

const Wrapper = styled.div`
  @media only screen and (max-width: 1150px) {
    height: 550px;
  }
  width: 100%;
  user-select: none;
  height: 700px;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WrapContainer = styled.div`
  max-width: 80%;
  width: 1000px;
  display: flex;
  justify-content: space-around;
`;

const WrapContent = styled.div`
  @media only screen and (max-width: 1150px) {
    justify-content: center;
    padding-top: 0px;
    width: 100%;
  }

  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const WrapImage = styled.img`
  @media only screen and (max-width: 1150px) {
    height: 400px;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }

  height: 600px;
`;

const WrapButton = styled.div`
  padding-top: 30px;
  ${commonStyles.landingButton}
`;

export default function LandingTop({ myRef }) {
  const { viewMode } = useSelector(get('viewMode'));
  const history = useHistory();

  const btnRender = () => {
    const currentBtnTheme = viewMode === 'dark' ? 'outline' : 'blue';

    return (
      <A.Button
        btnTheme={currentBtnTheme}
        width={180}
        func={() => history.push('/login')}
        text="시작하기"
      />
    );
  };

  return (
    <Wrapper ref={myRef}>
      <WrapContainer>
        <WrapContent>
          <TextBoxA
            height={300}
            header="INTERVIEW PRACTICE WEB"
            content={['집에서 편리하게', '경험해 볼 수 있는', '면접 스터디']}
            summary={[
              '위더뷰를 통해 내가 원하는 직무와 관련된',
              '화상 면접 스터디를 다양하게 체험해보세요.',
            ]}
          />
          <WrapButton>{btnRender()}</WrapButton>
        </WrapContent>
        <WrapImage src={LandingTopImage} />
      </WrapContainer>
    </Wrapper>
  );
}

LandingTop.propTypes = {
  myRef: PropTypes.object.isRequired,
};
