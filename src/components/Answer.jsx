import AnswerText from '../UI/AnswerText';
import Image from '../UI/Image';
import { useSelector } from 'react-redux';

const Answer = () => {
  const answer = useSelector((state) => state.answer.answer);
  const urlImg = useSelector((state) => state.answer.image);
  const ask = useSelector((state) => state.ask.ask);
  return (
    <div>
      <div className='question'>
        <AnswerText>Q: {ask}?</AnswerText>
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
