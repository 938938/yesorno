import styled from 'styled-components';
import { MIDNIGHTEXPRESS, WHITE } from '../global/globalColor';

export const AnswerContainer = styled.section`
  position: absolute;
  left: 20px;
  bottom: 10px;
  width: 95%;
  height: 65%;
  border: 2px solid ${MIDNIGHTEXPRESS};
  transform: rotate(-4deg);
  background-color: ${WHITE};
  text-align: center;
  z-index: 0;
`;

export const AnswerCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(4deg);

  .question {
    margin-bottom: 20px;
  }
`;

export const Cat = styled.div`
  width: 64px;
  height: 62px;
  position: absolute;
  bottom: 20px;
  left: -35px;
  background-color: ${WHITE};
  transform: rotate(4deg);
`;

export const Question = styled.div`
  position: absolute;
  top: -25px;
  right: -25px;
  transform: rotate(4deg);
`;
