// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
//
// const ValidForm = styled.form`
//
// `;
//
// export default function InputBar({
//   submit, children,
// }) {
//   // const validateSubmit = (e) => {
//   //   console.log('execute before');
//   //   e.preventDefault();
// eslint-disable-next-line max-len
//   //   if (rules.length > 0 && !rules.every((rule) => typeof rule(value) === 'boolean' && rule(value))) return;
//   //   console.log('rule is ok!');
//   //   submit();
//   // };
// eslint-disable-next-line max-len
//   // const [validations, setValidations] = useState(children.map{child => { React.cloneElement(child, {isValid}) }});
//   // const test = () => {
//   //   // console.log(this.)
//   // }
//   useEffect(() => {
//     console.log(children.map(child => child._store));
//   }, []);
//
//   const test = () => {
//     console.log(children);
//   };
//   return (
//     <ValidForm>
//       {children}
//       <button type="button" onClick={test}>test</button>
//     </ValidForm>
//   );
// }
//
// InputBar.propTypes = {
//   submit: PropTypes.func,
//   children: PropTypes.element,
// };
//
// InputBar.defaultProps = {
//   submit: () => {},
// };
