import React, {
  useState, useEffect, useCallback, useRef,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import EvaluationListMock from '../../mocks/EvaluationListMock';

const CloseButton = styled.button`
  position: absolute;
  right: 7%;
  border: none;
  cursor: pointer;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const Background = styled.div`
  background-color: #eef0ff;
  padding: 66px 97px 112px;
  text-align: center;
`;

const EndingTitle = styled.span`
  display: block;
  color: #000000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
  margin-top: 90px;
`;

const Content = styled.div`
  margin-top: 105px;
  display: flex;
`;

const LeftContent = styled.div`
  width: 490px;
  height: auto;
`;

const RightContent = styled.div`
  width: 1178px;
  height: auto;
  margin-left: 55px;
`;

const VideoContainer = styled.figure`
  width: 470px;
  margin: 0;

  & video {
    width: 100%;
    border-radius: 20px;
  }

  & .controls, .controls > * {
    padding:0;
    margin:0;
  }

  .controls {
    overflow:hidden;
    background-color:#ffffff;
    width:100%;
    position:relative;
    border-radius:10px;
    margin-top:10px;
    padding:10px;
    box-sizing:border-box;
  }
  .controls[data-state=hidden] {
    display:none;
  }
  .controls[data-state=visible] {
    display:block;
  }
  .controls > * {
    float:left;
    height:100%;
    margin-left:5%;
    display:block;
  }
  .controls > *:first-child {
    margin-left:0;
  }
  .controls button {
    border:none;
    text-align:center;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    cursor:pointer;
    background:transparent;
    background-size:contain;
    background-repeat:no-repeat;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity:0.5;  
    }
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
    display:block;
    width:100%;
    margin-top:1.125rem;
    border:none;
    overflow:hidden;
    -moz-border-radius:2px;
    -webkit-border-radius:2px;
    border-radius:2px;
    color:#6e6eff;
    cursor:pointer;

    &::-moz-progress-bar {
      background-color:#6e6eff;
    }
    &::-webkit-progress-value {
      background-color:#6e6eff;
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
  margin-top: 55px;

  & > * {
    margin: 10px;
    flex: 1 0 calc(50% - 20px);
    cursor: pointer;
  }
`;

const CheckListContainer = styled.div`
  display: inline-block;
  width: 550px;
  height: 671px;
  box-sizing: border-box;
  margin-right: 11px;
  margin-bottom: 30px;
  padding: 43px 42px 57px 56px;
  border-radius: 10px;
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
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      text-align: left;
      letter-spacing: normal;
      text-align: left;
      color: #3d3d3d;
      margin-bottom: 20px;

      i {
        margin-right: 25px;
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

const CheckPoint = styled.div`
  left: calc(${({ point }) => `${point}% - 9px`});
`;

const SmallCheckList = styled.div`
  display: inline-block;
  vertical-align: top;

  & > * {
    display: block;
    height: auto;
    margin: 0;
    margin-bottom: 30px;
  }
`;

export default function AloneQuestionCheckList({ src }) {
  const [nextActionBtn, setNextActionBtn] = useState(1);
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const [checkListArray, setCheckListArray] = useState(Array(14).fill(false));
  const video = useRef();
  const videoControls = useRef();
  const playpause = useRef();
  const progress = useRef();
  useEffect(() => {
    video.current.controls = false;
    videoControls.current.setAttribute('data-state', 'visible');
  }, []);

  const loadVideoMetaData = useCallback(() => progress.current.setAttribute('max', video.current.duration), []);
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
    const pos = (
      evt.pageX - (progress.current.offsetLeft + progress.current.offsetParent.offsetLeft)
    ) / progress.current.offsetWidth;
    video.current.currentTime = pos * video.current.duration;
  }, []);

  const onCheck = useCallback((evt) => {
    const newCheckList = checkListArray.map(
      (item, idx) => (idx === parseInt(evt.target.parentNode.id, 10) ? !item : item),
    );
    setCheckListArray(newCheckList);
  }, [checkListArray]);

  const initCheckList = useCallback(() => {
    setNextActionBtn(3);
    setCheckListArray(Array(14).fill(false));
  }, [nextActionBtn]);

  return (
    <Background>
      <CloseButton type="button">
        <Icon type="cancel_circle" isCircle alt="close" />
      </CloseButton>
      <EndingTitle>면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.</EndingTitle>
      <Content>
        <LeftContent>
          <VideoContainer>
            <video ref={video} controls preload="metadata" onLoadedMetadata={loadVideoMetaData} onPlay={onPlay} onPause={onPause} onTimeUpdate={onTimeUpdate}>
              <track src="" kind="captions" srcLang="ko" label="korean_captions" />
              <source src={src} type="video/webm" />
            </video>
            <div ref={videoControls} className="controls" data-state="hidden">
              <button ref={playpause} type="button" data-state="play" onClick={onPlayPause}>
                <Icon type={playPauseBtn ? 'play_blue' : 'pause'} isCircle alt="play/button" />
              </button>
              <ProgressWrapper>
                <progress ref={progress} value="0" min="0" onClick={onProgressClck} />
                <CheckPointWrapper>
                  {[25, 50, 75].map(
                    (item) => (
                      <CheckPoint point={item} key={`${item}point`}>
                        <Icon type="arrow_up_blue" alt="section" func={onProgressClck} />
                      </CheckPoint>
                    ),
                  )}
                </CheckPointWrapper>
              </ProgressWrapper>
            </div>
          </VideoContainer>
          <ButtonsWrapper>
            <Button text="다시 연습하기" theme={nextActionBtn === 1 ? 'blue' : 'white'} func={() => setNextActionBtn(1)} />
            <Button text="연습 영상 저장" theme={nextActionBtn === 2 ? 'blue' : 'white'} func={() => setNextActionBtn(2)} />
            <Button text="체크리스트 초기화" theme={nextActionBtn === 3 ? 'blue' : 'white'} func={initCheckList} />
            <Button text="체크리스트 저장" theme={nextActionBtn === 4 ? 'blue' : 'white'} func={() => setNextActionBtn(4)} />
          </ButtonsWrapper>
        </LeftContent>
        <RightContent>
          <CheckListContainer>
            <h2>태도 및 비언어</h2>
            <ul>
              {EvaluationListMock.evaluationList1.map(({ id, text }) => (
                <li id={id} key={id}>
                  <Icon type={checkListArray[id] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </CheckListContainer>
          <SmallCheckList>
            <CheckListContainer>
              <h2>답변 내용</h2>
              <ul>
                {EvaluationListMock.evaluationList2.map(({ id, text }) => (
                  <li id={id} key={id}>
                    <Icon type={checkListArray[id] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </CheckListContainer>
            <CheckListContainer>
              <h2>영상 환경 체크</h2>
              <ul>
                {EvaluationListMock.evaluationList3.map(({ id, text }) => (
                  <li id={id} key={id}>
                    <Icon type={checkListArray[id] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </CheckListContainer>
          </SmallCheckList>
        </RightContent>
      </Content>
    </Background>
  );
}

AloneQuestionCheckList.propTypes = {
  src: PropTypes.string,
};

AloneQuestionCheckList.defaultProps = {
  src: 'http://iandevlin.github.io/mdn/video-player/video/tears-of-steel-battle-clip-medium.webm',
};
