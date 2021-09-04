import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .errorMessage {
    font-size: ${({ fontSize }) => fontSize};
    margin-top: 1vh;
    color: red;
  }
`;

export default function Validation({
  value,
  rules,
  isValid,
  isCheckImmediatelyRule,
  children,
  fontSize,
}) {
  const [errorMessage, setErrorMessage] = useState();
  const [lazyCheck, setLazyCheck] = useState(false);

  const validate = (val) => {
    setErrorMessage(null);

    rules.every((rule) => {
      if (typeof rule(val) === 'string') {
        setErrorMessage(rule(val));
        isValid(false);
      } else isValid(true);

      return !!errorMessage || errorMessage === 0;
    });
  };
  useEffect(() => {
    if (isCheckImmediatelyRule || lazyCheck) validate(value);
    else setLazyCheck(true);
  }, [isCheckImmediatelyRule, value]);
  return (
    <Container fontSize={fontSize}>
      {children}
      <span className="errorMessage">{errorMessage} &nbsp;</span>
    </Container>
  );
}

Validation.propTypes = {
  value: PropTypes.any,
  rules: PropTypes.array,
  // ts 컨버팅 이후 [() => {} || ''] 형태로 정의 변경 필요
  isValid: PropTypes.func,
  isCheckImmediatelyRule: PropTypes.bool,
  children: PropTypes.element,
  fontSize: PropTypes.string,
};

Validation.defaultProps = {
  rules: [],
  isValid: () => {},
  isCheckImmediatelyRule: false,
  fontSize: '1.9vh',
};
