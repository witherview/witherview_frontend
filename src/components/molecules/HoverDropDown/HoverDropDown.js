import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapMenu = styled.div`
  list-style-type: none;
  position: relative;
  text-align: center;
  z-index: 101;
  ${({ isOpen }) =>
    isOpen &&
    `
			fill: #0b3895;
			transform: scale(1);
		`}
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const List = styled.ul`
  width: 14.3vh;
  padding: 1.85vh 0vh 1.85vh 0vh;
  position: absolute;
  top: -1vh;
  right: -2vh;
  z-index: 101;
  background-color: #fff;
  transition: 0.25s ease all;
  transform: scale(0);
  transform-origin: 0 1;
  border-radius: 1vh;
  box-shadow: 0 1.2vh 2.4vh 0 rgba(4, 4, 161, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transform: ${({ isOpen }) => isOpen && 'scale(1)'};
`;

const Item = styled.li`
  width: 8.7vh;
  padding-top: 1.25vh;
  padding-bottom: 1.25vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Each = styled.div`
  user-select: none;
  font-family: AppleSDGothicNeoM00;
  font-size: 1.5vh;
  color: #9e9e9e;
  &:hover {
    color: #f2886b;
    text-decoration: none;
  }
  cursor: pointer;
`;
export default function HoverDropDown({ children, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (set) => setIsOpen(set);

  return (
    <WrapMenu
      isOpen={isOpen}
      onMouseOver={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
    >
      {children}
      <List isOpen={isOpen}>
        {items?.map(({ id, title, func }) => (
          <Item key={id} onClick={func}>
            <Each>{title}</Each>
          </Item>
        ))}
      </List>
    </WrapMenu>
  );
}

HoverDropDown.propTypes = {
  children: PropTypes.element,
  items: PropTypes.array,
};
