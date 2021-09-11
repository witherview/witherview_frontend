import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import profileExample from '@assets/images/profile_example.png';
import A from '@atoms';
import M from '@molecules';
import { commonStyles } from '@style';

const Wrapper = styled.div`
  position: relative;
  width: 117.8vh;
  height: 67.1vh;
  box-shadow: 0 0.6vh 2.4vh 0 rgba(4, 4, 161, 0.1);
  background-color: #ffffff;
  border-radius: 1vh;

  div.feedback-container-header {
    box-shadow: 0 0.5vh 1vh 0 rgba(4, 4, 161, 0.1);
    padding: 2.8vh 5.6vh 2.7vh;
    display: flex;
    border-radius: 1vh 1vh 0 0;
  }
  div.profile-info-container {
    font-family: AppleSDGothicNeoB00;
    font-size: 2.4vh;
    padding-left: 3vh;
    user-select: none;
    color: #000000;
    line-height: 1.4;
  }
  div.feedback-list {
    padding: 2.7vh 5.6vh 0;
    overflow: auto;
    position: relative;
    height: 44.2vh;
  }
  div.gradient {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 84%
    );
    z-index: 1;
    height: 6.2vh;
    width: 100%;
  }
  div.item {
    display: flex;
    margin-bottom: 3vh;
  }
  div.item-time {
    width: 9vh;
  }
  div.item-text {
    font-family: AppleSDGothicNeoM00;
    font-size: 2vh;
    line-height: 1.3;
    color: ${commonStyles.colors.greyishBrown};
  }
  div.feedback-container-footer {
    position: absolute;
    bottom: 0;
  }
`;

export default function FeedbackContainer({
  name,
  dateTime,
  src,
  score,
  itemList,
}) {
  return (
    <Wrapper>
      <div className="feedback-container-header">
        <A.ProfileIcon src={src} isSmall />
        <div className="profile-info-container">
          <div>{name}님의 피드백</div>
          <A.DateTime dateTime={dateTime} />
        </div>
      </div>
      <div className="feedback-list">
        {itemList.map((item) => (
          <div className="item">
            <div className="item-time">
              <A.FeedbackTime time={item.feedbackTime} />
            </div>
            <div className="item-text">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="feedback-container-footer">
        <div className="gradient" />
        <M.FeedbackContainerFooter score={score} />
      </div>
    </Wrapper>
  );
}

FeedbackContainer.propTypes = {
  name: PropTypes.string,
  dateTime: Date,
  src: PropTypes.string,
  score: PropTypes.number,
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      feedbackTime: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
};

FeedbackContainer.defaultProps = {
  name: '홍길동',
  dateTime: new Date(),
  src: profileExample,
  score: 8,
  itemList: [
    {
      feedbackTime: '0:2:25',
      text: '자기소개 파트에서 자신감 있게 말하는 부분 좋았습니다.',
    },
    {
      feedbackTime: '0:8:11',
      text:
        '물론 화상면접이긴 하지만.. 카메라를 너무 안보시는 것 같아요. 그게 조금 아쉽네요.',
    },
    {
      feedbackTime: '0:9:37',
      text: '지원동기에서 직무 강점을 말하면 더 좋을 것 같아요.',
    },
    {
      feedbackTime: '0:9:44',
      text:
        '본인의 장점 같은 경우에는 밝다 말고 다른 것도 생각해 보면 좋을 것 같아요. 중간중간 미소는 좋네요~^^',
    },
    {
      feedbackTime: '0:10:01',
      text: '문장은 최대한 간결하고 딱딱 떨어지게 말씀 해주세요^^',
    },
    {
      feedbackTime: '0:9:37',
      text: '지원동기에서 직무 강점을 말하면 더 좋을 것 같아요.',
    },
    {
      feedbackTime: '0:9:44',
      text:
        '본인의 장점 같은 경우에는 밝다 말고 다른 것도 생각해 보면 좋을 것 같아요. 중간중간 미소는 좋네요~^^',
    },
    {
      feedbackTime: '0:10:01',
      text: '문장은 최대한 간결하고 딱딱 떨어지게 말씀 해주세요^^',
    },
    {
      feedbackTime: '0:2:25',
      text: '자기소개 파트에서 자신감 있게 말하는 부분 좋았습니다.',
    },
    {
      feedbackTime: '0:8:11',
      text:
        '물론 화상면접이긴 하지만.. 카메라를 너무 안보시는 것 같아요. 그게 조금 아쉽네요.',
    },
    {
      feedbackTime: '0:9:37',
      text: '지원동기에서 직무 강점을 말하면 더 좋을 것 같아요.',
    },
    {
      feedbackTime: '0:9:44',
      text:
        '본인의 장점 같은 경우에는 밝다 말고 다른 것도 생각해 보면 좋을 것 같아요. 중간중간 미소는 좋네요~^^',
    },
  ],
};
