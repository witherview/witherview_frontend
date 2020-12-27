/* eslint-disable react/prop-types */
import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postVideoApi, getVideoApi } from '@repository/requestVideoRepository';
import {
  setUploadedLocation,
  setToggleTrain,
  setIsLoading,
} from '@store/Train/train';

import { get } from '@utils/snippet';
import Button from '@components/Button';
import Icon from '@components/IconTemp';
import EvaluationListMock from '@mocks/EvaluationListMock';
import Checkbox from '@components/Checkbox';

const CloseButton = styled.button`
  position: absolute;
  right: 3%;
  top: 3%;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #eef0ff;
`;

const Background = styled.div`
  text-align: center;
`;

const EndingTitle = styled.span`
  display: block;
  color: #000000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.1vh;
  margin-top: 7vh;
`;

const Content = styled.div`
  margin-left: 10vh;
  margin-top: 10.5vh;
  display: flex;
`;

const LeftContent = styled.div`
  width: 47vh;
  height: auto;
`;

const RightContent = styled.div`
  width: 117.8vh;
  height: auto;
  margin-left: 5.5vh;
`;

const VideoContainer = styled.figure`
  width: 47vh;
  margin: 0;

  & video {
    width: 100%;
    border-radius: 2vh;
  }
`;

const ControlWrapper = styled.div`
  overflow: hidden;
  background-color: #ffffff;
  width: 100%;
  position: relative;
  border-radius: 1vh;
  margin-top: 1vh;
  padding: 1vh;
  box-sizing: border-box;

  &[data-state="hidden"] {
    display: none;
  }
  &[data-state="visible"] {
    display: block;
  }
`;

const ButtonWrapper = styled.button`
  height: 5.1vh;
  width: 5.1vh;
  > button {
    height: 5.1vh;
    width: 5.1vh;
  }
  display: block;
  height: 100%;
  float: left;
  border: none;
  cursor: pointer;
  background: transparent;
  margin: 0;
  padding: 0;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.5;
  }
`;

const ProgressWrapper = styled.div`
  display: block;
  width: 80%;
  height: 100%;
  float: left;
  margin-left: 5%;
  padding: 0;

  & progress {
    display: block;
    width: 100%;
    margin-top: 1.125rem;
    border: none;
    overflow: hidden;
    -moz-border-radius: 0.2vh;
    -webkit-border-radius: 0.2vh;
    border-radius: 0.2vh;
    color: #6e6eff;
    cursor: pointer;

    &::-moz-progress-bar {
      background-color: #6e6eff;
    }
    &::-webkit-progress-value {
      background-color: #6e6eff;
    }
    &::-webkit-progress-bar {
      background-color: #d3d3d3;
    }
  }
`;

const CheckPointWrapper = styled.div`
  position: relative;
  background: transparent;

  & > div {
    position: absolute;
    cursor: pointer;
  }
`;

const ButtonsWrapper = styled.div`
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  margin-top: 5.5vh;

  & > * {
    margin: 1vh;
    flex: 1 0 calc(50% - 2vh);
    cursor: pointer;
  }
  > div {
    width: 29.6vh;
    height: 6vh;
    > p {
      font-size: 1.9vh;
    }
  }
`;

const CheckListContainer = styled.div`
  display: inline-block;
  width: 55vh;
  height: 67vh;
  box-sizing: border-box;
  margin-right: 1.1vh;
  margin-bottom: 2vh;
  padding: 3.8vh 4.2vh 3.3vh 5.6vh;
  border-radius: 1vh;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  background-color: #ffffff;
  font-family: AppleSDGothicNeoM00;
  text-align: left;

  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: table;
      font-size: 1.5vh;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      text-align: left;
      letter-spacing: normal;
      text-align: left;
      color: #3d3d3d;
      margin-bottom: 2vh;

      i {
        margin-right: 2.5vh;
        cursor: pointer;
        vertical-align: middle;
      }

      span {
        display: table-cell;
        vertical-align: middle;
        line-height: 1.5;
      }
    }
  }
`;

