import React from 'react';

import styled from 'styled-components';

import C from '@components';
import Logo from '@assets/images/witherview_logo_title_dark.png';

const Wrapper = styled.div`
  z-index: 2;
  width: 100%;
  height: 153px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

const WrapLeft = styled.img`
  width: 169px;
`;

const WrapContainer = styled.div`
  max-width: 1680px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapRightInner = styled.div`
  width: 50%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapText = styled.div`
  @media only screen and (max-width: 1024px) {
    display: none;
  }
  font-size: 20px;
  color: #3d3d3d;
`;

export default function LandingFooter() {
  return (
    <Wrapper>
      <WrapContainer>
        <WrapRightInner>
          <WrapLeft src={Logo} />
          <C.TextButtonProps text="이용약관" />
          <C.TextButtonProps text="개인정보처리방침" />
        </WrapRightInner>
        <WrapText>Copyrightⓒ WITHERVIEW All Rights Reserved.</WrapText>
      </WrapContainer>
    </Wrapper>
  );
}
