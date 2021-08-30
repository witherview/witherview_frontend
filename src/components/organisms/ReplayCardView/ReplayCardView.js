import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import PropTypes, { number } from 'prop-types';
import A from '@atoms';
import M from '@molecules';
import { numberPad } from '@utils/snippet';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1vh;
  width: 35.3vh;
  height: 36.8vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  box-sizing: border-box;

  user-select: none;
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

  cursor: pointer;
`;

const DescriptionArea = styled.div`
  height: 17.9vh;
  padding: 3.7vh 4.3vh;

  box-sizing: border-box;

  line-height: 1.5;

  position: relative;

  i:first-child {
    position: absolute;

    right: -2vh;
    top: -3vh;
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
    color: ${({
      theme: {
        replay: { titleAreaColor },
      },
    }) => titleAreaColor};
  }

  .videoTime {
    font-size: 1.6vh;
    color: #d3d3d3;

    .bold {
      color: #9e9e9e;
    }
  }
`;

export default function ReplayCardView({
  id,
  createdAt,
  title,
  thumbnail = 'https://www.solidbackgrounds.com/images/3840x2160/3840x2160-dark-gray-solid-color-background.jpg',
  time = 1000,
}) {
  const history = useHistory();
  const day = numberPad(`${createdAt.getDate()}`);
  const month = numberPad(`${createdAt.getMonth() + 1}`);

  const hour = numberPad(`${createdAt.getHours()}`);
  const minute = numberPad(`${createdAt.getMinutes()}`);
  const ampm = hour >= 12 ? 'PM' : 'AM';

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
      <SnapshotArea onClick={() => history.push(`/replay/${id}`)}>
        <img className="thumbnail" src={thumbnail} alt="thumbnail" />
        <A.Icon type="play_pupple" alt="play_pupple" />
      </SnapshotArea>
      <DescriptionArea>
        <M.HoverDropDown
          items={[
            { id: 0, title: '수정', func: () => {} },
            { id: 1, title: '삭제', func: () => {} },
          ]}
        >
          <A.Icon type="dots" alt="dots" />
        </M.HoverDropDown>
        <p className="recDate">{`${month}월 ${day}일 ${ampm} ${hour}: ${minute}`}</p>
        <div className="titleArea">
          <p>{title || '제목 없음'}</p>
        </div>
        {/* TODO: 서버에 프로퍼티 추가되면 확인해보아야 함 */}
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

ReplayCardView.propTypes = {
  id: PropTypes.number,
  createdAt: PropTypes.instanceOf(Date),
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  time: number,
};
