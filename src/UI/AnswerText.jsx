import React from 'react';
import styled from 'styled-components';
import { MIDNIGHTEXPRESS } from '../global/globalColor';

const AnswerText = (props) => {
  return <Text>{props.children}</Text>;
};

export default AnswerText;

const Text = styled.p`
  font-weight: bolder;
  font-size: 20px;
  color:${MIDNIGHTEXPRESS}
`;
