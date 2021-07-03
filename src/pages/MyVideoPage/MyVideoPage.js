// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ReplayCardView from '../../components/organisms/ReplayCardView';

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  max-width: 100vw;
  height: 100vh;
  padding: 10vh 8.6vh 10vh 0;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5vh;
  }
`;

// --내역
const HistoryMenuBox = styled.div`
  /* width: 35.3vh; */
  font-size: 2.6vh;
  background: red;

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
  {
    id: 1,
    name: '스터디 내역',
  },
  {
    id: 1,
    name: '스터디 내역',
  },
];

// cardList
const CardListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;

  .replayCardItem {
    margin-right: 7vh;
  }

  div.replayCardItem:nth-of-type(4n) {
    margin-right: 0;
  }
`;

export default function MyVideoPage() {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  const fetch = async () => {
    // try {
    //   const { data } = await getVideoApi();
    // eslint-disable-next-line max-len
    //   // 삭제 API가 없어서 실제 동작 하지 않는 경우 (savedLocation가 없거나 savedLocation에 videos가 포함이 안된 경우)를 filter해줬습니다.
    //   setRows(
    //     data
    //       .filter(
    //         (val) => val.savedLocation !== null && val.savedLocation.includes('videos'),
    //       )
    //       .sort((a, b) => -a.id + b.id),
    //   );
    // } catch (error) {
    //   console.error(error);
    //   alert(error);
    // }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Wrapper>
      <header>
        <HistoryMenuBox>
          {historyMenu.map((menu) => (
            <span>{menu.name}</span>
          ))}
        </HistoryMenuBox>
      </header>

      <CardListBox>
        {
          // eslint-disable-next-line no-unused-vars
          [...Array(12).keys()].map((_) => (
            <ReplayCardView />
          ))
        }
      </CardListBox>
    </Wrapper>
  );
}
