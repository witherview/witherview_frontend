import React, { useCallback, useRef } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
	width: 50%;
  margin-top: 100px;
	max-width: 500px;
`;

const Input = styled.input.attrs({
  type: 'range'
})`
  position: absolute;
	pointer-events: none;
	-webkit-appearance: none;
	z-index: 2;
	height: 10px;
	width: 100%;
	opacity: 0;
  &::-webkit-slider-thumb {
    pointer-events: all;
	  width: 30px;
	  height: 30px;
	  border-radius: 0;
	  border: 0 none;
	  -webkit-appearance: none;
  }
`;

const Slider = styled.div`
  position: relative;
	z-index: 1;
	height: 8px;
	margin: 0 15px;
  border-radius: 50px;
`;

const Track = styled.div`
  .slider > & {
    position: absolute;
	  z-index: 1;
	  left: 0;
	  right: 0;
	  top: 0;
	  bottom: 0;
	  border-radius: 5px;
	  background-color: #d3d3d3;
  }
`;

const Range = styled.div`
  .slider > & {
    position: absolute;
	  z-index: 2;
	  left: 25%;
	  right: 25%;
	  top: 0;
	  bottom: 0;
	  border-radius: 5px;
	  background-image: linear-gradient(to right, #2323de 1%, #4848da 91%);
  }
`;

const Thumb = styled.div`
  .slider > & {
    position: absolute;
	  z-index: 3;
	  width: 20px;
	  height: 20px;
    background-image: linear-gradient(to bottom, #2323de -42%, #5f5fd9);
    border: 6px solid white;
	  border-radius: 50%;
	  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
	  transition: box-shadow .3s ease-in-out;
  }

  .slider > &.left {
    left: 25%;
	  transform: translate(-15px, -12px);
  }

  .slider > &.right {
    right: 25%;
	  transform: translate(15px, -12px);
  }
`;

export default function RangeBar({
  min, max, value,
}) {
  const inputLeft = useRef();
  const inputRight = useRef();
  const thumbLeft = useRef();
  const thumbRight = useRef();
  const range = useRef();
  const setLeftValue = () => {
    let inputLeftRange = inputLeft.current,
		min = parseInt(inputLeftRange.min),
		max = parseInt(inputLeftRange.max);

	  inputLeftRange.value = Math.min(parseInt(inputLeftRange.value), parseInt(inputRight.current.value) - 1);

	  let percent = ((inputLeftRange.value - min) / (max - min)) * 100;

	  thumbLeft.current.style.left = percent + "%";
	  range.current.style.left = percent + "%";
  };

  const setRightValue = () => {
    let inputRightRange = inputRight.current,
		min = parseInt(inputRightRange.min),
    max = parseInt(inputRightRange.max);

	  inputRightRange.value = Math.max(parseInt(inputRightRange.value), parseInt(inputLeft.current.value) + 1);

	  let percent = ((inputRightRange.value - min) / (max - min)) * 100;

	  thumbRight.current.style.right = (100 - percent) + "%";
	  range.current.style.right = (100 - percent) + "%";
  };

  return (
    <Wrapper>
      <Input ref={inputLeft} min={min} max={max} value={value[0]} onChange={setLeftValue} />
      <Input ref={inputRight} min={min} max={max} value={value[1]} onChange={setRightValue} />
      <Slider className="slider">
        <Track />
        <Range ref={range} />
        <Thumb ref={thumbLeft} className="left" />
        <Thumb ref={thumbRight} className="right" />
      </Slider>
    </Wrapper>
  )
}

RangeBar.propTypes = {
  className: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.array,
};

RangeBar.defaultProps = {
  className: '',
  min: 0,
  max: 100,
  value: [25, 75],
};
