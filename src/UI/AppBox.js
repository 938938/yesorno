import React from 'react';
import styled from 'styled-components';
import {
  MIDNIGHTEXPRESS,
  RADICALRED,
  DARKTURQUOISE,
  WHITE,
} from '../global/globalColor';

const AppBox = (props) => {
  const data = props.data;
  return (
    <AppBg data={data}>
      <AppCard>{props.children}</AppCard>
    </AppBg>
  );
};

export default AppBox;

const AppBg = styled.div`
  position: relative;
  width: 100vw;
  max-width: 600px;
  min-width: 300px;
  height: 90vh;
  max-height: 700px;
  padding: 20px;
  border: 3px solid ${MIDNIGHTEXPRESS};
  transform: rotate(-2deg);
  background-color: ${(props) =>
    props.data
      ? props.data.answer === 'no'
        ? `${RADICALRED}`
        : `${DARKTURQUOISE}`
      : `${WHITE}`};
`;

const AppCard = styled(AppBg)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  transform: rotate(2deg);
`;
