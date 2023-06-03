import * as S from './Answer.style';
import { useSelector } from 'react-redux';

const Answer = () => {
  const answer = useSelector((state) => state.answer.answer);
  const urlImg = useSelector((state) => state.answer.image);
  const ask = useSelector((state) => state.ask.ask);
  return (
    <div>
      <S.Question>
        <S.Text>Q: {ask}?</S.Text>
      </S.Question>
      <div>
        <S.Text>A: {answer}</S.Text>
        <div>
          <S.Image>
            <img
              src={urlImg}
              alt={
                answer === 'no'
                  ? '부정을 나타내는 gif 파일'
                  : '긍정을 나타내는 gif 파일'
              }
            />
          </S.Image>
        </div>
      </div>
    </div>
  );
};

export default Answer;
