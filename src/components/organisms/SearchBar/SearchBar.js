import React, { useState } from 'react';
import styled from 'styled-components';

import A from '@atoms';
import M from '@molecules';

const SearchWrapper = styled.div`
  position: relative;

  ${({ theme: { flexRow } }) => flexRow()}

  width: 108vh;
  height: 7.3vh;

  border-radius: 2vh;
  box-shadow: 0 0.6vh 1.2vh 0 rgba(30, 30, 215, 0.04);
  border: 0.2vh solid
    ${({
      theme: {
        colors: { cornflower },
      },
    }) => cornflower};
`;

const IconWrapper = styled.div`
  height: 3.2vh;
  margin-left: 4.7vh;

  > i {
    margin: 0;
  }
`;

const Input = styled.input`
  width: 65vh;
  border: none;
  margin-left: 2vh;
  font-size: 2vh;
  color: #3d3d3d;
`;

const SearchButton = styled.div`
  ${({ theme: { flexCol } }) => flexCol()};

  width: 12.4vh;
  height: 7.3vh;

  background-color: ${({
    theme: {
      colors: { cornflower },
    },
  }) => cornflower};

  border-top-right-radius: 1.8vh;
  border-bottom-right-radius: 1.8vh;

  font-size: 2vh;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

const SelectBox = styled.div`
  ${({ theme: { flexRow } }) => flexRow('space-between')}

  width: 24vh;
  height: 3vh;

  ${({ toggle }) => toggle && 'z-index: 10;'}

  border-left: 1px solid
    ${({
    theme: {
      colors: { grey1 },
    },
    toggle,
  }) => (!toggle ? grey1 : 'transparent')};

  padding: 0 2.2vh;

  color: ${({
    theme: {
      colors: { cornflower },
    },
    toggle,
  }) => toggle && cornflower};

  > i {
    ${({ toggle }) =>
      toggle ? 'transform: rotate(180deg);' : 'filter: brightness(0%);'}
  }
`;

const SelectText = styled.div`
  font-family: AppleSDGothicNeoM00;
  font-size: 2vh;

  text-align: left;
`;

export default function SearchBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <SearchWrapper>
      {toggle && <M.SearchDropDown setToggle={setToggle} />}
      <IconWrapper>
        <A.Icon type="search" alt="search" />
      </IconWrapper>
      <Input placeholder="스터디방 검색" />
      <SelectBox toggle={toggle} onClick={() => setToggle(!toggle)}>
        <SelectText>직무 / 산업</SelectText>
        <A.Icon type="arrow_down_blue" alt="" />
      </SelectBox>
      <SearchButton>검색</SearchButton>
    </SearchWrapper>
  );
}
