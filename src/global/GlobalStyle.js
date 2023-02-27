import { createGlobalStyle } from 'styled-components';
import { MIDNIGHTEXPRESS, WHISPER } from './globalColor';

const GlobalStyle = createGlobalStyle`
  *{
    /* font-family: 'Nanum Pen Script', cursive; */
    font-family: 'Hahmlet', serif;
    border:0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    font-size: 1rem;
    color: ${MIDNIGHTEXPRESS};
    list-style: none;
  }
  body{
    display: flex;
    justify-content: center;
    padding:30px;
    background-color: ${WHISPER};
  }
`;

export default GlobalStyle;
