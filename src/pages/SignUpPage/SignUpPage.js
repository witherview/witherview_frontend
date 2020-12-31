/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import witherviewLogo from '@assets/images/witherview_logo_title_dark.png';
import { get } from '@utils/snippet';

import InputBar from '@components/InputBar';
import Checkbox from '@components/Checkbox';
import Button from '@components/Button';
import Icon from '@components/IconTemp';

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
`;

const WrapBox = styled.div`
  width: 118.14vh;
  max-width: 80vw;
  height: auto;
  background-color: white;
  box-shadow: 0 6px 12px 0 rgba(4, 4, 161, 0.1);
  border: solid 1px #f6f6f6;
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
`;

const WrapButton = styled.div`
  margin-bottom: 6vh;
  > div {
    height: 6vh;
    width: 29.6vh;
    max-width: 60vw;
    > p {
      font-size: 1.9vh;
    }
  }
`;

const WrapBottomContainer = styled.div`
  padding-top: 4vh;
`;

const WrapBottomText = styled.span`
  font-family: AppleSDGothicNeoM00;
  font-size: 1.9vh;
  color: #9e9e9e;
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
  > i {
    margin-right: 2.2vh;
  }
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
  z-index: 10;
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
  width: 39vh;
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

const EMPTY_FORM = {
  name: '',
  email: '',
  password: '',
  phone: '',
  industryMain: '',
  industrySub: '',
  jobMain: '',
  jobSub: '',
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

export default function SignUpPage() {
  const authSelector = useSelector(get('auth'));

  const { ratio } = useWindowSize();

  const [signUpForm, setSignUpForm] = useState(EMPTY_FORM);
  const [industryMain, setIndustryMain] = useState('산업을 선택해주세요.');
  const [industrySub, setIndustrySub] = useState('산업을 선택해주세요.');
  const [jobMain, setJobMain] = useState('직무를 선택해주세요.');
  const [jobSub, setJobSub] = useState('직무를 선택해주세요.');
  const [select, setSelect] = useState({
    industryMain: false,
    industrySub: false,
    jobMain: false,
    jobSub: false,
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
    setSelect({ ...select, [type]: !select[type] });
  };

  const handleToggle = (type) => {
    setSelect({ ...select, [type]: !select[type] });
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
                  <InputBar
                    autoFocus={ratio > 0.65}
                    value={signUpForm.name}
                    placeholder="이름을 입력해주세요."
                    onChange={handleInput}
                    name="name"
                  />
                </WrapInput>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>이메일주소</WrapText>
                  <InputBar
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
                  <InputBar
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
                  <WrapText>핸드폰 번호</WrapText>
                  <InputBar
                    value={signUpForm.phone}
                    placeholder="핸드폰 번호를 입력해주세요."
                    onChange={handleInput}
                    name="phone"
                  />
                </WrapInput>
              </WrapUpperContainer>
              <WrapUpperContainer>
                <WrapInput ratio={ratio > 1.675}>
                  <WrapText>관심 산업_Main</WrapText>
                  <SelectList>
                    <Select
                      onClick={() => handleToggle('industryMain')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{industryMain}</SelectText>
                      <Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.industryMain && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {industryList.map((val) => (
                            <SelectItem>
                              <SelectText
                                onClick={() => handleSelect(
                                  setIndustryMain,
                                  val,
                                  'industryMain',
                                )}
                              >
                                {val}
                              </SelectText>
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
                      onClick={() => handleToggle('industrySub')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{industrySub}</SelectText>
                      <Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.industrySub && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {industryList.map((val) => (
                            <SelectItem>
                              <SelectText
                                onClick={() => handleSelect(
                                  setIndustrySub,
                                  val,
                                  'industrySub',
                                )}
                              >
                                {val}
                              </SelectText>
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
                      onClick={() => handleToggle('jobMain')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{jobMain}</SelectText>
                      <Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.jobMain && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {jobList.map((val) => (
                            <SelectItem>
                              <SelectText
                                onClick={() => handleSelect(setJobMain, val, 'jobMain')}
                              >
                                {val}
                              </SelectText>
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
                      onClick={() => handleToggle('jobSub')}
                      ratio={ratio > 1.675}
                    >
                      <SelectText>{jobSub}</SelectText>
                      <Icon type="arrow_down_blue" alt="" />
                    </Select>
                    {select.jobSub && (
                      <SelectItemListWrapper ratio={ratio > 1.675}>
                        <SelectItemList>
                          {jobList.map((val) => (
                            <SelectItem>
                              <SelectText
                                onClick={() => handleSelect(setJobSub, val, 'jobSub')}
                              >
                                {val}
                              </SelectText>
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
                <Checkbox />
                <WrapMiddleText ratio={ratio > 1}>
                  이용약관에 모두 동의합니다.
                </WrapMiddleText>
              </WrapMiddlePart>
              <WrapMiddlePart>
                {/* TODO: Add function */}
                <Checkbox />
                <WrapMiddleText ratio={ratio > 1}>
                  개인정보처리방침에 모두 동의합니다.
                </WrapMiddleText>
              </WrapMiddlePart>
            </WrapMiddleContainer>
          </WrapContianer>
          <WrapButton>
            {/* TODO: 회원가입 로직 추기 */}
            <Button theme="blue" text="회원가입" />
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
