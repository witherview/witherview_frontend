/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import ReactRouterPropTypes from 'react-router-prop-types';

import { signUpApi } from '@repository/signUpRepository';
import { loginApi } from '@repository/loginRepository';
import { setLogin } from '@store/Auth/auth';

import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';
import { get } from '@utils/snippet';

import A from '@atoms';

import useWindowSize from '@hooks/useWindowSize';

const Wrapper = styled.div`
  height: ${({ ratio }) => (ratio ? '135vh;' : '195vh;')}
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f9f9ff;
`;

const WrapContent = styled.div`
  padding-top: 8.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 6vh;
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
  width: 118.14vh;
  max-width: 80vw;
  height: auto;
  background-color: white;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(4, 4, 161, 0.1);
  border: solid 0.1vh #f6f6f6;
  border-radius: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 2.4vh;
  color: #6e6eff;
  padding-bottom: 1.9vh;
  pointer-events: none;
`;

const WrapContianer = styled.div`
  width: auto;
  max-width: 118.14vh;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wraping = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 118.14vh;
`;

const WrapUpperContainer = styled.div`
  max-width: 118.14vh;
  width: 70vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const WrapInput = styled.div`
  padding: 3vh 5.5vh 3vh 5.5vh;
  > input {
    ${({ ratio }) => (ratio ? 'width: 45.8vh;' : 'width: 60vw;')}
    height: 5vh;
    font-size: 1.9vh;
    font-family: AppleSDGothicNeoM00;
    letter-spacing: 0.2vh;
    border-bottom: 0.2vh solid #9e9e9e;
    ::placeholder {
      color: ${({ theme }) => theme.colors.warmGrey};
    }
    :-ms-input-placeholder {
      font-family: AppleSDGothicNeoB00;
      color: ${({ theme }) => theme.colors.warmGrey};
    }
    ::-ms-input-placeholder {
      font-family: AppleSDGothicNeoB00;
      color: ${({ theme }) => theme.colors.warmGrey};
    }
  }
`;

const WrapMiddleContainer = styled.div`
  height: 12vh;
  width: ${({ ratio }) => (!ratio ? '60vw;' : 'calc(100% - 12.44vh);')}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapMiddlePart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WrapMiddleText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  color: #9e9e9e;
  padding-left: 2vh;
  ${({ ratio }) => ratio && 'width: 35vh;'}
  cursor: default;
`;

const WrapButton = styled.div`
  margin-bottom: 6vh;
  ${({ theme }) => theme.button}
`;

const WrapBottomContainer = styled.div`
  padding-top: 4vh;
`;

const WrapBottomText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  color: #9e9e9e;
  cursor: default;
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ ratio }) => (ratio ? 'width: 45.8vh;' : 'width: 60vw;')}
  height: 6vh;
  box-sizing: border-box;
  border-radius: 1vh;
  border: solid 0.1vh #9e9e9e;
  background-color: #ffffff;
  padding-right: 2.2vh;
  cursor: pointer;
`;

const SelectItemListWrapper = styled.div`
  position: absolute;
  ${({ ratio }) => (ratio ? 'width: 45.8vh;' : 'width: 60vw;')}
  height: 25vh;
  transform: translateY(5.6vh);
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 1vh;
  box-shadow: 0 1.2vh 3.6vh 0 rgba(4, 4, 161, 0.15);
  background-color: #ffffff;
  z-index: 100;
`;

const SelectItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: visible;
  z-index: 10;
`;

const SelectItem = styled.div`
  display: flex;
  width: 100%;
  height: 5.2vh;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:first-child {
    margin-top: 2vh;
  }
  &:hover {
    background-color: #eef0ff;
    & > div {
      color: #0c0c59;
    }
  }
`;

const SelectText = styled.div`
  margin-left: 2.2vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #9e9e9e;
`;

const ClickableSelectText = styled.span`
  color: ${({ theme }) => theme.colors.cornflower};
  font-family: AppleSDGothicNeoB00;
  cursor: pointer;
