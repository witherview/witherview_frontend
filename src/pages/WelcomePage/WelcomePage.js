/* eslint-disable no-useless-escape */
import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import ReactRouterPropTypes from 'react-router-prop-types';
import { useSelector } from 'react-redux';

import A from '@atoms';
import M from '@molecules';
import { commonStyles } from '@style';

import { putProfileInfoApi } from '@repository/accountRepository';

import { get } from '@utils/snippet';
import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9ff;
`;

const WrapContent = styled.div`
  height: 83vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 6vh;
  width: auto;
`;

const WrapSubTitle = styled.div`
  max-width: 80vw;
  text-align: center;
  font-family: AppleSDGothicNeoM00;
  font-size: 2.4vh;
  line-height: 3vh;
  color: #3d3d3d;
  padding-top: 3.5vh;
  padding-bottom: 5.4vh;
  pointer-events: none;
`;

const WrapBox = styled.div`
  width: 68.6vh;
  max-width: 80vw;
  height: 52.6vh;
  background-color: #ffffff;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.1vh #f6f6f6;
  border-radius: 2vh;
`;

const WrapContianer = styled.div`
  max-width: 60vw;
  height: 40vh;
  padding: 7.11vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const WrapUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapMiddleContainer = styled.div`
  height: 10vh;
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 53.3vh;
`;

const WrapName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1vh;
  margin-left: 4vh;
  > div {
    padding-right: 1vh;
    font-family: AppleSDGothicNeoEB00;
    font-size: 2.4vh;
  }
`;

const WrapMail = styled.div`
  font-family: TitilliumWeb;
  font-size: 2vh;
  color: ${commonStyles.colors.warmGrey};
`;

const WrapButton = styled.div`
  ${commonStyles.button}
`;

const WrapBottomContainer = styled.div`
  padding-top: 4vh;
`;

const WrapBottomText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  color: #9e9e9e;
  padding-right: 2vh;
  cursor: default;
`;

const WrapAnker = styled.span`
  padding: 3vh;
  font-size: 1.9vh;
  color: #6e6eff;
  user-select: none;
  &:hover {
    border-bottom: 0.1vh solid #6e6eff;
  }
  cursor: pointer;
`;

const WrapInput = styled.input`
  width: 15vh;
  text-align: center;
  border: none;
  border-right: 0px;
  border-top: 0px;
  boder-left: 0px;
  boder-bottom: 0px;
  font-family: AppleSDGothicNeoEB00;
  font-size: 2.4vh;
`;

export default function WelcomePage({ history }) {
  const [edit, setEdit] = useState();
  const [nickname, setNickname] = useState();

  const {
    name, mainIndustry, mainJob, subIndustry, subJob, phoneNumber,
  } = useSelector(
    get('auth'),
  );

  const uploadButton = useCallback(async () => {
    try {
      if (nickname) {
        await putProfileInfoApi({
          name: nickname || name,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
          phoneNumber,
        });
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }, [nickname, putProfileInfoApi]);

  return (
    <Wrapper>
      <WrapContent>
        <Logo src={witherviewLogo} alt="logo" />
        <WrapSubTitle>위더뷰가 처음이신가요? 정보를 입력해주세요.</WrapSubTitle>
        <WrapBox>
          <WrapContianer>
            <WrapUpperContainer>
              <M.ProfileEdit />
            </WrapUpperContainer>
            <WrapMiddleContainer>
              <WrapName>
                {edit ? (
                  <WrapInput
                    placeholder={sessionStorage.getItem('name')}
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    autoFocus
                  />
                ) : (
                  <div>{sessionStorage.getItem('name')}</div>
                )}
                <A.Icon type="post" func={() => setEdit(true)} />
              </WrapName>
              <WrapMail>{sessionStorage.getItem('email')}</WrapMail>
            </WrapMiddleContainer>
            <WrapButton>
              <A.Button
                theme="blue"
                func={() => {
                  uploadButton();
                  history.push('/self');
                }}
                text="시작하기"
              />
            </WrapButton>
          </WrapContianer>
        </WrapBox>
        <WrapBottomContainer>
          <WrapAnker onClick={() => {}}>이용약관</WrapAnker>
          <WrapAnker onClick={() => {}}>개인정보처리방침</WrapAnker>
        </WrapBottomContainer>
        <WrapBottomContainer>
          <WrapBottomText>
            CopyrightⓒWITHERVIEW All Rights Reserved.
          </WrapBottomText>
        </WrapBottomContainer>
      </WrapContent>
    </Wrapper>
  );
}

WelcomePage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
