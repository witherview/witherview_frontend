import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeModal } from '@store/Modal/modal';
import A from '@atoms';
import M from '@molecules';
import { postSelectedIndustriesApi } from '@repository/groupRepository';
import { MODALS } from '@utils/constant';

const ModalContainer = styled.div`
  width: 40vh;
  min-height: 39.5vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5.2vh;
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
  margin-top: 5.5vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-bottom: 5.5vh;
  ${({ theme }) => theme.button}
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 29.6vh;
`;

const Select = styled.div`
  display: flex;
  align-items: center;
  width: 29.6vh;
  height: 6vh;
  box-sizing: border-box;
  margin-top: 1.6vh;
  border-radius: 1vh;
  border: solid 0.1vh #9e9e9e;
  background-color: #ffffff;
`;

const SelectItemListWrapper = styled.div`
  position: absolute;
  width: 29.6vh;
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
  width: 23vh;
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

const TagWrapper = styled.div`
  margin-top: 2.5vh;
  margin-bottom: 6vh;
`;

const initSelect = {
  industry: false,
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

export default function IndustrySelectModal({ func, initialIndustries }) {
  const dispatch = useDispatch();
  const [industry, setIndustry] = useState('산업을 선택해주세요.');
  const [select, setSelect] = useState(initSelect);
  const [industries, setIndustries] = useState([...initialIndustries]);

  const handleSelect = (set, value, type) => {
    set(value);
    setSelect({ ...select, [type]: !select[type] });
    if (industries.length < 2 && !industries.includes(value))
      setIndustries([...industries, value]);
    else {
      // TODO:예외처리
    }
  };

  const handleToggle = (type) => {
    setSelect({ [type]: !select[type] });
  };

  const saveSelectedIndustry = () => {
    if (industryList.indexOf(industry) === -1) {
      return alert('입력값을 확인해 주세요.');
    }
    try {
      postSelectedIndustriesApi({
        industries,
      });
      func();
      dispatch(removeModal({ modalName: MODALS.INDUSTRY_SELECT_MODAL }));
    } catch (error) {
      console.error(error);
      alert(error);
    }
    return null;
  };

  const removeSelectedIndustry = (value) => {
    industries.splice(industries.indexOf(value), 1);
    setIndustries([...industries]);
  };

  const handleCancel = () => {
    dispatch(removeModal({ modalName: MODALS.INDUSTRY_SELECT_MODAL }));
  };

  const industryRef = useRef();
  const handleClickOutside = ({ target }) => {
    if (!industryRef.current.contains(target)) {
      setSelect(initSelect);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <ModalContainer>
        <Wrapper>
          <InputText>산업</InputText>
          <SelectList ref={industryRef}>
            <Select onClick={() => handleToggle('industry')}>
              <SelectText>{industry}</SelectText>
              <A.Icon type="arrow_down_blue" alt="" />
            </Select>
            {select.industry && (
              <SelectItemListWrapper>
                <SelectItemList>
                  {industryList.map((val, key) => (
                    <SelectItem key={`${key}item`}>
                      <SelectText
                        onClick={() =>
                          handleSelect(setIndustry, val, 'industry')
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
          <TagWrapper>
            {industries.map((value, key) => (
              <M.Tag
                key={`${key}tag`}
                closeTagText={value}
                style={{ margin: '0 1vh 1vh 0' }}
                func={() => removeSelectedIndustry(value)}
              />
            ))}
          </TagWrapper>
          <ButtonWrapper>
            <A.Button text="저장" theme="blue" func={saveSelectedIndustry} />
            <div style={{ width: '20px' }} />
            <A.Button text="취소" theme="gray" func={handleCancel} />
          </ButtonWrapper>
        </Wrapper>
      </ModalContainer>
    </>
  );
}

IndustrySelectModal.propTypes = {
  func: PropTypes.func,
  initialIndustries: PropTypes.array,
};

IndustrySelectModal.defaultProp = {
  func: () => {},
  initialIndustries: [],
};
