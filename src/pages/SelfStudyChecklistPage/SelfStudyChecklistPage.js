/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';

import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { postVideoApi, getVideoApi } from '@repository/selfHistoryRepository';
import {
  setUploadedLocation,
  setToggleTrain,
  setIsLoading,
} from '@store/Train/train';

import { get } from '@utils/snippet';
import EvaluationListMock from '@mocks/EvaluationListMock';
import A from '@atoms';

const CloseButton = styled.div`
  position: absolute;
  top: 5.3vh;
  right: 10.5vh;
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eef0ff;
`;

const WrapContent = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EndingTitle = styled.span`
  display: block;
  color: #000000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 3.1vh;
  padding-top: 3.9vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 9vh;
`;

const LeftContent = styled.div`
  height: 67.1vh;
  width: 47vh;
  padding-top: 3vh;
`;

const RightContent = styled.div`
  height: 67.1vh;
  margin-left: 6.1vh;
`;

const VideoContainer = styled.figure`
  width: 47vh;
  margin: 0;

  & video {
    width: 100%;
    border-radius: 2vh;
    box-shadow: 0 0.6vh 2.4vh 0 rgba(4, 4, 161, 0.04);
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

  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);

  &[data-state='hidden'] {
    display: none;
  }
  &[data-state='visible'] {
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
    height: 2vh;
    width: 100%;
    margin-top: 2vh;
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
  height: 18vh;
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5.5vh;

  > div {
    width: 22.5vh;
    height: 6vh;
    > p {
      font-size: 1.9vh;
    }
    box-shadow: 0 0.6vh 2.4vh 0 rgba(4, 4, 161, 0.04);
  }
`;

const CheckListContainer = styled.div`
  display: inline-block;
  width: 52vh;
  height: 67vh;
  box-sizing: border-box;
  margin-right: 2.6vh;
  padding: 4.3vh 5.5vh 0 5.5vh;
  border-radius: 1vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
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
  font-size: 2.5vh;
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
    height: 32vh;
    margin: 0;
    margin-bottom: 3vh;
  }
`;

const ChecklistEach = styled.li`
  display: flex;
  flex-direction: row;
  align-itmes: center;

  > span {
    font-size: 1.9vh;
  }
`;

export default function SelfStudyChecklistPage({ match }) {
  const { roomId } = match.params;
  const dispatch = useDispatch();
  const history = useHistory();
  const { localBlob, historyId } = useSelector(get('train'));
  const { timeFlag } = useSelector(get('time'));
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
      // eslint-disable-next-line max-len
      const newCheckList = checkListArray.map((item, idx) => (idx === parseInt(evt.target.parentNode.id, 10) ? !item : item));
      setCheckListArray(newCheckList);
    },
    [checkListArray],
  );

  const selfTraingAgain = useCallback(() => {
    history.push(`/self/question/${roomId}`);
  }, [roomId]);

  const initCheckList = useCallback(() => {
    setCheckListArray(Array(14).fill(false));
  }, []);

  const saveInterviewVideo = useCallback(async () => {
    const formData = new FormData();
    // TODO: Repository 만들기
    try {
      const { data: blob } = await axios({
        method: 'get',
        responseType: 'blob',
        url: localBlob,
      });
      dispatch(setIsLoading({ isLoading: true }));

      formData.append('videoFile', blob);
      formData.append('historyId', historyId);

      const {
        data: { id },
      } = await postVideoApi(formData);

      const { data } = await getVideoApi();

      dispatch(setIsLoading({ isLoading: false }));

      const { savedLocation } = data.find((elem) => elem.id === id);

      dispatch(setUploadedLocation({ savedLocation }));
      // TODO: 모달로 바꾸기?
      alert('저장 완료!');
    } catch (error) {
      dispatch(setIsLoading({ isLoading: false }));
      console.error(error);
      alert(error);
    }
  }, [localBlob]);

  return (
    <Wrapper>
      <WrapContent>
        <CloseButton type="button">
          <A.Icon
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
                  <A.Icon
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
                    {timeFlag.map((item) => (
                      <CheckPoint point={item} key={`${item}point`}>
                        <A.Icon
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
              <A.Button
                text="다시 연습하기"
                btnTheme="blue"
                func={selfTraingAgain}
              />
              <A.Button
                text="연습 영상 저장"
                btnTheme="white"
                func={saveInterviewVideo}
              />
              <A.Button
                text="체크리스트 초기화"
                btnTheme="white"
                func={initCheckList}
              />
              <A.Button
                disabled
                text="체크리스트 저장"
                btnTheme="white"
                // TODO: 이부분 추후 API 완성되면 추가해야 함
                func={() => alert('아직 구현되지 않았습니다.')}
              />
            </ButtonsWrapper>
          </LeftContent>
          <RightContent>
            <CheckListContainer>
              <CheckListTitle>답변내용 및 목소리 체크!</CheckListTitle>
              <ul>
                {EvaluationListMock.evaluationList1.map(({ id, text }) => (
                  <ChecklistEach id={id} key={id}>
                    <A.Icon
                      type={checkListArray[id] ? 'check_on' : 'check_off'}
                      alt="checkbox"
                      func={onCheck}
                    />
                    <span>{text}</span>
                  </ChecklistEach>
                ))}
              </ul>
            </CheckListContainer>
            <SmallCheckList>
              <CheckListContainer>
                <CheckListTitle>비언어 내용 체크!</CheckListTitle>
                <ul>
                  {EvaluationListMock.evaluationList2.map(({ id, text }) => (
                    <ChecklistEach id={id} key={id}>
                      <A.Icon
                        type={checkListArray[id] ? 'check_on' : 'check_off'}
                        alt="checkbox"
                        func={onCheck}
                      />
                      <span>{text}</span>
                    </ChecklistEach>
                  ))}
                </ul>
              </CheckListContainer>
              <CheckListContainer>
                <CheckListTitle>영상 환경 체크!</CheckListTitle>
                <ul>
                  {EvaluationListMock.evaluationList3.map(({ id, text }) => (
                    <ChecklistEach id={id} key={id}>
                      <A.Icon
                        type={checkListArray[id] ? 'check_on' : 'check_off'}
                        alt="checkbox"
                        func={onCheck}
                      />
                      <span>{text}</span>
                    </ChecklistEach>
                  ))}
                </ul>
              </CheckListContainer>
            </SmallCheckList>
          </RightContent>
        </Content>
      </WrapContent>
    </Wrapper>
  );
}
