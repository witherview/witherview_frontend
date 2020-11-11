import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #eef0ff;
    padding: 66px 97px 112px;
    text-align: center;
`;

const EndingTitle = styled.span`
    color: #000000;
    font-family: AppleSDGothicNeoEB00;
    font-size: 36px;
`

const Content = styled.div`
    margin-top: 105px;
`;

const Video = styled.video`
    width: 470px;
    height: 330px;
`

export default function AloneQuestionCheckList() {
    return (
        <Background>
            <EndingTitle>면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.</EndingTitle>
            <Content>
                <Video controls autoplay/>
            </Content>
        </Background>
    );
};
