import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.div`
  display: flex;
  flex-flow: column nowrap;
  
  input {
    height: 50px;
    width: ${({ width }) => width}px;
    border: none;
    border-bottom: 2px solid #9e9e9e;
    font-size: 20px;
    font-family: AppleSDGothicNeoM00;
    line-height: 1.7;
    text-align: left;
    color: #9e9e9e;
    &:focus {
      outline: none;
      border-bottom: 2px solid #5f5fd9;
      color: #3d3d3d;
    }
  }
  
  .errorMessage {
    margin-top: 8px;
    color: red;
  }
`;

export default function InputBar({
  disabled,
  autoFocus,
  isCheckImmediatelyRule,
  // isValid,
  value,
  className,
  placeholder,
  name,
  type,
  width,
  rules,
  onChange,
  submit,
}) {
  const [errorMessage, setErrorMessage] = useState();
  const [isValid, setIsValid] = useState();

  const validate = (val) => {
    setErrorMessage(null);

    rules.every((rule) => {
      if (typeof rule(val) === 'string') {
        setErrorMessage(rule(val));
        setIsValid(false);
      } else setIsValid(true);

      return !!errorMessage || errorMessage === 0;
    });
  };
  const validateSubmit = () => {
    console.log('execute before');
    // e.preventDefault();
    if (rules.length > 0 && !rules.every((rule) => typeof rule(value) === 'boolean' && rule(value))) return;
    console.log('rule is ok!');
    submit();
  };
  useEffect(() => {
    if (isCheckImmediatelyRule) validate(value);
  }, [isCheckImmediatelyRule]);
  useEffect(() => {
    if (isValid) validateSubmit();
  }, [isValid]);
  return (
    <Input
      width={width}
    >
      <input
        disabled={disabled}
        value={value}
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoFocus={autoFocus}
        onInput={(e) => validate(e.target.value)}
      />
      {/* <input type="submit" hidden onSubmit={} /> */}
      {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </Input>
  );
}

InputBar.propTypes = {
  disabled: PropTypes.bool,
  autoFocus: PropTypes.bool,
  isCheckImmediatelyRule: PropTypes.bool,
  // isValid: PropTypes.bool,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.number,
  rules: PropTypes.array,
  // ts 컨버팅 이후 [() => {} || ''] 형태로 정의 변경 필요
  onChange: PropTypes.func,
  submit: PropTypes.func,
};

InputBar.defaultProps = {
  disabled: false,
  autoFocus: false,
  isCheckImmediatelyRule: false,
  // isValid: false,
  value: '',
  className: '',
  placeholder: '',
  name: '',
  type: '',
  width: 553,
  rules: [],
  onChange: () => {},
  submit: () => {},
};
