import React, { useState } from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import profileExample from '@assets/images/profile_example.png';
import { setLogout } from '@store/Auth/auth';

import Icon from '@components/Icon';
import ProfileIcon from '@components/ProfileIcon';

const Wrapper = styled.div`
  @media only screen and (max-width: 480px) {
    display: none;
  }

  position: absolute;
  top: 53px;
  right: 105px;
  height: 73px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WrapMenu = styled.div`
  list-style-type: none;
  position: relative;
  text-align: center;
  z-index: 101;
  ${({ isOpen }) => isOpen
    && `
    fill: #0b3895;
    transform: scale(1);
  `}
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Name = styled.div`
  font-family: AppleSDGothicNeoEB00;
  font-size: 20px;
  padding-left: 29px;
  padding-right: 10px;
  user-select: none;
  color: #3d3d3d;
`;

const List = styled.ul`
  width: 143px;
  padding: 18.5px 0px 18.5px 0px;
  position: absolute;
  top: 70px;
  right: 0px;
  z-index: 101;
  background-color: #fff;
  transition: 0.25s ease all;
  transform: scale(0);
  transform-origin: 0 1;
  border-radius: 10px;
  box-shadow: 0 12px 24px 0 rgba(4, 4, 161, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: ${({ isOpen }) => isOpen && 'scale(1)'};
`;

const Item = styled.li`
  width: 87px;
  padding-top: 12.5px;
  padding-bottom: 12.5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Each = styled.div`
  user-select: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 20px;
  color: #9e9e9e;
  &:hover {
    color: #f2886b;
    text-decoration: none;
  }
`;

export default function ProfileMenuContainer({ name, src }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = (set) => setIsOpen(set);

  return (
    <Wrapper>
      <WrapMenu
        isOpen={isOpen}
        onMouseOver={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
      >
        <ProfileIcon src={src} />
        <Name>{name || 'Unknown'}</Name>

        <Icon type="arrow_down_grey" alt="arrow_down_grey" />
        <List isOpen={isOpen}>
          <Item>
            <Each onClick={() => history.push('/mypage')}>마이페이지</Each>
          </Item>
          <Item>
            <Each onClick={() => dispatch(setLogout())}>로그아웃</Each>
          </Item>
        </List>
      </WrapMenu>
    </Wrapper>
  );
}

ProfileMenuContainer.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
};

ProfileMenuContainer.defaultProps = {
  name: '홍길동',
  src: profileExample,
};
