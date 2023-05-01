import React from 'react';
import AnswerText from '../UI/AnswerText';
import Image from '../UI/Image';
import { useSelector } from 'react-redux';

const Answer = ({ your }) => {
  const answer = useSelector((state) => state.data.answer);
  const urlImg = useSelector((state) => state.data.image);
  return (
    <div>
      <div className='question'>
        <AnswerText>Q: {your}?</AnswerText>
      </div>
      <div>
        <AnswerText>A: {answer}</AnswerText>
        <div>
          <Image>
            <img
              src={urlImg}
              alt={
                answer === 'no'
                  ? '부정을 나타내는 gif 파일'
                  : '긍정을 나타내는 gif 파일'
              }
            />
          </Image>
        </div>
      </div>
    </div>
  );
};

export default Answer;
