import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../components/Button';

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

const Video = styled.video`
    width: 470px;
    border: 10px solid #ffffff;
    border-radius: 20px;
`;

const ButtonsWrapper = styled.div`
    width: inherit;
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;

    & div {
        margin: 10px;
        flex: 1 0 calc(50% - 20px);
    }
`;

export default function AloneQuestionCheckList({src,}) {
    const [clickedBtn, setClickedBtn] = useState(1);
    return (
        <Background>
            <EndingTitle>면접이 종료 되었습니다. 체크리스트를 통해 스스로 평가를 해보세요.</EndingTitle>
            <Content>
                <LeftContent>
                    <Video src={src} controls autoplay/>
                    <ButtonsWrapper>
                        <Button text={'다시 연습하기'} theme={clickedBtn === 1 ? 'blue' : 'white'} func={() => setClickedBtn(1)} />
                        <Button text={'연습 영상 저장'} theme={clickedBtn === 2 ? 'blue' : 'white'} func={() => setClickedBtn(2)} />
                        <Button text={'체크리스트 초기화'} theme={clickedBtn === 3 ? 'blue' : 'white'} func={() => setClickedBtn(3)} />
                        <Button text={'체크리스트 저장'} theme={clickedBtn === 4 ? 'blue' : 'white'} func={() => setClickedBtn(4)} />
                    </ButtonsWrapper>
                </LeftContent>
            </Content>
        </Background>
    );
};

AloneQuestionCheckList.propTypes = {
    src: PropTypes.string,
}

AloneQuestionCheckList.defaultProps = {
    src: "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
}