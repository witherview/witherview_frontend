import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { removeModal } from '@store/Modal/modal';
import A from '@atoms';
import { postGroupRoomApi } from '@repository/groupRepository';
import { MODALS } from '@utils/constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 74.2vh;
  height: 87.2vh;
`;

const InputWrapper = styled.div`
  width: 60vh;
  margin-top: ${({ first }) => (first ? '6vh' : '4.5vh')};
  ${({ theme }) => theme.input}
`;

const InputText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 2.4vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
  text-align: left;
  color: #6e6eff;
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 60vh;
  margin-top: 3vh;
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vh;
  margin-top: 3vh;
  > div {
    margin-bottom: 1vh;
    > div {
      width: 57vh;
      > div {
        width: 51vh;
      }
    }
  }
`;

const LeftWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const WrapButton = styled.div`
  margin-top: 4vh;
  ${({ theme }) => theme.button}
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.5vh;
  cursor: pointer;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  width: 27vh;
  height: 6vh;
  box-sizing: border-box;
  margin-top: 1.6vh;
  border-radius: 1vh;
  border: solid 0.1vh #9e9e9e;
  background-color: #ffffff;
`;

const SelectItemListWrapper = styled.div`
  position: absolute;
  width: 27vh;
  height: 25vh;
  transform: translateY(5.6vh);
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 1vh;
  box-shadow: 0 1.2vh 3.6vh 0 rgba(4, 4, 161, 0.15);
  background-color: #ffffff;
  z-index: 2;
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
  width: 21vh;
  margin-left: 2.2vh;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.8vh;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #9e9e9e;
`;

const PickerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 27vh;
  height: 6vh;
  box-sizing: border-box;
  margin-top: 1.6vh;
  border-radius: 1vh;
  border: solid 0.1vh #9e9e9e;
  background-color: #ffffff;
  > div > div > input {
    font-size: 2vh;
  }
`;

const useStyles = makeStyles(() => ({
  textField: {
    width: '23vh',
    marginLeft: '2.1vh',
    color: '#9e9e9e',
  },
}));

const initSelect = {
  industry: false,
  job: false,
  category: false,
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

const categoryList = [
  '금융/은행',
  'IT',
  '서비스/교육',
  '보건/의약/바이오',
  '제조',
  '건설',
  '예술/문화',
  '기타',
];

export default function StudyStartModal({ func }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [industry, setIndustry] = useState('산업을 선택해주세요.');
  const [job, setJob] = useState('직무를 선택해주세요.');
  const [category, setCategory] = useState('카테고리를 선택해주세요.');
  const [select, setSelect] = useState(initSelect);

  const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [time, setTime] = useState(moment(new Date()).format('HH:mm:ss'));

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSelect = (set, value, type) => {
    set(value);
    setSelect({ ...select, [type]: !select[type] });
  };

  const handleToggle = (type) => {
    setSelect({ [type]: !select[type] });
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleMakeStudy = async () => {
    if (
      title === ''
      || description === ''
      || jobList.indexOf(job) === -1
      || industryList.indexOf(industry) === -1
    ) {
      return alert('입력값을 확인해 주세요.');
    }
    try {
      await postGroupRoomApi({
        title,
        description,
        job,
        industry,
        date,
        time,
        category,
      });
      func();
      dispatch(removeModal({ modalName: MODALS.STUDY_MAKE_MODAL }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
    return null;
  };

  const categoryRef = useRef();
  const industryRef = useRef();
  const jobRef = useRef();

  const handleClickOutside = ({ target }) => {
    if (
      !industryRef.current.contains(target)
      && !jobRef.current.contains(target)
      && !categoryRef.current.contains(target)
    ) {
      setSelect(initSelect);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <Wrapper>
        <InputWrapper first>
          <InputText>방 제목</InputText>
          <A.InputBar
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={(e) => handleInputChange(e, setTitle)}
          />
        </InputWrapper>
        <InputWrapper>
          <InputText>방 설명</InputText>
          <A.InputBar
            placeholder="설명을 입력해주세요."
            value={description}
            onChange={(e) => handleInputChange(e, setDescription)}
          />
        </InputWrapper>
        <UpperWrapper>
          <InputText>카테고리</InputText>
          <SelectList ref={categoryRef}>
            <Select onClick={() => handleToggle('category')}>
              <SelectText>{category}</SelectText>
              <A.Icon type="arrow_down_blue" alt="" />
            </Select>
            {select.category && (
              <SelectItemListWrapper>
                <SelectItemList>
                  {categoryList.map((val) => (
                    <SelectItem>
                      <SelectText
                        onClick={() => handleSelect(setCategory, val, 'category')
                        }
                      >
                        {val}
                      </SelectText>
                    </SelectItem>
                  ))}
                </SelectItemList>
              </SelectItemListWrapper>
            )}
          </SelectList>
        </UpperWrapper>
        <SelectWrapper>
          <LeftWrapper>
            <InputText>산업</InputText>
            <SelectList ref={industryRef}>
              <Select onClick={() => handleToggle('industry')}>
                <SelectText>{industry}</SelectText>
                <A.Icon type="arrow_down_blue" alt="" />
              </Select>
              {select.industry && (
                <SelectItemListWrapper>
                  <SelectItemList>
                    {industryList.map((val) => (
                      <SelectItem>
                        <SelectText
                          onClick={() => handleSelect(setIndustry, val, 'industry')
                          }
                        >
                          {val}
                        </SelectText>
                      </SelectItem>
                    ))}
                  </SelectItemList>
                </SelectItemListWrapper>
              )}
            </SelectList>
            <InputText>진행 날짜</InputText>
            <PickerWrapper>
              {select.industry || (
                <TextField
                  id="date"
                  type="date"
                  value={date}
                  className={classes.textField}
                  onChange={handleChangeDate}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              )}
            </PickerWrapper>
          </LeftWrapper>
          <RightWrapper>
            <InputText>직무</InputText>
            <SelectList ref={jobRef}>
              <Select onClick={() => handleToggle('job')}>
                <SelectText>{job}</SelectText>
                <A.Icon type="arrow_down_blue" alt="" />
              </Select>
              {select.job && (
                <SelectItemListWrapper>
                  <SelectItemList>
                    {jobList.map((val) => (
                      <SelectItem>
                        <SelectText
                          onClick={() => handleSelect(setJob, val, 'job')}
                        >
                          {val}
                        </SelectText>
                      </SelectItem>
                    ))}
                  </SelectItemList>
                </SelectItemListWrapper>
              )}
            </SelectList>
            <InputText>진행 시간</InputText>
            <PickerWrapper>
              {select.job || (
                <TextField
                  id="time"
                  type="time"
                  value={time}
                  className={classes.textField}
                  onChange={handleChangeTime}
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
              )}
            </PickerWrapper>
          </RightWrapper>
        </SelectWrapper>
        <WrapButton>
          <A.Button text="방 개설" theme="blue" func={handleMakeStudy} />
        </WrapButton>
      </Wrapper>
    </>
  );
}

StudyStartModal.propTypes = {
  func: PropTypes.func,
};

StudyStartModal.defaultProp = {
  func: () => {},
};
