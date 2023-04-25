import React from 'react';
import styled from 'styled-components';
import {
  MIDNIGHTEXPRESS,
  RADICALRED,
  DARKTURQUOISE,
  WHITE,
} from '../global/globalColor';
import { useSelector } from 'react-redux';

const AppBox = (props) => {
  const answer = useSelector((state) => {
    return state.data.answer;
  });

  return (
    <AppBg answer={answer}>
      <AppCard>{props.children}</AppCard>
    </AppBg>
  );
};

export default AppBox;

const AppBg = styled.section`
  position: relative;
  /* width: 100vw; */
  width: 600px;
  max-width: 600px;
  min-width: 300px;
  height: 90vh;
  max-height: 700px;
  padding: 20px;
  border: 3px solid ${MIDNIGHTEXPRESS};
  transform: rotate(-2deg);
  background-color: ${(props) =>
    props.answer
      ? props.answer === 'no'
        ? `${RADICALRED}`
        : `${DARKTURQUOISE}`
      : `${MIDNIGHTEXPRESS}`};
  transition: all 1s;

  @media only screen and (max-width: 768px) {
    transform: rotate(0);
    transition: all 1s;
  }
`;

const AppCard = styled(AppBg)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  transform: rotate(2deg);
  transition: all 1s;
  @media only screen and (max-width: 768px) {
    transform: rotate(0);
    transition: all 1s;
  }
`;
