import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import addQuestionImage from '@assets/images/illust_2.png';
import guideImage from '@assets/images/illust_3.png';
import A from '@atoms';

const Wrapper = styled.div`
  user-select: none;
  width: 39vh;
  height: 49.5vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.7vh;
  cursor: pointer;
`;

const WrapContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37.4vh;
  height: 47.9vh;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  box-sizing: border-box;
  ${({
    theme: {
      self: { wrapContainerBorder },
    },
  }) => wrapContainerBorder};
  ${({ clicked }) => clicked && 'border: solid 0.4vh #6e6eff;'};
`;

const WrapIcon = styled.div`
  position: absolute;
  top: 2.4vh;
  right: 2.8vh;
`;

const WrapImage = styled.img`
  height: 24.8vh;
`;

const WrapMiddleText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  color: ${({
    clicked,
    theme: {
      self: { wrapMiddleText },
    },
  }) => (clicked ? '#6e6eff' : wrapMiddleText)};
  padding: 2.7vh;
`;

const WrapBottomText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  color: ${({
    clicked,
    theme: {
      self: { wrapBottomText },
    },
  }) => (clicked ? '#6e6eff' : wrapBottomText)};
  padding: 0.3vh;
  white-space: pre;
  text-align: center;
  line-height: 1.5;
`;

const GUIDE_IMAGE = 1;

export default function SelectCard({ kind, clicked, func }) {
  return (
    <Wrapper onClick={func}>
      <WrapContainer clicked={clicked}>
        <WrapIcon>
          {clicked && (
            <A.Icon type="check_circle_white" alt="Check Circle White" />
          )}
        </WrapIcon>
        <WrapImage
          src={kind === GUIDE_IMAGE ? guideImage : addQuestionImage}
          alt="Button Middle"
        />
        <WrapMiddleText clicked={clicked}>
          {kind === GUIDE_IMAGE ? '위더뷰 면접 가이드' : '면접 질문 만들기'}
        </WrapMiddleText>
        <WrapBottomText clicked={clicked}>
          {kind === GUIDE_IMAGE
            ? '위더뷰가 제시하는\n핵심 면접 질문으로 연습해보세요.'
            : '직접 면접 질문을 만들고\n면접을 대비 할 수 있어요.'}
        </WrapBottomText>
      </WrapContainer>
    </Wrapper>
  );
}

SelectCard.propTypes = {
  kind: PropTypes.number.isRequired,
  clicked: PropTypes.bool,
  func: PropTypes.func,
};

SelectCard.defaultProps = {
  clicked: undefined,
  func: () => {},
};
