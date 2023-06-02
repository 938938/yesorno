import { styled } from 'styled-components';
import { MIDNIGHTEXPRESS, WHISPER, WHITE } from '../global/globalColor';

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
  position: relative;

  input {
    width: 505px;
    height: 20px;
    padding: 10px;
    border: 2px solid ${MIDNIGHTEXPRESS};
    &:focus {
      /* background-color: black; */
      outline: none;
    }
  }
  button {
    width: 70px;
    height: 44px;
    border: 2px solid ${MIDNIGHTEXPRESS};
    border-left: 0;
    transition: all 0.1s;

    &:hover {
      background-color: ${WHISPER};
      cursor: pointer;
    }
    &:active {
      box-shadow: inset 5px 5px ${MIDNIGHTEXPRESS};
      transition: all 0.1s;
      padding-top: 5px;
      padding-left: 5px;
      box-sizing: border-box;
    }
  }
`;

export const Option = styled.ul`
  position: relative;
  z-index: 100;
  position: absolute;
  width: 595px;
  border: 2px solid ${MIDNIGHTEXPRESS};
  background-color: ${WHITE};
  border-top: 0;
  > li {
    padding: 5px 10px;
    box-sizing: border-box;
    border-bottom: 1px solid ${MIDNIGHTEXPRESS};
    &:hover {
      background-color: ${WHISPER};
    }
    &:first-child {
      border-top: 0;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
  > .selected {
    background-color: ${WHISPER};
  }

  > button {
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 15px;
    font-size: 10px;
    line-height: 10px;
    border: 2px solid ${MIDNIGHTEXPRESS};
    background-color: ${WHISPER};
    cursor: pointer;
    &:hover {
      background-color: ${MIDNIGHTEXPRESS};
    }
  }
`;
