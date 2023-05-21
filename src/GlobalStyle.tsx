import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body {
        background-color: ${(props) => props.theme.bgColor};
        color : ${(props) => props.theme.textColor};
    }

    svg {
        padding : 8px;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.textColor}
    }


    li:hover,
    svg:hover {
        box-shadow: 0 2px 5px 1px ${(props) => props.theme.textColor};
        border-radius: 8px;
        cursor: pointer;
    }

    @-webkit-keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
  }
}
@keyframes rotate-in-center {
  0% {
    -webkit-transform: rotate(-360deg);
            transform: rotate(-360deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0);
            transform: rotate(0);
    opacity: 1;
    
  }
}
`;

export default GlobalStyle;
