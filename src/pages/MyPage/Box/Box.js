import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import A from '@atoms';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40vh;
  height: 18.1vh;
  margin-bottom: 4vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(158, 158, 158, 0.1);
  border: solid 0.1vh #f6f6f6;
  background-color: #ffffff;
`;

const IconWrapper = styled.div`
  margin-right: 5vh;
  margin-left: 5vh;
`;

const ContentWrapper = styled.div`
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 1.9vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

const Count = styled.div`
  font-family: TitilliumWeb;
  font-size: 5.5vh;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.51;
  letter-spacing: normal;
  text-align: left;
  color: #0c0c59;
`;

const Unit = styled.span`
  margin-left: 2.3vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #3d3d3d;
`;

export default function Box({ type, title, count }) {
  return (
    <Wrapper>
      <IconWrapper>
        <A.Icon type={type} />
      </IconWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Count>
          {count}
          <Unit>번</Unit>
        </Count>
      </ContentWrapper>
    </Wrapper>
  );
}

Box.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  count: PropTypes.number,
};

Box.defaultProp = {
  type: 'default',
  title: 'default',
  count: 1,
};
