/* eslint-disable no-useless-escape */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import ReactRouterPropTypes from 'react-router-prop-types';

import { loginApi, registerApi } from '@repository/accountRepository';
import { setLogin } from '@store/Auth/auth';

import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';

import A from '@atoms';

import useWindowSize from '@hooks/useWindowSize';

const Wrapper = styled.div`
  height: ${({ ratio }) => (ratio ? '135vh' : '195vh')};
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
  ${({ theme: { input } }) => input};
  padding: 3vh 5.5vh 1.1vh 5.5vh;
  div > input {
    width: ${({ ratio }) => (ratio ? '45.8vh' : '60vw')};
  }
`;

const WrapMiddleContainer = styled.div`
  height: 12vh;
  width: ${({ ratio }) => (!ratio ? '60vw' : 'calc(100% - 12.44vh)')};
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
  phoneNumber: '01000000000',
};

const jobList = [
  '경영/사무',
  '마케팅/MD',
  '영업',
  'IT/인터넷',
  '연구개발/설계',
  '생산/품질',
  '디자인',
  '기타',
];

const industryList = [
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
  const [immediateValidations, setImmediateValidations] = useState(
    Array(6).fill(false),
  );

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

  const handleSignUp = async () => {
    setImmediateValidations(Array(6).fill(true));
    if (toggleCheckTerm.first === false || toggleCheckTerm.second === false) {
      return alert('약관에 모두 동의하셔야 합니다.');
    }
    if (signUpForm.password !== signUpForm.passwordConfirm) {
      return alert('비물번호가 일치하지 않습니다.');
    }
    if (Object.values(signUpForm).includes('')) {
      return alert('모든 항목을 입력/선택 해주세요.');
    }
    try {
      const {
        data: { email, name, phoneNumber },
      } = await registerApi(JSON.stringify(signUpForm));

      dispatch(
        setLogin({
          email,
          name,
          mainIndustry,
          mainJob,
          subIndustry,
          subJob,
          phoneNumber,
        }),
      );

      const loginForm = {
        email,
        password: signUpForm.password,
      };

      const {
        data: { access_token: accessToken },
      } = await loginApi(JSON.stringify(loginForm));

      sessionStorage.setItem('accessToken', accessToken);

      history.push('/welcome');
    } catch (error) {
      console.error(error);
      alert(error);
    }

    return null;
  };

  const industryMainRef = useRef();
  const industrySubRef = useRef();

  const jobMainRef = useRef();
  const jobSubRef = useRef();

  const handleClickOutside = ({ target }) => {
    if (
      !industryMainRef.current.contains(target) &&
      !industrySubRef.current.contains(target) &&
      !jobMainRef.current.contains(target) &&
      !jobSubRef.current.contains(target)
    ) {
      setSelect(initSelect);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <Wrapper ratio={ratio > 1.675}>
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
                  <A.Validation
                    value={signUpForm.name}
                    rules={[(v) => !!v || '이름을 입력해 주세요.']}
                    isCheckImmediatelyRule={immediateValidations[0]}
                  >
                    <A.InputBar
                      autoFocus={ratio > 0.65}
                      value={signUpForm.name}
                      placeholder="이름을 입력해주세요."
                      onChange={handleInput}
                      name="name"
                    />
                  </A.Validation>
                </WrapInput>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>이메일주소</WrapText>
                  <A.Validation
                    value={signUpForm.email}
                    rules={[(v) => !!v || '이메일 주소를 입력해 주세요.']}
                    isCheckImmediatelyRule={immediateValidations[1]}
                  >
                    <A.InputBar
                      value={signUpForm.email}
                      placeholder="이메일 주소를 입력해주세요."
                      onChange={handleInput}
                      name="email"
                    />
                  </A.Validation>
                </WrapInput>
              </WrapUpperContainer>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>비밀번호</WrapText>
                  <A.Validation
                    value={signUpForm.password}
                    rules={[(v) => !!v || '비밀번호를 입력해 주세요.']}
                    isCheckImmediatelyRule={immediateValidations[2]}
                  >
                    <A.InputBar
                      autoFocus={ratio > 0.65}
                      value={signUpForm.password}
                      placeholder="비밀번호를 입력해주세요."
                      onChange={handleInput}
                      name="password"
                      type="password"
                    />
                  </A.Validation>
                </WrapInput>
                {/* TODO: 지역번호 선택하는 부분 추가 */}
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>비밀번호 확인</WrapText>
                  <A.Validation
                    value={signUpForm.passwordConfirm}
                    rules={[(v) => !!v || '비밀번호를 입력해 주세요.']}
                    isCheckImmediatelyRule={immediateValidations[3]}
                  >
                    <A.InputBar
                      value={signUpForm.passwordConfirm}
                      placeholder="비밀번호를 한번 더 입력해주세요."
                      onChange={handleInput}
                      name="passwordConfirm"
                      type="password"
                    />
                  </A.Validation>
                </WrapInput>
              </WrapUpperContainer>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>관심 산업_Main</WrapText>
                  <SelectList ref={industryMainRef}>
                    <A.Validation
                      value={mainIndustry}
                      rules={[
                        (v) =>
                          v !== '산업을 선택해주세요.' ||
                          '관심 산업을 선택해 주세요.',
                      ]}
                      isCheckImmediatelyRule={immediateValidations[4]}
                    >
                      <Select
                        onClick={() => handleToggle('mainIndustry')}
                        ratio={ratio > 1.675}
                      >
                        <SelectText>{mainIndustry}</SelectText>
                        <A.Icon type="arrow_down_blue" alt="" />
                      </Select>
                    </A.Validation>
                    {select.mainIndustry && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {industryList.map((val) => (
                            <SelectItem
                              key={`main-industry-${val}`}
                              onClick={() =>
                                handleSelect(
                                  setMainIndustry,
                                  val,
                                  'mainIndustry',
                                )
                              }
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
                  <WrapText>관심 직무_Main</WrapText>
                  <SelectList ref={jobMainRef}>
                    <A.Validation
                      value={mainJob}
                      rules={[
                        (v) =>
                          v !== '직무를 선택해주세요.' ||
                          '관심 직무를 선택해 주세요.',
                      ]}
                      isCheckImmediatelyRule={immediateValidations[5]}
                    >
                      <Select
                        onClick={() => handleToggle('mainJob')}
                        ratio={ratio > 1.675}
                      >
                        <SelectText>{mainJob}</SelectText>
                        <A.Icon type="arrow_down_blue" alt="" />
                      </Select>
                    </A.Validation>
                    {select.mainJob && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {jobList.map((val) => (
                            <SelectItem
                              key={`main-job-${val}`}
                              onClick={() =>
                                handleSelect(setMainJob, val, 'mainJob')
                              }
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
                  <WrapText>관심 산업_Sub</WrapText>
                  <SelectList ref={industrySubRef}>
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
                              key={`sub-industry-${val}`}
                              onClick={() =>
                                handleSelect(setSubIndustry, val, 'subIndustry')
                              }
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
                  <SelectList ref={jobSubRef}>
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
                              key={`sub-job-${val}`}
                              onClick={() =>
                                handleSelect(setSubJob, val, 'subJob')
                              }
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
                  func={() =>
                    setToggleCheckTerm({
                      ...toggleCheckTerm,
                      first: !toggleCheckTerm.first,
                    })
                  }
                />
                <WrapMiddleText ratio={ratio > 1}>
                  {/* TODO: 병헌님이 작업해주시면 추가 */}
                  <ClickableSelectText>이용약관</ClickableSelectText>에 모두
                  동의합니다.
                </WrapMiddleText>
              </WrapMiddlePart>
              <WrapMiddlePart>
                {/* TODO: Add function */}
                <A.CheckBox
                  func={() =>
                    setToggleCheckTerm({
                      ...toggleCheckTerm,
                      second: !toggleCheckTerm.second,
                    })
                  }
                />
                <WrapMiddleText ratio={ratio > 1}>
                  {/* TODO: 병헌님이 작업해주시면 추가 */}
                  <ClickableSelectText>개인정보처리방침</ClickableSelectText>에
                  모두 동의합니다.
                </WrapMiddleText>
              </WrapMiddlePart>
            </WrapMiddleContainer>
          </WrapContianer>
          <WrapButton>
            {/* TODO: 회원가입 로직 추기 */}
            <A.Button
              theme="blue"
              text="회원가입"
              func={() => handleSignUp()}
            />
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
