import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { hideModal } from '@store/Modal/modal';
import Icon from '@components/Icon';
import InputBar from '@components/InputBar';
import Button from '@components/Button';
import { postStudyApi } from '@repository/groupRepository';
import { MODALS } from '@utils/constant';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 742px;
  height: 872px;
`;

const InputWrapper = styled.div`
  width: 600px;
  margin-top: ${({ first }) => (first ? '100px' : '45px')};
`;

const InputText = styled.div`
  font-family: AppleSDGothicNeoB00;
  font-size: 24px;
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
    width: 600px;
    margin-top: 45px;
    
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
`;

const ButtonWrapper = styled.div`
  margin-top: 82px;
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  width: 270px;
  height: 60px;
  box-sizing: border-box;
  margin-top: 16px;
  border-radius: 10px;
  border: solid 1px #9e9e9e;
  background-color: #ffffff;
  z-index: 1000;
`;

const SelectItemListWrapper = styled.div`
  position: absolute;
  width: 270px;
  height: 250px;
  transform:translateY(56px);
  overflow-y:auto; 
  overflow-x:hidden; 
  border-radius: 10px;
  box-shadow: 0 12px 36px 0 rgba(4, 4, 161, 0.15);
  background-color: #ffffff;
`;

const SelectItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow:visible;
  z-index: 10;
`;

const SelectItem = styled.div`
  display: flex;
  width: 100%;
  height: 52px;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:first-child {
    margin-top: 20px;
  }
  &:hover {
    background-color: #eef0ff;
    &>div {
      color: #0c0c59;
    }
  }
`;

const SelectText = styled.div`
  width: 210px;
  margin-left: 22px;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
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
  width: 270px;
  height: 60px;
  box-sizing: border-box;
  margin-top: 16px;
  border-radius: 10px;
  border: solid 1px #9e9e9e;
  background-color: #ffffff;
`;

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '230px',
    marginLeft: '21px',
    color: '#9e9e9e',
  },
}));

export default function StudyStartModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [industry, setIndustry] = useState('산업을 선택해주세요.');
  const [job, setJob] = useState('직무를 선택해주세요.');
  const [select, setSelect] = useState({
    industry: false,
    job: false,
  });
  const [date, setDate] = useState(
    moment(new Date()).format('YYYY-MM-DD'),
  );

  const [time, setTime] = useState(
    moment(new Date()).format('HH:mm'),
  );
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

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleSelect = (set, value, type) => {
    set(value);
    setSelect({ ...select, [type]: !select[type] });
  };

  const handleToggle = (type) => {
    setSelect({ ...select, [type]: !select[type] });
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleMakeStudy = () => {
    if(title === '' || description === '' || jobList.indexOf(job) === -1 || industryList.indexOf(industry) === -1) {
      alert("입력값을 확인해 주세요.");
      return;
    }
    postStudyApi({
      title,
      description,
      job,
      industry,
      date,
      time
    }).then(()=>{
      dispatch(hideModal(MODALS.STUDY_MAKE_MODAL));
    })
  }

  return (
    <>
      <Wrapper>
        <InputWrapper first>
          <InputText>
            방 제목
          </InputText>
          <InputBar placeholder="제목을 입력해주세요." value={title} onChange={(e) => handleInputChange(e, setTitle)} />
        </InputWrapper>
        <InputWrapper>
          <InputText>
            방 설명
          </InputText>
          <InputBar placeholder="설명을 입력해주세요." value={description} onChange={(e) => handleInputChange(e, setDescription)} />
        </InputWrapper>
        <SelectWrapper>
          <LeftWrapper>
            <InputText>
              산업
            </InputText>
            <SelectList>
              <Select onClick={() => handleToggle('industry')}>
                <SelectText>
                  {industry}
                </SelectText>
                <Icon type="arrow_down_blue" alt="" />
              </Select>
              {select.industry && (
              <SelectItemListWrapper>
                <SelectItemList>
                  {industryList.map((val) => (
                    <SelectItem>
                      <SelectText onClick={() => handleSelect(setIndustry, val, 'industry')}>
                        {val}
                      </SelectText>
                    </SelectItem>
                  ))}
                </SelectItemList>
              </SelectItemListWrapper>
              )}
            </SelectList>
            <InputText>
              진행 날짜
            </InputText>
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
            <InputText>
              직무
            </InputText>
            <SelectList>
              <Select onClick={() => handleToggle('job')}>
                <SelectText>
                  {job}
                </SelectText>
                <Icon type="arrow_down_blue" alt="" />
              </Select>
              {select.job && (
              <SelectItemListWrapper>
                <SelectItemList>
                  {jobList.map((val) => (
                    <SelectItem>
                      <SelectText onClick={() => handleSelect(setJob, val, 'job')}>
                        {val}
                      </SelectText>
                    </SelectItem>
                  ))}
                </SelectItemList>
              </SelectItemListWrapper>
              )}
            </SelectList>
            <InputText>
              진행 시간
            </InputText>
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
        <ButtonWrapper>
          <Button text="방 개설" theme="blue" func={handleMakeStudy} />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
