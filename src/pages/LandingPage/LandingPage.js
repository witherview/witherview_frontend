import React, { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import LandingHeader from './LandingHeader';
import LandingTop from './LandingTop';
import LandingMiddleOne from './LandingMiddleOne';
import LandingMiddleTwo from './LandingMiddleTwo';
import LandingMiddleThree from './LandingMiddleThree';
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
  const aloneRef = useRef(null);
  const studyRef = useRef(null);
  AOS.init();
  return (
    <Wrapper>
      <WrapContent>
        <LandingHeader
          topRef={topRef}
          middleOneRef={middleOneRef}
          aloneRef={aloneRef}
          studyRef={studyRef}
        />
        <LandingTop myRef={topRef} />
        <LandingMiddleOne myRef={middleOneRef} />
        <LandingMiddleTwo myRefAlone={aloneRef} />
        <LandingMiddleThree myRefStudy={studyRef} />
        <LandingBottom />
        <LandingFooter />
      </WrapContent>
    </Wrapper>
  );
}
