import { css } from 'styled-components';

const theme = {
  colors: {
    black: '#000000',
    white: '#ffffff',
    lightWhite: '#f6f6f6',
    lightGrey: '#d3d3d3',
    warmGrey: '#9e9e9e',
    darkIndigo: '#0c0c59',
    cornflower: '#6e6eff',
    veryLightPink: '#fff3ef',
    fadedOrange: '#f2886b',
    palaLilac: '#eef0ff',
    greyishBrown: '#3d3d3d',
  },
  button: css`
    > div {
      height: 6vh;
      width: 29.6vh;
      border-radius: 1vh;
      max-width: 80vw;
      > p {
        font-size: 1.9vh;
      }
    }
  `,
  landingButton: css`
    > div {
      height: 45px;
      border-radius: 8px;
      border-width: 1.5px;
      > p {
        font-size: 14px;
      }
    }
  `,
  input: css`
    > input {
      width: 53.3vh;
      max-width: 60vw;
      height: 5vh;
      font-size: 1.9vh;
      font-family: AppleSDGothicNeoM00;
      letter-spacing: 0.2vh;
      border-bottom: 0.2vh solid #9e9e9e;
      ::placeholder {
        font-family: AppleSDGothicNeoM00;
        color: #9e9e9e;
      }
      :-ms-input-placeholder {
        font-family: AppleSDGothicNeoM00;
        color: #9e9e9e;
      }
      ::-ms-input-placeholder {
        font-family: AppleSDGothicNeoM00;
        color: #9e9e9e;
      }
    }
  `,
};

export default theme;
