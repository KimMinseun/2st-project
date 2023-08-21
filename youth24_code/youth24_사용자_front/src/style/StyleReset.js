import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import GongGothicLight from 'assets/font/gongGothicLight.ttf';
import GongGothicMedium from 'assets/font/gongGothicMedium.ttf';

export const StyleReset = createGlobalStyle`
  ${reset}
    @font-face {
    font-family: 'gong_l';
    font-display: auto;
    src: url(${GongGothicLight}) format('TrueType');
    }

    @font-face {
    font-family: 'gong_m';
    font-display: auto;
    src: url(${GongGothicMedium}) format('TrueType');
    }
    
    *{
        margin: 0;
        padding: 0;
        font-family: 'gong_l';
        font-size: 16px;
        color: #141414;
        // transition: 0.3s;
        transition: color 0.5s ease;
        transition: background-color 0.5s ease;
        transition: font-size 0.5s ease;
    }

    html,
    body {
        width: 100%;
        height: auto;

        background-color: #ffffff;
        font-family: 'gong_l';
    }

    body::-webkit-scrollbar {
    width: 12px;
    border: 3px solid #ffffff;
    }

    body::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid #ffffff;
    }

    body::-webkit-scrollbar-track {
    border-radius: 10px;
    }

    ::-moz-selection {
        background: #584ee4;
        color: #fff;
     }
     ::selection {
        background: #584ee4;
        color: #fff;
     }

    a,
    a:link,
    a:hover,
    a:active,
    a:visited {
        color: #141414;
        text-decoration: none;
        cursor: pointer;
    }

    ul,
    ul li {
        list-style: none;
    }

    button,
    button:focus {
        border: 0;
        background-color: transparent;
        outline: 0;
        cursor: pointer;
    }

    #root {
        width: 100%;
        height: auto;
        min-width: 1200px;
    }
    
    .inner {
        width: 1200px;
        height: auto;
        margin: 0 auto;
    }

    @media screen and (max-width: 700px) {
        #root {
            min-width: unset;
        }

        .inner {
            width: 100%;
            padding: 0 15px;
            box-sizing: border-box;
        }
    }
`;
