import * as S from './AnswerContainer.style';
import { useSelector } from 'react-redux';
import Answer from './Answer';
import Loader from './Loader';

import CATPOT from '../images/cat-pot.png';
import CATBACK from '../images/cat-back.png';
import PUZZLED from '../images/puzzled.png';

const AnswerContainer = () => {
  const answer = useSelector((state) => state.answer.answer);
  return (
    <S.AnswerContainer>
      <S.Question>
        <img src={PUZZLED} alt='궁금해하는 이모티콘. 답변칸의 상단에 위치.' />
      </S.Question>
      <S.Cat>
        {answer ? (
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
      </S.Cat>
      <S.AnswerCard>{answer ? <Answer /> : <Loader />}</S.AnswerCard>
    </S.AnswerContainer>
  );
};

export default AnswerContainer;