const CheckListTitle = styled.h2`
  font-size: 3vh;
  margin-bottom: 3vh;
`;

const CheckPoint = styled.div`
  left: calc(${({ point }) => `${point}% - 0.9vh`});
`;

const SmallCheckList = styled.div`
  display: inline-block;
  vertical-align: top;

  & > * {
    display: block;
    height: auto;
    margin: 0;
    margin-bottom: 3vh;
  }
`;

const ChecklistEach = styled.li`
  display: flex;
  flex-direction: row;
  align-itmes: center;
  padding-bottom: 1vh;
  > label {
    > span {
      top: -0.5vh
    }
  }
  > span {
    font-size: 2vh;
    padding-left: 1vh;
  }
`;

export default function AloneQuestionCheckList({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const history = useHistory();
  const { localBlob, historyId } = useSelector(get('train'));
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const [checkListArray, setCheckListArray] = useState(Array(14).fill(false));
  const video = useRef();
  const videoControls = useRef();
  const playpause = useRef();
  const progress = useRef();

  useEffect(() => {
    dispatch(setToggleTrain({ toggleTrain: true }));
    video.current.controls = false;
    videoControls.current.setAttribute('data-state', 'visible');

    return () => dispatch(setToggleTrain({ toggleTrain: false }));
  }, []);

  const loadVideoMetaData = useCallback(
    () => progress.current.setAttribute('max', video.current.duration),
    [],
  );

  const changeButtonState = useCallback(() => {
    if (video.current.paused || video.current.ended) {
      playpause.current.setAttribute('data-state', 'play');
    } else {
      playpause.current.setAttribute('data-state', 'pause');
    }
  }, []);

  const onPlay = useCallback(() => changeButtonState(), []);

  const onPause = useCallback(() => changeButtonState(), []);

  const onPlayPause = useCallback(() => {
    if (video.current.paused || video.current.ended) {
      video.current.play();
    } else {
      video.current.pause();
    }
    setPlayPauseBtn(!playPauseBtn);
  }, [playPauseBtn]);

  const onTimeUpdate = useCallback(() => {
    if (!progress.current.getAttribute('max')) {
      progress.current.setAttribute('max', video.current.duration);
    }
    progress.current.value = video.current.currentTime;
    if (progress.current.max === progress.current.value) {
      setPlayPauseBtn(true);
    }
  }, []);

  const onProgressClck = useCallback((evt) => {
    const pos = (evt.pageX
        - (progress.current.offsetLeft
          + progress.current.offsetParent.offsetLeft))
      / progress.current.offsetWidth;
    video.current.currentTime = pos * video.current.duration;
  }, []);

  const onCheck = useCallback(
    (evt) => {
      const newCheckList = checkListArray.map((item, idx) => (idx === parseInt(evt.target.parentNode.id, 10) ? !item : item));
      setCheckListArray(newCheckList);
    },
    [checkListArray],
  );

  const selfTraingAgain = useCallback(() => {
    history.push(`/question/${id}`);
  }, [id]);

  const initCheckList = useCallback(() => {
    setCheckListArray(Array(14).fill(false));
  }, []);

  const saveInterviewVideo = useCallback(() => {
    const formData = new FormData();
    // TODO: Repository 만들기
    axios({
      method: 'get',
      responseType: 'blob',
      url: localBlob,
    }).then((responseFirst) => {
      dispatch(setIsLoading({ isLoading: true }));
      const blob = responseFirst.data;

      formData.append('videoFile', blob);
      formData.append('historyId', historyId);
      postVideoApi(formData)
        .then((responseSecond) => {
          getVideoApi().then((resp) => {
            dispatch(setIsLoading({ isLoading: false }));
            const { savedLocation } = resp.data.find(
              (elem) => elem.id === responseSecond.data.id,
            );
            dispatch(setUploadedLocation({ savedLocation }));
            // TODO: 모달로 바꾸기?
            alert('저장 완료!');
          });
        })
        .catch((err) => {
          dispatch(setIsLoading({ isLoading: false }));
          alert(err);
        });
    });
  }, [localBlob]);

  return (
    <Wrapper>
      <Background>
        <CloseButton type="button">
          <Icon
            type="cancel_circle"
            isCircle
            alt="close"
            func={() => history.push('/self')}
          />
        </CloseButton>
        <EndingTitle>
          면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.
        </EndingTitle>
        <Content>
          <LeftContent>
            <VideoContainer>
              <video
                src={localBlob}
                ref={video}
                controls
                preload="metadata"
                onLoadedMetadata={loadVideoMetaData}
                onPlay={onPlay}
                onPause={onPause}
                onTimeUpdate={onTimeUpdate}
              >
                <track
                  src=""
                  kind="captions"
                  srcLang="ko"
                  label="korean_captions"
                />
                {/* TODO: 지금은 로컬 blob을 보여주고 있으나 이부분 서버 HLS url을 적용하는 방식으로 처리해야 함 */}
                <source type="video/mp4" />
              </video>
              <ControlWrapper ref={videoControls} data-state="hidden">
                <ButtonWrapper
                  ref={playpause}
                  type="button"
                  data-state="play"
                  onClick={onPlayPause}
                >
                  <Icon
                    type={playPauseBtn ? 'play_blue' : 'pause'}
                    isCircle
                    alt="play/button"
                  />
                </ButtonWrapper>
                <ProgressWrapper>
                  <progress
                    ref={progress}
                    value="0"
                    min="0"
                    onClick={onProgressClck}
                  />
                  <CheckPointWrapper>
                    {[25, 50, 75].map((item) => (
                      <CheckPoint point={item} key={`${item}point`}>
                        <Icon
                          type="arrow_up_blue"
                          alt="section"
                          func={onProgressClck}
                        />
                      </CheckPoint>
                    ))}
                  </CheckPointWrapper>
                </ProgressWrapper>
              </ControlWrapper>
            </VideoContainer>
            <ButtonsWrapper>
              <Button
                text="다시 연습하기"
                theme="blue"
                func={selfTraingAgain}
              />
              <Button
                text="연습 영상 저장"
                theme="white"
                func={saveInterviewVideo}
              />
              <Button
                text="체크리스트 초기화"
                theme="white"
                func={initCheckList}
              />
              <Button
                disabled
                text="체크리스트 저장"
                theme="white"
                // TODO: 이부분 추후 API 완성되면 추가해야 함
                func={() => alert('아직 구현되지 않았습니다.')}
              />
            </ButtonsWrapper>
          </LeftContent>
          <RightContent>
            <CheckListContainer>
              <CheckListTitle>답변내용 및 목소리 체크!</CheckListTitle>
              <ul>
                {EvaluationListMock.evaluationList1.map(({ key, text }) => (
                  <ChecklistEach id={key} key={key}>
                    <Checkbox />
                    <span>{text}</span>
                  </ChecklistEach>
                ))}
              </ul>
            </CheckListContainer>
            <SmallCheckList>
              <CheckListContainer>
                <CheckListTitle>비언어 내용 체크!</CheckListTitle>
                <ul>
                  {EvaluationListMock.evaluationList2.map(({ key, text }) => (
                    <ChecklistEach id={key} key={key}>
                      <Checkbox />
                      <span>{text}</span>
                    </ChecklistEach>
                  ))}
                </ul>
              </CheckListContainer>
              <CheckListContainer>
                <CheckListTitle>영상 환경 체크!</CheckListTitle>
                <ul>
                  {EvaluationListMock.evaluationList3.map(({ key, text }) => (
                    <ChecklistEach id={key} key={key}>
                      <Checkbox />
                      <span>{text}</span>
                    </ChecklistEach>
                  ))}
                </ul>
              </CheckListContainer>
            </SmallCheckList>
          </RightContent>
        </Content>
      </Background>
    </Wrapper>
  );
}
