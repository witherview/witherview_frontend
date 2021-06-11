import React from 'react';
import styled from 'styled-components';
import A from '@atoms';

const Wrapper = styled.div`
  z-index: 2;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { footerBgColor } }) => footerBgColor};
  color: ${({ theme: { footerColor } }) => footerColor};
`;

const WrapLeft = styled.img.attrs(({ theme: { mainLogo } }) => ({
  src: mainLogo,
}))`
  width: 120px;
`;

const WrapContainer = styled.div`
  width: 90%;
  max-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapLeftInner = styled.div`
  color: ${({ theme: { landingFooterWrapLeftInnerColor } }) =>
    landingFooterWrapLeftInnerColor};
  @media only screen and (max-width: 1150px) {
    width: 80%;
  }

  width: 40%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WrapText = styled.div`
  @media only screen and (max-width: 1150px) {
    display: none;
  }
  font-size: 10px;
`;

export default function LandingFooter() {
  return (
    <Wrapper>
      <WrapContainer>
        <WrapLeftInner>
          <WrapLeft />
          <A.TextButton text="이용약관" />
          <A.TextButton text="개인정보처리방침" />
        </WrapLeftInner>
        <WrapText>Copyrightⓒ WITHERVIEW All Rights Reserved.</WrapText>
      </WrapContainer>
    </Wrapper>
  );
}
