import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '@components/Icon';
import {
  postJoinStudyApi,
  getGroupMemberApi,
} from '@repository/groupRepository';

const Wrapper = styled.div`
  display: flex;
  flex: 0 0 33.333%;
  margin-bottom: 50px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  height: 382px;
  border-radius: 20px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
  background-color: white;
  box-sizing: border-box;
  &:hover {
    border-radius: 20px;
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
    & > div > div,
    & > div > div > span {
      color: white;
    }
    & > div > div > div {
      color: #0c0c59;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px
  margin-right: 10px
`;

const Title = styled.div`
  width: 290px;
  height: 30px;
  margin-top: 29px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  font-family: AppleSDGothicNeoEB00;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: black;
  justify-self: flex-start;
`;

const Description = styled.div`
  width: 280px;
  height: 60px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: black;
  word-break: break-all;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Text = styled.span`
  text-align: left;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  color: #3d3d3d;
  word-break: break-all;
  margin-left: 20px;
`;

const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Button = styled.div`
  width: 100%;
  height: 55px;
  border-radius: 10px;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

const ButtonText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #5f5fd9;
`;

export default function StudyCardView({
  id,
  title,
  description,
  time,
  member,
}) {
  const history = useHistory();
  const [type, setType] = useState('clock_black');
  const [profile, setProfile] = useState('profile_blue');
  const hoverIn = () => {
    setType('clock_white');
    setProfile('profile_white');
  };

  const hoverOut = () => {
    setType('clock_black');
    setProfile('profile_blue');
  };

  const handleClick = () => {
    getGroupMemberApi(id).then((res) => {
      res.data.forEach((val) => {
        if (val.email !== sessionStorage.getItem('email')) {
          postJoinStudyApi({ id });
        }
      });
    });
    history.push(`/study-room/${id}`);
  };
  return (
    <Wrapper>
      <Box onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Time>
            <Icon type={type} alt="" />
            <Text>{time}</Text>
          </Time>
          <MemberWrapper>
            <Icon type={profile} alt="" />
            <Text>
              {member}
              /2
            </Text>
          </MemberWrapper>
          <Button onClick={handleClick}>
            <ButtonText>입장하기</ButtonText>
          </Button>
        </Content>
      </Box>
    </Wrapper>
  );
}

StudyCardView.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  member: PropTypes.number,
};

StudyCardView.defaultProp = {
  id: undefined,
  title: '예시 방입니다.',
  description: '예시 내용입니다.',
  time: '20201022',
  member: 1,
};
