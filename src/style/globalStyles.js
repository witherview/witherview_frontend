import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'AppleSDGothicNeoM00';
        font-weight: 400;
        src: local('Spoqa Han Sans Regular'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'AppleSDGothicNeoEB00';
        font-weight: 500;
        src: local('Spoqa Han Sans Medium'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'AppleSDGothicNeoB00';
        font-weight: 700;
        src: local('Spoqa Han Sans Bold'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'TitilliumWeb';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/titilliumweb/v9/NaPecZTIAOhVxoMyOr9n_E7fdMPmDaZRbrw.woff2) format('woff2');
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    }

    @font-face {
        font-family: 'TitilliumWebBold';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/titilliumweb/v9/NaPDcZTIAOhVxoMyOr9n_E7ffHjDGItzY5abuWI.woff2) format('woff2');
        unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
    }

    @font-face {
        font-family: 'TitilliumWeb';
        font-weight: 400;
        src: local('Spoqa Han Sans Regular'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
        unicode-range: U+AC00-D7AF;
    }

    @font-face {
        font-family: 'TitilliumWebBold';
        font-weight: 700;
        src: local('Spoqa Han Sans Bold'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
        unicode-range: U+AC00-D7AF;
    }

    ::-webkit-scrollbar {
        background-color:white;
        width: 14px;
    }

    ::-webkit-scrollbar-track {
        background-color:white
    }

    ::-webkit-scrollbar-thumb {
        background-color:#0c0c59;
    }

    body {
        font-family: AppleSDGothicNeoM00;
        margin: 0;
    }

`;
