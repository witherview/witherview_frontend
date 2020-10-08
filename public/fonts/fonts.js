import { createGlobalStyle } from 'styled-components';

import AppleSDGothicNeoBoldWoff2 from './AppleSDGothicNeoBold.woff2';
import AppleSDGothicNeoBoldWoff from './AppleSDGothicNeoBold.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'AppleSDGothicNeoBold';
    src: local('AppleSDGothicNeoBold'), local('AppleSDGothicNeoBold'),
    url(${AppleSDGothicNeoBoldWoff2}) format('woff2'),
    url(${AppleSDGothicNeoBoldWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;
