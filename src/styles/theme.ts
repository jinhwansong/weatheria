import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{box-sizing:border-box}
    a {
        text-decoration : none;
        color:inherit;
        font-family: 'Pretendard';
        font-weight: 400;
        color:#121212
    }
    p,button,label,h1,h2,h3,h4,h5,h6{
        font-family: 'Pretendard';
        font-weight: 400;
        font-size:16px;
        color:#121212
    }
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }
`