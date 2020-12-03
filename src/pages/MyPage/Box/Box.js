import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@components/Icon';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 480px;
    height: 195px;
    margin-bottom: 40px;
    border-radius: 10px;
    box-shadow: 0 6px 12px 0 rgba(158, 158, 158, 0.1);
    border: solid 1px #f6f6f6;
    background-color: #ffffff;
`;

const IconWrapper = styled.div`
    margin-right: 50px;
    margin-left: 50px;
`;

const ContentWrapper = styled.div`
    margin-top:10px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: AppleSDGothicNeoEB00;
    font-size: 24px;
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
    font-size: 55px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.51;
    letter-spacing: normal;
    text-align: left;
    color: #0c0c59;
`;

const Unit = styled.span`
    margin-left: 23px;
    font-family: AppleSDGothicNeoM00;
    font-size: 20px;
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
        <Icon type={type} />
      </IconWrapper>
      <ContentWrapper>
        <Title>
          {title}
        </Title>
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
