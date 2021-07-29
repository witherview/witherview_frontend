// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSelfVideoApi } from '@repository/selfHistoryRepository';
import ReplayCardView from '../../components/organisms/ReplayCardView';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5vh;
  }
`;

const HistoryMenuBox = styled.div`
  font-size: 2.2vh;
  font-family: AppleSDGothicNeoB00;

  span {
    border-right: 1px solid #9e9e9e;
  }

  span:first-child {
    padding-right: 2vh;
  }

  span:nth-child(n + 2) {
    padding: 0 2vh;
  }

  span:last-child {
    border: none;
    padding-right: 0;
  }
  cursor: default;
  user-select: none;
`;

const historyMenu = [
  {
    id: 0,
    name: '혼자 연습 내역',
  },
  {
    id: 1,
    name: '스터디 내역',
  },
];

const CardListBox = styled.div`
  // TODO: column 마지막 오른쪽 margin처럼 보이는 부분 수정해야함
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 6vh;

  width: 100%;
  height: 100%;
`;

export default function MyVideoPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getSelfVideoApi();
        setRows(data);
        // 삭제 API가 없어서 실제 동작 하지 않는 경우 (savedLocation가 없거나 savedLocation에 videos가 포함이 안된 경우)를 filter해줬습니다.
        // setRows(
        //   data
        //     .filter(
        //       (val) =>
        //         val.savedLocation !== null &&
        //         val.savedLocation.includes('videos'),
        //     )
        //     .sort((a, b) => -a.id + b.id),
        // );
      } catch (error) {
        console.error(error);
        alert(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <header>
        <HistoryMenuBox>
          {historyMenu.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </HistoryMenuBox>
      </header>

      <CardListBox>
        {rows.map(({ id, createdAt, historyTitle, thumbnail }) => (
          <ReplayCardView
            key={id}
            id={id}
            createdAt={new Date(createdAt)}
            title={historyTitle}
            thumbnail={thumbnail}
          />
        ))}
      </CardListBox>
    </Wrapper>
  );
}
