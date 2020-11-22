import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { getQuestionListAPI } from '../../repository/questionListRepository';
import NoList from './NoList/NoList';
import { get } from '../../utils/snippet'; 

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.div`
    font-family: AppleSDGothicNeoEB00;
    font-size: 36px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: normal;
    color: #000000;
`;

const Select = styled.div`
    font-family: AppleSDGothicNeoM00;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: normal;
    color: #3d3d3d;
`;

export default function QuestionListPage() {
    const authSelector = useSelector(get('auth'));
    const [questionList, setQuestionList] = useState();
    useEffect(() => {
        getQuestionListAPI().then((response) => {
            setQuestionList(JSON.stringify(response.data));
        })
    })

    return (
        <>  
            <Wrapper>
                <Title>{authSelector.name}님이 등록한 질문 리스트입니다.</Title>
                <Select>연습하고 싶은 질문 리스트를 선택해주세요.</Select>
                <NoList />
            </Wrapper>
            {/* { questionList.length === 0 ? 
                <NoList/> : <IsQuestionList />} */}
        </>
    )
}