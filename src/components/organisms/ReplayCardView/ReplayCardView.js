import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import A from '@atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1vh;
  width: 35.3vh;
  height: 36.8vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  box-sizing: border-box;
`;

const SnapshotArea = styled.div`
  width: 100%;
  height: 18.9vh;
  border-radius: 1vh 1vh 0 0;
  position: relative;
  box-sizing: border-box;

  .thumbnail {
    width: 100%;
    height: 100%;

    background-color: black;

    border-top-left-radius: 1vh;
    border-top-right-radius: 1vh;
  }

  i {
    color: #6c72f6;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }
`;

const DescriptionArea = styled.div`
  height: 17.9vh;
  padding: 3.7vh 4.3vh;

  box-sizing: border-box;

  line-height: 1.5;

  position: relative;

  i:first-child {
    position: absolute;

    right: 2.5vh;
    top: 1.7vh;
  }

  .recDate {
    font-size: 1.6vh;
    color: #d3d3d3;
  }

  .titleArea {
    display: flex;
    padding-top: 1.6vh;
    padding-bottom: 1vh;
    font-size: 2.2vh;
    font-family: AppleSDGothicNeoB00;
  }

  .videoTime {
    font-size: 1.6vh;
    color: #d3d3d3;

    .bold {
      color: #9e9e9e;
    }
  }
`;

const time = 1000;
export default function ReplayCardView() {
  const [recDate] = useState('12월 1일 PM 20:00');
  const [title] = useState('12월 1일 혼자연습');

  const [pt, setPt] = useState({ hour: '', min: '', sec: '' });

  useEffect(() => {
    setPt({
      hour: Math.floor(time / 3600) > 0 ? Math.floor(time / 3600) : '',
      min:
        Math.floor((time % 3600) / 60) > 0
          ? Math.floor((time % 3600) / 60)
          : '',
      sec: (time % 3600) % 60,
    });
  }, []);

  return (
    <Wrapper className="replayCardItem">
      <SnapshotArea>
        <div className="thumbnail" src="" alt="temp" />
        <A.Icon type="play_pupple" />
      </SnapshotArea>

      <DescriptionArea>
        <A.Icon className="abc" type="dots" alt="" />

        <p className="recDate">{recDate}</p>
        <div className="titleArea">
          <p>{title}</p>
        </div>

        <p className="videoTime">
          {pt.hour !== '' && (
            <>
              <span className="bold">{pt.hour} </span>
              <span>hour</span>
            </>
          )}
          {pt.min !== '' && (
            <>
              <span className="bold"> {pt.min} </span>
              <span>min</span>
            </>
          )}
          {pt.sec !== '' && (
            <>
              <span className="bold"> {pt.sec} </span>
              <span>sec</span>
            </>
          )}
        </p>
      </DescriptionArea>
    </Wrapper>
  );
}
