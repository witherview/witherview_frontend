import React, { useState } from 'react';
import styled from 'styled-components';
import tempImg from '@assets/images/box_c_three.png';
import A from '@atoms';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 334px;
  height: 368px;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
`;

const SnapshotArea = styled.div`
  width: 100%;
  height: 50%;
  border-radius: 10px 10px 0 0;
  position: relative;

  img {
  width: 100%;
  height: 100%;
}

i {
  color: #6c72f6;
  display: inline-block;
  padding: 25px;
  position: absolute;    
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;

const DescriptionArea = styled.div`
  height: 50%;
  padding: 10px 43px;
  line-height: 1.5;

  div:first-child {
  display: flex;
  flex-direction: row-reverse;
  box-sizing: border-box;
}

.recDate {
  font-size: 18px;
  color: #d3d3d3;
}

.titleArea {
  display: flex;
  padding-top: 16px;
  padding-bottom: 10px;
  font-size: 24px;
}

.videoTime {
  font-size: 20px;
  color: #9e9e9e;
}
`;

export default function ReplayCardView() {
  const [recDate] = useState('12월 1일 PM 20:00');
  const [videoTime] = useState('20min 15 sec 혼자연습');
  const [title] = useState('12월 1일 혼자연습');

  return (
    <Wrapper>
      <SnapshotArea>
        <img src={tempImg} alt="temp" />
        <A.Icon className="play-btn" type="play_pupple" />
      </SnapshotArea>

      <DescriptionArea>
        <div>
          <A.Icon type="clock_black" alt="" />
        </div>
        <p className="recDate">{recDate}</p>
        <div className="titleArea">
          <p>{title}</p>
          <A.Icon type="clock_black" alt="" />
        </div>

        <p className="videoTime">{videoTime}</p>
      </DescriptionArea>
    </Wrapper>
  );
}
