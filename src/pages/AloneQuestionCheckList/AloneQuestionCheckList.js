import React, {
  useState, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const CloseButton = styled.button`
  position: absolute;
  right: 7%;
  border: none;
  cursor: pointer;

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

const Video = styled.figure`
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
    height:8.0971659919028340080971659919028%;
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
  .controls .progress {
    width:80%;
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
  }
  .controls button:hover {
    opacity:0.5;
  }
  .controls progress {
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
  }
  .controls progress[data-state="fake"] {
    background:#d3d3d3;
    height:65%;
  }
  .controls progress span {
    width:0%;
    height:100%;
    display:inline-block;
    background-color:#6e6eff;
  }
  
  .controls progress::-moz-progress-bar {
    background-color:#6e6eff;
  }
  .controls progress::-webkit-progress-value {
    background-color:#6e6eff;
  }
  .controls progress::-webkit-progress-bar {
    background-color: #d3d3d3;
  }
  .controls progress + .checkPoint {
    position: relative;
    background: transparent;
  }

  .checkPoint > div {
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
        float: left;
        margin-right: 25px;
        cursor: pointer;
      }

      span {
        display: table-cell;
        vertical-align: middle;
        line-height: 1.5;
      }
    }
  }
`;

const ListBox = styled.div`
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
  const [clickedBtn, setClickedBtn] = useState(1);
  const [playPauseBtn, setPlayPauseBtn] = useState(true);
  const [checkListArray, setCheckListArray] = useState(Array(14).fill(false));
  let video = null;
  let videoControls = null;
  let playpause = null;
  let progress = null;
  let progressBar = null;
  useEffect(() => {
    video = document.getElementById('video');
    videoControls = document.getElementById('video-controls');
    playpause = document.getElementById('playpause');
    progress = document.getElementById('progress');
    progressBar = document.getElementById('progress-bar');
    video.controls = false;
    videoControls.setAttribute('data-state', 'visible');
  }, [clickedBtn, playPauseBtn, checkListArray]);

  const loadVideoMetaData = useCallback(() => progress.setAttribute('max', video.duration), []);
  const changeButtonState = useCallback(() => {
    if (video.paused || video.ended) {
      playpause.setAttribute('data-state', 'play');
    } else {
      playpause.setAttribute('data-state', 'pause');
    }
  }, []);

  const onPlay = useCallback(() => changeButtonState(), []);
  const onPause = useCallback(() => changeButtonState(), []);
  const onPlayPause = useCallback(() => {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
    setPlayPauseBtn(!playPauseBtn);
  }, [playPauseBtn]);

  const onTimeUpdate = useCallback(() => {
    if (!progress?.getAttribute('max')) {
      progress.setAttribute('max', video.duration);
    }
    progress.value = video.currentTime;
    progressBar.style.width = `${Math.floor((video.currentTime / video.duration) * 100)}%`;
  }, []);

  const onProgressClck = useCallback((evt) => {
    const pos = (
      evt.pageX - (progress.offsetLeft + progress.offsetParent.offsetLeft)
    ) / progress.offsetWidth;
    video.currentTime = pos * video.duration;
  }, []);

  const onCheck = useCallback((evt) => {
    const newCheckList = checkListArray.map(
      (item, idx) => (idx === parseInt(evt.target.parentNode.id, 10) ? !item : item),
    );
    setCheckListArray(newCheckList);
  }, [checkListArray]);

  return (
    <Background>
      <CloseButton type="button">
        <Icon type="cancel_circle" alt="close" />
      </CloseButton>
      <EndingTitle>면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.</EndingTitle>
      <Content>
        <LeftContent>
          <Video>
            <video id="video" controls preload="metadata" onLoadedMetadata={loadVideoMetaData} onPlay={onPlay} onPause={onPause} onTimeUpdate={onTimeUpdate}>
              <track src="" kind="captions" srcLang="ko" label="korean_captions" />
              <source src={src} type="video/webm" />
            </video>
            <div id="video-controls" className="controls" data-state="hidden">
              <button id="playpause" type="button" data-state="play" onClick={onPlayPause}>
                <Icon type={playPauseBtn ? 'play_blue' : 'pause'} alt="play/button" />
              </button>
              <div className="progress">
                <progress id="progress" value="0" min="0" onClick={onProgressClck}>
                  <span id="progress-bar" />
                </progress>
                <div className="checkPoint" value="0" min="0">
                  {[25, 50, 75].map(
                    (item) => (
                      <div style={{ left: `calc(${item}% - 9px)` }} key={`${item}point`}>
                        <Icon type="arrow_up_blue" alt="section" func={onProgressClck} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </Video>
          <ButtonsWrapper>
            <Button text="다시 연습하기" theme={clickedBtn === 1 ? 'blue' : 'white'} func={() => setClickedBtn(1)} />
            <Button text="연습 영상 저장" theme={clickedBtn === 2 ? 'blue' : 'white'} func={() => setClickedBtn(2)} />
            <Button text="체크리스트 초기화" theme={clickedBtn === 3 ? 'blue' : 'white'} func={() => setClickedBtn(3)} />
            <Button text="체크리스트 저장" theme={clickedBtn === 4 ? 'blue' : 'white'} func={() => setClickedBtn(4)} />
          </ButtonsWrapper>
        </LeftContent>
        <RightContent>
          <CheckListContainer>
            <h2>태도 및 비언어</h2>
            <ul>
              <li id={0}>
                <Icon type={checkListArray[0] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>목소리가 작지 않았다.</span>
              </li>
              <li id={1}>
                <Icon type={checkListArray[1] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>복장이 단정하며 청결하였다.</span>
              </li>
              <li id={2}>
                <Icon type={checkListArray[2] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>말하는 태도와 표정의 관리가 일관적이었다.</span>
              </li>
              <li id={3}>
                <Icon type={checkListArray[3] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>눈빛의 흔들림이 없었다.</span>
              </li>
              <li id={4}>
                <Icon type={checkListArray[4] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>카메라 혹은 화면을 제대로 응시했다.</span>
              </li>
              <li id={5}>
                <Icon type={checkListArray[5] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>불필요한 추임새를 하지 않았다.</span>
              </li>
              <li id={6}>
                <Icon type={checkListArray[6] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>고개를 흔들거리거나 몸을 좌우로 흔들지 않았다.</span>
              </li>
              <li id={7}>
                <Icon type={checkListArray[7] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                <span>처음부터 끝까지 일관된 톤으로만 대답하지 않았다.</span>
              </li>
            </ul>
          </CheckListContainer>
          <ListBox>
            <CheckListContainer>
              <h2>답변 내용</h2>
              <ul>
                <li id={8}>
                  <Icon type={checkListArray[8] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>똑같은 단어, 문장을 반복하지 않았다.</span>
                </li>
                <li id={9}>
                  <Icon type={checkListArray[9] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>구체적인 예화, 사례, 근거를 통해 설명했다.</span>
                </li>
                <li id={10}>
                  <Icon type={checkListArray[10] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>두괄식으로 처음부터 하고자 하는 말을 요약해서 전달했다.</span>
                </li>
              </ul>
            </CheckListContainer>
            <CheckListContainer>
              <h2>영상 환경 체크</h2>
              <ul>
                <li id={11}>
                  <Icon type={checkListArray[11] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>화면안에 얼굴이 다 들어간다.</span>
                </li>
                <li id={12}>
                  <Icon type={checkListArray[12] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>조명이 어둡지않고 이목구비가 잘 보인다.</span>
                </li>
                <li id={13}>
                  <Icon type={checkListArray[13] ? 'check_on' : 'check_off'} alt="checkbox" func={onCheck} />
                  <span>목소리가 잘 들리며 주변의 소음이 크지 않다.</span>
                </li>
              </ul>
            </CheckListContainer>
          </ListBox>
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
