import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import A from '@atoms';
import {
  postGroupRoomParticipantsApi,
  getGroupRoomParticipantsApi,
} from '@repository/groupRepository';
import { get } from '@utils/snippet';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 5vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37.4vh;
  height: 38.2vh;
  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.5px #9e9e9e;
  background-color: ${({
    theme: {
      peerStudy: { boxBgColor },
    },
  }) => boxBgColor};
  box-sizing: border-box;
  color: ${({
    theme: {
      peerStudy: { boxColor },
    },
  }) => boxColor};

  &:hover {
    border-radius: 2vh;
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
    & > div > div,
    & > div > div > span {
      color: #ffffff;
    }
    & > div > div > div {
      color: #0c0c59;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vh;
  margin-right: 1vh;
`;

const Title = styled.div`
  width: 29vh;
  height: 3vh;
  margin-top: 2.9vh;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
  font-family: AppleSDGothicNeoEB00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  justify-self: flex-start;
  color: ${({
    theme: {
      peerStudy: { titleColor },
    },
  }) => titleColor};
`;

const Description = styled.div`
  width: 28vh;
  height: 6vh;
  margin-top: 2vh;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  word-break: break-all;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2vh;
`;

const Text = styled.span`
  text-align: left;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.25;
  letter-spacing: normal;
  word-break: break-all;
  margin-left: 2vh;
`;

const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1vh;
`;

const Button = styled.div`
  width: 100%;
  height: 5.5vh;
  border-radius: 1vh;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5vh;
`;

const ButtonText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 1.5vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${({
    theme: {
      peerStudy: { buttonTextColor },
    },
  }) => buttonTextColor};
`;

const getLocalStorage = (key) => localStorage.getItem(key);

const iconClockOption = ['clock_white', 'clock_black'];
const iconProfileOption = ['profile_white', 'profile_black'];
export default function StudyCardView({
  id,
  title,
  description,
  time,
  member,
  canParticipate,
}) {
  const history = useHistory();
  // viewMode 전환
  const { viewMode } = useSelector(get('viewMode'));
  const currentViewMode = (options) => {
    if (getLocalStorage('viewMode') || !!viewMode) {
      return getLocalStorage('viewMode') === 'dark' || viewMode === 'dark'
        ? options[0]
        : options[1];
    }
    return options[0];
  };
  const [type, setType] = useState('');
  const [profile, setProfile] = useState('');

  useEffect(() => {
    setType(currentViewMode(iconClockOption));
    setProfile(currentViewMode(iconProfileOption));
  }, [viewMode]);

  const hoverIn = () => {
    setType(iconClockOption[0]);
    setProfile(iconProfileOption[0]);
  };

  const hoverOut = () => {
    setType(currentViewMode(iconClockOption));
    setProfile(currentViewMode(iconProfileOption));
  };

  const handleClick = async () => {
    try {
      if (canParticipate) {
        const { data } = await getGroupRoomParticipantsApi(id);
        data?.forEach((val) => {
          if (val.email !== sessionStorage.getItem('email')) {
            postGroupRoomParticipantsApi(id);
          }
        });
        history.push(`/peer-study/${id}`);
      } else {
        alert('참여할 수 없는 스터디입니다.');
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <Wrapper>
      <Box onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Time>
            <A.Icon type={type} alt="" />
            <Text>{time}</Text>
          </Time>
          <MemberWrapper>
            <A.Icon type={profile} alt="" />
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
  canParticipate: PropTypes.bool,
};

StudyCardView.defaultProp = {
  id: undefined,
  title: '예시 방입니다.',
  description: '예시 내용입니다.',
  time: '20201022',
  member: 1,
};
