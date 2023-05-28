import * as S from './AnswerContainer.style';
import { useSelector } from 'react-redux';
import Answer from './Answer';

const AnswerBox = () => {
  const answer = useSelector((state) => state.data.answer);
  return (
    <S.AnswerBoxDiv>
      <S.Question>
        <S.Puzzled alt='궁금해하는 이모티콘. 답변칸의 상단에 위치.' />
      </S.Question>
      <S.Cat>
        {answer ? (
          <S.CatPot alt='항아리를 안은 고양이 이미지, 답변이 왔을 때 표시' />
        ) : (
          <S.CatBack alt='뒤로 돌아 앉은 고양이 이미지, 질문이 없을 때 혹은 답변이 도착하지 않았을 때 표시' />
        )}
      </S.Cat>
      <S.AnswerCard>
        <Answer />
      </S.AnswerCard>
    </S.AnswerBoxDiv>
  );
};

export default AnswerBox;
