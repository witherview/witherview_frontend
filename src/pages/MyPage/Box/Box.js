import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import A from '@atoms';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50.6vh;
  height: 17.6vh;
  margin-bottom: 3.8vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 2.4vh 0 rgba(158, 158, 158, 0.1);
  border: solid 0.1vh #f6f6f6;
  background-color: #ffffff;
`;

const IconWrapper = styled.div`
  margin-right: 5vh;
  margin-left: 5.1vh;
`;

const ContentWrapper = styled.div`
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 2.4vh;
  color: #3d3d3d;
`;

const Count = styled.div`
  font-family: TitilliumWebBold;
  font-size: 5.5vh;
  line-height: 1.5;
  color: #0c0c59;
`;

const Unit = styled.span`
  margin-left: 2.3vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  color: #3d3d3d;
`;

export default function Box({ type, title, count, unit = '번' }) {
  return (
    <Wrapper>
      <IconWrapper>
        <A.Icon type={type} />
      </IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Count>
          {count}
          <Unit>{unit}</Unit>
        </Count>
      </ContentWrapper>
    </Wrapper>
  );
}

Box.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
  unit: PropTypes.string,
};

Box.defaultProp = {
  type: 'default',
  title: 'default',
  count: 1,
  unit: '번',
};
