import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../../components/Icon';

import guideImage from '../../assets/images/illust_3.png';
import addQuestionImage from '../../assets/images/illust_2.png';

const Wrapper = styled.div`
  user-select: none;
  width: 390px;
  height: 495px;
  display: flex;
  align-itmes: center;
  justify-content: center;
  margin: 17px;
`;

const WrapContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 374px;
  height: 479px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  ${({ clicked }) => clicked && 'border: solid 4px #6e6eff;'}
`;

const WrapIcon = styled.div`
  position: absolute;
  top: 24px;
  right: 28px;
`;

const WrapImage = styled.img`
  height: 248px;
`;

const WrapMiddleText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
  ${({ clicked }) => clicked && 'color: #6e6eff;'}
  padding: 27px;
`;

const WrapBottomText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  color: #3d3d3d;
  padding: 3px;
`;

const GUIDE_IMAGE = 1;

export default function SelectCard({ kind, clicked, func }) {
  return (
    <Wrapper onClick={func}>
      <WrapContainer clicked={clicked}>
        <WrapIcon>
          {clicked && (
            <Icon type="check_circle_white" alt="Check Circle White" />
          )}
        </WrapIcon>
        <WrapImage
          src={kind === GUIDE_IMAGE ? guideImage : addQuestionImage}
          alt="Button Middle"
        />
        <WrapMiddleText clicked={clicked}>
          {kind === GUIDE_IMAGE ? '면접 질문 가이드' : '면접 질문 등록 후 연습'}
        </WrapMiddleText>
        <WrapBottomText>
          {kind === GUIDE_IMAGE
            ? '기존에 있는 질문으로 면접을'
            : '면접 질문 리스트를 설정하고'}
        </WrapBottomText>
        <WrapBottomText>
          {kind === GUIDE_IMAGE ? '연습해보세요.' : '연습할 수 있어요.'}
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