`;

const EMPTY_FORM = {
  email: '',
  mainIndustry: '',
  mainJob: '',
  name: '',
  password: '',
  passwordConfirm: '',
  subIndustry: '',
  subJob: '',
};

const industryList = [
  '경영/사무',
  '마케팅/MD',
  '영업',
  'IT/인터넷',
  '연구개발/설계',
  '생산/품질',
  '디자인',
  '기타',
];

const jobList = [
  '금융/은행',
  'IT',
  '서비스/교육',
  '보건/의약/바이오',
  '제조',
  '건설',
  '예술/문화',
  '기타',
];

const initSelect = {
  mainIndustry: false,
  subIndustry: false,
  mainJob: false,
  subJob: false,
};

export default function SignUpPage({ history }) {
  const dispatch = useDispatch();
  const authSelector = useSelector(get('auth'));

  const { ratio } = useWindowSize();

  const [toggleCheckTerm, setToggleCheckTerm] = useState({
    first: false,
    second: false,
  });
  const [signUpForm, setSignUpForm] = useState(EMPTY_FORM);
  const [mainIndustry, setMainIndustry] = useState('산업을 선택해주세요.');
  const [subIndustry, setSubIndustry] = useState('산업을 선택해주세요.');
  const [mainJob, setMainJob] = useState('직무를 선택해주세요.');
  const [subJob, setSubJob] = useState('직무를 선택해주세요.');
  const [select, setSelect] = useState({
    mainIndustry: false,
    subIndustry: false,
    mainJob: false,
    subJob: false,
  });

  const handleInput = (e) => {
    setSignUpForm({});
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (set, value, type) => {
    set(value);
    setSignUpForm({
      ...signUpForm,
      [type]: value,
    });

    setSelect({ ...initSelect, [type]: !select[type] });
  };

  const handleToggle = (type) => {
    setSelect({ ...initSelect, [type]: !select[type] });
  };

  const handleSignUp = () => {
    if (toggleCheckTerm.first === false || toggleCheckTerm.second === false) {
      return alert('약관에 모두 동의하셔야 합니다.');
    }
    if (signUpForm.password !== signUpForm.passwordConfirm) {
      return alert('비물번호가 일치하지 않습니다.');
    }
    if (Object.values(signUpForm).includes('')) {
      return alert('모든 항목을 입력/선택 해주세요.');
    }
    return signUpApi(JSON.stringify(signUpForm))
      .then((response) => {
        const loginForm = {
          email: response.data.email,
          password: signUpForm.password,
        };
        loginApi(JSON.stringify(loginForm))
          .then((res) => {
            const email = JSON.stringify(res.data.email).replace(/\"/g, '');
            const name = JSON.stringify(res.data.name).replace(/\"/g, '');
            dispatch(setLogin({ email, name }));
            history.push('/welcome');
          })
          .catch(() => {
            alert('로그인 실패');
          });
      })
      .catch((err) => {
        // TODO: 이부분 좀 더 좋은 방법으로 처리할 수 있도록 하기
        let errors = '';
        err.response.data.errors.forEach((val) => {
          errors += `${val.reason}\n`;
        });
        alert(errors);
      });
  };

  return (
    <Wrapper ratio={ratio > 1.675}>
      {authSelector.isLogin && <Redirect to="/self" />}
      <WrapContent>
        <Logo src={witherviewLogo} alt="logo" />
        <WrapSubTitle>
          위더뷰와 함께 화상 면접 연습을 진행해보세요.
        </WrapSubTitle>
        <WrapBox>
          <WrapContianer>
            <Wraping>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>이름</WrapText>
                  <A.InputBar
                    autoFocus={ratio > 0.65}
                    value={signUpForm.name}
                    placeholder="이름을 입력해주세요."
                    onChange={handleInput}
                    name="name"
                  />
                </WrapInput>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>이메일주소</WrapText>
                  <A.InputBar
                    value={signUpForm.email}
                    placeholder="이메일 주소를 입력해주세요."
                    onChange={handleInput}
                    name="email"
                  />
                </WrapInput>
              </WrapUpperContainer>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>비밀번호</WrapText>
                  <A.InputBar
                    autoFocus={ratio > 0.65}
                    value={signUpForm.password}
                    placeholder="비밀번호를 입력해주세요."
                    onChange={handleInput}
                    name="password"
                    type="password"
                  />
                </WrapInput>
                {/* TODO: 지역번호 선택하는 부분 추가 */}
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>비밀번호 확인</WrapText>
                  <A.InputBar
                    value={signUpForm.passwordConfirm}
                    placeholder="비밀번호를 한번 더 입력해주세요."
                    onChange={handleInput}
                    name="passwordConfirm"
                    type="password"
                  />
                </WrapInput>
              </WrapUpperContainer>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>관심 산업_Main</WrapText>
                  <SelectList>
                    <Select
                      onClick={() => handleToggle('mainIndustry')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{mainIndustry}</SelectText>
                      <A.Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.mainIndustry && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {industryList.map((val) => (
                            <SelectItem
                              onClick={() => handleSelect(
                                setMainIndustry,
                                val,
                                'mainIndustry',
                              )}
                            >
                              <SelectText>{val}</SelectText>
                            </SelectItem>
                          ))}
                        </SelectItemList>
                      </SelectItemListWrapper>
                    )}
                  </SelectList>
                </WrapInput>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>관심 산업_Sub</WrapText>
                  <SelectList>
                    <Select
                      onClick={() => handleToggle('subIndustry')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{subIndustry}</SelectText>
                      <A.Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.subIndustry && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {industryList.map((val) => (
                            <SelectItem
                              onClick={() => handleSelect(setSubIndustry, val, 'subIndustry')}
                            >
                              <SelectText>{val}</SelectText>
                            </SelectItem>
                          ))}
                        </SelectItemList>
                      </SelectItemListWrapper>
                    )}
                  </SelectList>
                </WrapInput>
              </WrapUpperContainer>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>관심 직무_Main</WrapText>
                  <SelectList>
                    <Select
                      onClick={() => handleToggle('mainJob')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{mainJob}</SelectText>
                      <A.Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.mainJob && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {jobList.map((val) => (
                            <SelectItem
                              onClick={() => handleSelect(setMainJob, val, 'mainJob')}
                            >
                              <SelectText>{val}</SelectText>
                            </SelectItem>
                          ))}
                        </SelectItemList>
                      </SelectItemListWrapper>
                    )}
                  </SelectList>
                </WrapInput>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>관심 직무_Sub</WrapText>
                  <SelectList>
                    <Select
                      onClick={() => handleToggle('subJob')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{subJob}</SelectText>
                      <A.Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.subJob && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {jobList.map((val) => (
                            <SelectItem
                              onClick={() => handleSelect(setSubJob, val, 'subJob')}
                            >
                              <SelectText>{val}</SelectText>
                            </SelectItem>
                          ))}
                        </SelectItemList>
                      </SelectItemListWrapper>
                    )}
                  </SelectList>
                </WrapInput>
              </WrapUpperContainer>
            </Wraping>

            <WrapMiddleContainer ratio={ratio > 1.675}>
              <WrapMiddlePart>
                {/* TODO: Add function */}
                <A.CheckBox
                  func={() => setToggleCheckTerm({
                    ...toggleCheckTerm,
                    first: !toggleCheckTerm.first,
                  })}
                />
                <WrapMiddleText ratio={ratio > 1}>
                  {/* TODO: 병헌님이 작업해주시면 추가 */}
                  <ClickableSelectText>이용약관</ClickableSelectText>
                  에 모두
                  동의합니다.
                </WrapMiddleText>
              </WrapMiddlePart>
              <WrapMiddlePart>
                {/* TODO: Add function */}
                <A.CheckBox
                  func={() => setToggleCheckTerm({
                    ...toggleCheckTerm,
                    second: !toggleCheckTerm.second,
                  })}
                />
                <WrapMiddleText ratio={ratio > 1}>
                  {/* TODO: 병헌님이 작업해주시면 추가 */}
                  <ClickableSelectText>개인정보처리방침</ClickableSelectText>
                  에
                  모두 동의합니다.
                </WrapMiddleText>
              </WrapMiddlePart>
            </WrapMiddleContainer>
          </WrapContianer>
          <WrapButton>
            {/* TODO: 회원가입 로직 추기 */}
            <A.Button theme="blue" text="회원가입" func={() => handleSignUp()} />
          </WrapButton>
        </WrapBox>
        <WrapBottomContainer>
          <WrapBottomText>
            CopyrightⓒWITHERVIEW All Rights Reserved.
          </WrapBottomText>
        </WrapBottomContainer>
      </WrapContent>
    </Wrapper>
  );
}

SignUpPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
};
