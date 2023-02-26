import React from 'react';
import styled from 'styled-components';
import { MIDNIGHTEXPRESS, WHISPER } from '../global/globalColor';

const Form = (props) => {
  return <FormBox>{props.children}</FormBox>;
};

export default Form;

const FormBox = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;

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
