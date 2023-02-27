import React from 'react';
import styled from 'styled-components';
import { MIDNIGHTEXPRESS, WHISPER, WHITE } from '../global/globalColor';

const Options = (props) => {
  return <OptionBox>{props.children}</OptionBox>;
};

export default Options;

const OptionBox = styled.ul`
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
