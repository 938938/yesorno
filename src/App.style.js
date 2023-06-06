import styled from 'styled-components';
import { CREAMGRAY, MIDNIGHTEXPRESS, WHISPER } from './global/globalColor';

export const AppBack = styled.section`
  position: relative;
  width: 90vw;
  max-width: 600px;
  height: 90vh;
  max-height: 700px;
  padding: 20px;
  border: 3px solid ${MIDNIGHTEXPRESS};
  transform: rotate(-2deg);
  background-color: ${(props) =>
    props.bgcolor ? props.bgcolor : `${CREAMGRAY}`};
  transition: all 1s;
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    transform: rotate(0);
    transition: all 1s;
    margin: 0;
    border: 0;
  }
`;

export const AppFront = styled(AppBack)`
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  margin-top: 0;
  transform: rotate(2deg);
  transition: all 1s;
  @media only screen and (max-width: 768px) {
    transform: rotate(0);
    transition: all 1s;
  }
`;
