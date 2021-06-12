import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapDropDownTop = styled.div`
  position: absolute;
  top: -0.2vh;
  right: 12vh;

  z-index: 2;

  width: 25.5vh;
  height: 7.3vh;

  box-shadow: 0 1.2vh 3.6vh 0 rgba(4, 4, 161, 0.15);
  background-color: white;
  border-top-left-radius: 2vh;
  border-top-right-radius: 2vh;
`;

const WrapDropDownBottom = styled.div`
  position: absolute;

  top: 7.1vh;
  width: 108vh;
  height: 50vh;
  box-shadow: 0 1.2vh 3.6vh 0 rgba(4, 4, 161, 0.15);

  border-radius: 2vh;
`;

const Container = styled(WrapDropDownBottom)`
  box-shadow: none;

  background-color: white;
  z-index: 10;
`;

export default function SearchDropDown({ setToggle }) {
  return (
    <>
      <WrapDropDownTop onClick={() => setToggle(false)} />
      <WrapDropDownBottom />
      <Container />
    </>
  );
}

SearchDropDown.propTypes = {
  setToggle: PropTypes.func,
};
