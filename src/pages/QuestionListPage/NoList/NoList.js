import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NoListImage from '../../../assets/images/illust_4.png'
import Icon from '../../../components/Icon'
const Image = styled.img`
    width: 327px;
    height: 197px;
    margin-top: 171px;
`;
const Text = styled.div`
    margin-top: 30px;
    font-family: AppleSDGothicNeoM00;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #000000;
`;
const Button = styled.div`
    display: flex;
    width: 356px;
    height: 82px;
    margin: 100px 0 0 0;
    border-radius: 10px;
    background-image: linear-gradient(to bottom, #2323de, #4848da);
    justify-content: center;
    align-items: center;
`
const ButtonText = styled.span`
    height: 30px;
    margin-left: 30px;
    font-family: AppleSDGothicNeoB00;
    font-size: 24px;
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
            <Image src={NoListImage}/>
            <Text>등록된 질문 리스트가 없습니다.</Text>
            <Button>
                <Icon type="add_white" alt=""/>
                <ButtonText>
                    질문 리스트 등록하기
                </ButtonText>
            </Button>
        </>
    )
}