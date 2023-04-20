import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Answer from './components/Answer';
import Question from './components/QuestionForm';
import { asyncAPI } from './store/dataSlice';
import AnswerBox from './UI/AnswerBox';
import AppBox from './UI/AppBox';
import Loader from './UI/Loader';
import Title from './UI/Title';

function App() {
  const [your, setYour] = useState('');

  const dispatch = useDispatch();

  const answer = useSelector((state) => {
    return state.data.answer;
  });
  const urlImg = useSelector((state) => {
    return state.data.image;
  });

  const getData = async () => {
    dispatch(asyncAPI());
  };

  useEffect(() => {
    if (your) {
      getData();
    }
  }, [your]);
  return (
    <AppBox answer={answer}>
      <Title>
        <h1>
          YES <span>or</span> No !
        </h1>
        <p>&#62; 예/아니오로 답할 수 있는 질문을 던져주세요.</p>
      </Title>
      <Question setYour={setYour} />
      <AnswerBox answer={answer}>
        {answer ? (
          <Answer answer={answer} urlImg={urlImg} your={your} />
        ) : (
          <Loader />
        )}
      </AnswerBox>
    </AppBox>
  );
}

export default App;
