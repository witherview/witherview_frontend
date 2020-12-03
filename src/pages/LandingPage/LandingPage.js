import React, { useRef } from 'react';

import styled from 'styled-components';

import LandingHeader from './LandingHeader';
import LandingTop from './LandingTop';
import LandingMiddleOne from './LandingMiddleOne';
import LandingBottom from './LandingBottom';
import LandingFooter from './LandingFooter';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function LandingPage() {
  const topRef = useRef(null);
  const middleOneRef = useRef(null);

  return (
    <Wrapper>
      <WrapContent>
        <LandingHeader topRef={topRef} middleOneRef={middleOneRef} />
        <LandingTop myRef={topRef} />
        <LandingMiddleOne myRef={middleOneRef} />
        <LandingBottom />
        <LandingFooter />
      </WrapContent>
    </Wrapper>
  );
}
