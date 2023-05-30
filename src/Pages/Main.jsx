import * as S from './Main.style';
import QuestionForm from '../components/Question';
import AnswerContainer from '../components/AnswerContainer';

const Main = () => {
  return (
    <>
      <S.Title>
        <h1>
          YES <span>or</span> No !
        </h1>
        <p>&#62; 예/아니오로 답할 수 있는 질문을 던져주세요.</p>
      </S.Title>
      <QuestionForm />
      <AnswerContainer />
    </>
  );
};

export default Main;
