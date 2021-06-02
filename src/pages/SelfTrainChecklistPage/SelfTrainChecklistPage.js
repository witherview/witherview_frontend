/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useCallback, useRef } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  postSelfVideoApi,
  getSelfVideoApi,
} from '@repository/selfHistoryRepository';
import { postSelfChecklistApi } from '@repository/selfCheckListRepository';
import {
  setUploadedLocation,
  setToggleTrain,
  setIsLoading,
} from '@store/Train/train';

import { get } from '@utils/snippet';
import { evaluation, flatEvaluation } from '@mocks/EvaluationListMock';
import A from '@atoms';
import S from './SelfTrainChecklistPage.style';

export default function SelfTrainChecklistPage({ match }) {
  const { roomId } = match.params;
  const dispatch = useDispatch();
  const history = useHistory();
  const { localBlob, historyId } = useSelector(get('train'));
  const { timeFlag } = useSelector(get('time'));

  const [currentTime, setCurrentTime] = useState(0);
  const [nowPlaying, setNowPlaying] = useState(false);

  const video = useRef();
  const progress = useRef();

  const [checkListArray, setCheckListArray] = useState(
    Array(flatEvaluation.length).fill(false),
  );

  const addTimeUpdate = () => {
    const observedVideoElement = video && video.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener('timeupdate', () => {
        setCurrentTime(observedVideoElement.currentTime);
      });
      setNowPlaying(false);
    }
  };

  useEffect(() => {
    dispatch(setToggleTrain({ toggleTrain: true }));
    video.current.controls = false;
    addTimeUpdate();

    return () => dispatch(setToggleTrain({ toggleTrain: false }));
  }, []);

  useEffect(() => {
    if (currentTime === video.current.duration) {
      setNowPlaying(false);
    }
  }, [currentTime]);

  const handleProgressChange = (percent) => {
    if (video.current) {
      const playingTime = video.current.duration * (percent / 100);

      setCurrentTime(playingTime);
    }
  };

  const handleClickProgress = (e) => {
    const pos =
      (e.pageX -
        (progress.current.offsetLeft +
          progress.current.offsetParent.offsetLeft)) /
      progress.current.offsetWidth;

    if (video.current) {
      const playingTime = video.current.duration * pos;

      setCurrentTime(playingTime);

      video.current.currentTime = playingTime;
    }
  };

  const handlePlayIconClick = () => {
    if (nowPlaying) {
      setNowPlaying(false);
      video.current.pause();
    } else {
      setNowPlaying(true);
      video.current.play();
    }
  };

  const handleCheck = useCallback(
    (evt) => {
      // eslint-disable-next-line max-len
      const newCheckList = checkListArray.map((item, idx) =>
        idx === parseInt(evt.target.parentNode.id, 10) ? !item : item,
      );
      setCheckListArray(newCheckList);
    },
    [checkListArray],
  );

  const postChecklist = async () => {
    const checkLists = checkListArray.reduce(
      (acc, cur, index) => [
        ...acc,
        {
          checkListField: flatEvaluation[index].text,
          checkListTypeId: flatEvaluation[index].checkListTypeId,
          idx: index,
          isChecked: cur,
        },
      ],
      [],
    );

    const data = { checkLists, selfHistoryId: historyId };

    try {
      await postSelfChecklistApi(JSON.stringify(data));
      alert('체크리스트가 등록되었습니다.');
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

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
      } = await postSelfVideoApi(formData);

      const { data } = await getSelfVideoApi();

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
    <S.Wrapper>
      <S.WrapContent>
        <S.CloseButton type="button">
          <A.Icon
            type="cancel_circle"
            isCircle
            alt="close"
            func={() => history.push('/self')}
          />
        </S.CloseButton>
        <S.EndingTitle>
          면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.
        </S.EndingTitle>
        <S.Content>
          <S.LeftContent>
            <S.VideoContainer>
              <video src={localBlob} ref={video} controls preload="metadata">
                <track
                  src=""
                  kind="captions"
                  srcLang="ko"
                  label="korean_captions"
                />
                {/* TODO: 지금은 로컬 blob을 보여주고 있으나 이부분 서버 HLS url을 적용하는 방식으로 처리해야 함 */}
                <source type="video/mp4" />
              </video>
              <S.ControlWrapper>
                <S.ButtonWrapper type="button" onClick={handlePlayIconClick}>
                  <A.Icon
                    type={nowPlaying ? 'pause' : 'play_blue'}
                    isCircle
                    alt="play/button"
                  />
                </S.ButtonWrapper>
                <S.ProgressWrapper>
                  <progress
                    ref={progress}
                    onChange={(e) =>
                      handleProgressChange(parseInt(e.target.value, 10))
                    }
                    value={(currentTime / video.current?.duration || 0) * 100}
                    min="0"
                    max="100"
                    step="1"
                    onClick={handleClickProgress}
                  />
                  <S.CheckPointWrapper>
                    {timeFlag.slice(0, timeFlag.length - 1)?.map((item) => (
                      <S.CheckPoint
                        point={item / video.current?.duration}
                        key={`${item}point`}
                      >
                        <A.Icon
                          type="arrow_up_blue"
                          alt="section"
                          func={handleClickProgress}
                        />
                      </S.CheckPoint>
                    ))}
                  </S.CheckPointWrapper>
                </S.ProgressWrapper>
              </S.ControlWrapper>
            </S.VideoContainer>
            <S.ButtonsWrapper>
              <A.Button
                text="다시 연습하기"
                theme="blue"
                func={selfTraingAgain}
              />
              <A.Button
                text="연습 영상 저장"
                theme="white"
                func={saveInterviewVideo}
              />
              <A.Button
                text="체크리스트 초기화"
                theme="white"
                func={initCheckList}
              />
              <A.Button
                disabled
                text="체크리스트 저장"
                theme="white"
                func={postChecklist}
              />
            </S.ButtonsWrapper>
          </S.LeftContent>
          <S.RightContent>
            <S.CheckListContainer>
              <S.CheckListTitle>답변내용 및 목소리 체크!</S.CheckListTitle>
              <ul>
                {evaluation.evaluationList1.map(({ id, text }) => (
                  <S.ChecklistEach id={id} key={id}>
                    <A.Icon
                      type={checkListArray[id] ? 'check_on' : 'check_off'}
                      alt="checkbox"
                      func={handleCheck}
                    />
                    <span>{text}</span>
                  </S.ChecklistEach>
                ))}
              </ul>
            </S.CheckListContainer>
            <S.SmallCheckList>
              <S.CheckListContainer>
                <S.CheckListTitle>비언어 내용 체크!</S.CheckListTitle>
                <ul>
                  {evaluation.evaluationList2.map(({ id, text }) => (
                    <S.ChecklistEach id={id} key={id}>
                      <A.Icon
                        type={checkListArray[id] ? 'check_on' : 'check_off'}
                        alt="checkbox"
                        func={handleCheck}
                      />
                      <span>{text}</span>
                    </S.ChecklistEach>
                  ))}
                </ul>
              </S.CheckListContainer>
              <S.CheckListContainer>
                <S.CheckListTitle>영상 환경 체크!</S.CheckListTitle>
                <ul>
                  {evaluation.evaluationList3.map(({ id, text }) => (
                    <S.ChecklistEach id={id} key={id}>
                      <A.Icon
                        type={checkListArray[id] ? 'check_on' : 'check_off'}
                        alt="checkbox"
                        func={handleCheck}
                      />
                      <span>{text}</span>
                    </S.ChecklistEach>
                  ))}
                </ul>
              </S.CheckListContainer>
            </S.SmallCheckList>
          </S.RightContent>
        </S.Content>
      </S.WrapContent>
    </S.Wrapper>
  );
}
