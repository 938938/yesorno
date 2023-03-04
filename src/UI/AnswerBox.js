import React from 'react';
import styled from 'styled-components';
import { MIDNIGHTEXPRESS, WHITE } from '../global/globalColor';
import CATPOT from '../images/cat-pot.png';
import CATBACK from '../images/cat-back.png';
import PUZZLED from '../images/puzzled.png';

const AnswerBox = (props) => {
  const data = props.data;
  return (
    <AnswerBoxDiv>
      <Question>
        <img src={PUZZLED} alt='궁금해하는 이모티콘. 답변칸의 상단에 위치.' />
      </Question>
      <Cat>
        {data ? (
          <img
            src={CATPOT}
            alt='항아리를 안은 고양이 이미지, 답변이 왔을 때 표시'
          />
        ) : (
          <img
            src={CATBACK}
            alt='뒤로 돌아 앉은 고양이 이미지, 질문이 없을 때 혹은 답변이 도착하지 않았을 때 표시'
          />
        )}
      </Cat>
      <AnswerCard>{props.children}</AnswerCard>
    </AnswerBoxDiv>
  );
};

export default AnswerBox;

const AnswerBoxDiv = styled.section`
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

const AnswerCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  
  transform: rotate(4deg);

  .question{
    margin-bottom:20px;
  }
`;

const Cat = styled.div`
  width: 64px;
  height: 62px;
  position: absolute;
  bottom: 20px;
  left: -35px;
  background-color: ${WHITE};
  transform: rotate(4deg);
`;

const Question = styled.div`
  position: absolute;
  top: -25px;
  right: -25px;
  transform: rotate(4deg);
`;
