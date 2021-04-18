import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoListImage from '@assets/images/illust_4.png';
import A from '@atoms';

const Image = styled.img`
  width: 32.7vh;
  height: 19.7vh;
  margin-top: 17.1vh;
`;
const Text = styled.div`
  margin-top: 3vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #000000;
`;
const Button = styled.div`
  display: flex;
  width: 35.6vh;
  height: 8.2vh;
  margin: 10vh 0 0 0;
  border-radius: 1vh;
  background-image: linear-gradient(to bottom, #2323de, #4848da);
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const ButtonText = styled.span`
  height: 3vh;
  margin-left: 3vh;
  font-family: AppleSDGothicNeoB00;
  font-size: 1.9vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  color: #ffffff;
`;

export default function NoList() {
  return (
    <>
      <Image src={NoListImage} />
      <Text>등록된 질문 리스트가 없습니다.</Text>
      <Link to="/self/question/new" style={{ textDecoration: 'none' }}>
        <Button>
          <A.Icon type="add_white" alt="" />
          <ButtonText>질문 리스트 등록하기</ButtonText>
        </Button>
      </Link>
    </>
  );
}
