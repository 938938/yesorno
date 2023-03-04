import React from 'react';
import AnswerText from '../UI/AnswerText';
import Image from '../UI/Image';

const Answer = ({ data, your }) => {
  const yes = [
    '응!',
    '좋아!',
    '해!',
    'YESSSS!!',
    'OK!!',
    '좋아요',
    '하세요',
    '응',
    'yes',
    '좋습니다',
    '좋은 생각이야!',
    '맞아요',
  ];
  const no = [
    '안돼!',
    '하지마!',
    'Nooooo!!!!',
    'Nope',
    '하지마세요',
    '아니오',
    '안됩니다',
    '아닙니다',
    '틀렸습니다',
    'NO',
    '가만히 계세요',
    '하지마',
    '안돼',
    '아냐!',
  ];
  return (
    <div>
      <div className='question'>
        <AnswerText>Q: {your}?</AnswerText>
      </div>
      <div>
        <AnswerText>
          A:{' '}
          {data.answer === 'no'
            ? no[Math.floor(Math.random() * no.length)]
            : yes[Math.floor(Math.random() * yes.length)]}
        </AnswerText>
        <div>
          <Image>
            <img
              src={data.image}
              alt={
                data.answer === 'no'
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
