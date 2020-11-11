import React, {
  useState, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../components/Button';
import Icon from '../../components/Icon';

const Background = styled.div`
  background-color: #eef0ff;
  padding: 66px 97px 112px;
  text-align: center;
`;

const EndingTitle = styled.span`
  color: #000000;
  font-family: AppleSDGothicNeoEB00;
  font-size: 36px;
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
  border: 10px solid #ffffff;
  border-radius: 20px;
  margin: 0;

  & video {
    width: 100%;
  }

  & .controls, .controls > * {
    padding:0;
    margin:0;
  }

  .controls {
    overflow:hidden;
    background:transparent;
    width:100%;
    height:8.0971659919028340080971659919028%;
    position:relative;
  }
  .controls[data-state=hidden] {
    display:none;
  }
  .controls[data-state=visible] {
    display:block;
  }
  .controls > * {
    float:left;
    width:3.90625%;
    height:100%;
    margin-left:0.1953125%;
    display:block;
  }
  .controls > *:first-child {
    margin-left:0;
  }
  .controls .progress {
    cursor:pointer;
    width:95.9%;
  }
  .controls button {
    text-align:center;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    border:none;
    cursor:pointer;
    text-indent:-99999px;
    background:transparent;
    background-size:contain;
    background-repeat:no-repeat;
  }
  .controls button:hover, .controls button:focus {
    opacity:0.5;
  }
  .controls button[data-state="play"] {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNkU0NTY5NkE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNkU0NTY5NUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kBUJ9AAAAXFJREFUeNrsmLtOAkEUhneQyiAdDTExGlYMBaW9oq/ge8jlUbwkthTY2EGBLehbKK0UxsQgVK7/SWbMZo3j3mbmxPAnXyi2+fIzZ3dmRBAEHucUPO6hBhUyNXAH3umxJRZgCBo/nCKCe+DVoliUN5LUCd46lFOMwk4iPCRCiDl+Ko5X3RJOm99OEcGAyVyIrFO8lEPE9jXTBNvgRq4ba6+ZuAs5nFMwy3NQdFOcRpBSBtfgk6ugykkebZoUpGyBqyxtmhZUaYFnzoKqzcukbdoUVDkGT5wFKSVwEadNV4IqR3+16VrQkxuSVRxBVzvqKija+tQl/fafyx00u7/YBxOOU0yttcEHx9fMPphy/JJQa50krdkUrIMHjruZDdBN25ppwYOsrZkSpNZ68hDFast/Bg7Bo4nDu+7g/m/Oxc6u3+YMnBY6wTEDwXvdbmYXvDi82aKrP183xZQd0LcsSktrIC9PvV+neH1HvRZ0kC8BBgADq2RhyZa7BQAAAABJRU5ErkJggg==');
  }
  .controls button[data-state="pause"] {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpFNDZDNDg2MEEzMjFFMjExOTBEQkQ4OEMzRUMyQjhERCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCNzE0QzJGQUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCNzAxODM5QUE0MDcxMUUyQjgwQkYzQzhCMDZBRTU1NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzQ0QwNDBBMDJBNEUyMTFCOTZEQzYyRDgyRUVBOUZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU0NkM0ODYwQTMyMUUyMTE5MERCRDg4QzNFQzJCOEREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r7sqzQAAANdJREFUeNrs2MEKwjAMBuDGswd9C/UdPHvy6Ft6UTyKr6RDcceawDpKHZsE2kb4Az87GOiHNLCFvPfOcs2c9ZJ/MKSrDefCaeXnQmm7M9dfpgQoDY+CsDRy9moMeKqICznGJoqHhIie/JhXvnUNmxa9KQF6I3NBfzPFANYC7uTKRtkqeyZLOyQ0dLcVPRgSAAEEEEAAAQQQwJ9ftzQ92YAHzjLKXtmT7YUVX3UA5gK+DJiaMeDNAPCaToyl9dvdTazfpMIC810QJmed3cACk7CjBrByfQQYAHwMIXlfZRgfAAAAAElFTkSuQmCC');
  }
  .controls progress {
    display:block;
    width:100%;
    margin-top:2px;
    margin-top:0.125rem;
    border:none;
    overflow:hidden;
    -moz-border-radius:2px;
    -webkit-border-radius:2px;
    border-radius:2px;
    color:#0095dd; /* Internet Explorer uses this value as the progress bar's value colour */
  }
  .controls progress[data-state="fake"] {
    background:#e6e6e6;
    height:65%;
  }
  .controls progress span {
    width:0%;
    height:100%;
    display:inline-block;
    background-color:#2a84cd;
  }
  
  .controls progress::-moz-progress-bar {
    background-color:#0095dd;
  }
  .controls progress::-webkit-progress-value {
    background-color:#0095dd;
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
  }
`;

const CheckListContainer = styled.div`
  display: inline-block;
  width: 550px;
  height: 671px;
  box-sizing: border-box;
  margin-right: 11px;
  padding: 43px 52px 57px 56px;
  border-radius: 10px;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  background-color: #ffffff;
  font-family: AppleSDGothicNeoM00;

  & > ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.33;
      text-align: left;
      letter-spacing: normal;
      text-align: left;
      color: #3d3d3d;
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
  }, [clickedBtn]);

  const loadVideoMetaData = () => progress.setAttribute('max', video.duration);
  const changeButtonState = () => {
    if (video.paused || video.ended) {
      playpause.setAttribute('data-state', 'play');
    } else {
      playpause.setAttribute('data-state', 'pause');
    }
  };

  const onPlay = () => changeButtonState();
  const onPause = () => changeButtonState();
  const onPlayPause = () => {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };
  const onTimeUpdate = () => {
    if (!progress.getAttribute('max')) {
      progress.setAttribute('max', video.duration);
    }
    progress.value = video.currentTime;
    progressBar.style.width = `${Math.floor((video.currentTime / video.duration) * 100)}%`;
  };

  const onProgressClck = (evt) => {
    const pos = (
      evt.pageX - (progress.offsetLeft + progress.offsetParent.offsetLeft)
    ) / progress.offsetWidth;
    video.currentTime = pos * video.duration;
  };

  return (
    <Background>
      <EndingTitle>면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.</EndingTitle>
      <Content>
        <LeftContent>
          <Video>
            <video id="video" controls preload="metadata" ref={video} onLoadedMetadata={loadVideoMetaData} onPlay={onPlay} onPause={onPause} onTimeUpdate={onTimeUpdate}>
              <source src={src} type="video/webm" />
            </video>
            <div id="video-controls" className="controls" data-state="hidden" ref={videoControls}>
              <button id="playpause" type="button" data-state="play" ref={playpause} onClick={onPlayPause}>Play/Pause</button>
              <div className="progress">
                <progress id="progress" value="0" min="0" ref={progress} onClick={onProgressClck}>
                  <span id="progress-bar" ref={progressBar} />
                </progress>
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
              <li>
                <Icon type="check" alt="checkbox" />
                <span>목소리가 작지 않았다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>복장이 단정하며 청결하였다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>말하는 태도와 표정의 관리가 일관적이었다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>눈빛의 흔들림이 없었다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>카메라 혹은 화면을 제대로 응시했다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>불필요한 추임새를 하지 않았다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>고개를 흔들거리거나 몸을 좌우로 흔들지 않았다.</span>
              </li>
              <li>
                <Icon type="check" alt="checkbox" />
                <span>처음부터 끝까지 일관된 톤으로만 대답하지 않았다.</span>
              </li>
            </ul>
          </CheckListContainer>
          <ListBox>
            <CheckListContainer>
              <h3>답변 내용</h3>
              <ul>
                <li>
                  <Icon type="check" alt="checkbox" />
                  <span>똑같은 단어, 문장을 반복하지 않았다.</span>
                </li>
                <li>
                  <Icon type="check" alt="checkbox" />
                  <span>구체적인 예화, 사례, 근거를 통해 설명했다.</span>
                </li>
                <li>
                  <Icon type="check" alt="checkbox" />
                  <span>두괄식으로 처음부터 하고자 하는 말을 요약해서 전달했다.</span>
                </li>
              </ul>
            </CheckListContainer>
            <CheckListContainer>
              <h3>영상 환경 체크</h3>
              <ul>
                <li>
                  <Icon type="check" alt="checkbox" />
                  <span>화면안에 얼굴이 다 들어간다.</span>
                </li>
                <li>
                  <Icon type="check" alt="checkbox" />
                  <span>조명이 어둡지않고 이목구비가 잘 보인다.</span>
                </li>
                <li>
                  <Icon type="check" alt="checkbox" />
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
