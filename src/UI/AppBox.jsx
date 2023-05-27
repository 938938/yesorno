import React from 'react';
import styled from 'styled-components';
import { CREAMGRAY, MIDNIGHTEXPRESS, WHISPER } from '../global/globalColor';
import { useSelector } from 'react-redux';

const AppBox = (props) => {
  const bgColor = useSelector((state) => {
    return state.data.bgColor;
  });

  return (
    <AppBg bgColor={bgColor}>
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
    props.bgColor ? props.bgColor : `${CREAMGRAY}`};
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
