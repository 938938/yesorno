import { useEffect, useState } from 'react';
import { getDataAPI } from './API/api';
import Answer from './components/Answer';
import Question from './components/QuestionForm';
import AnswerBox from './UI/AnswerBox';
import AppBox from './UI/AppBox';
import Loader from './UI/Loader';
import Title from './UI/Title';

function App() {
  const [data, setData] = useState();
  const [your, setYour] = useState('');

  const getData = async () => {
    let temp = await getDataAPI();
    setData(temp);
  };

  useEffect(() => {
    if (your) {
      getData();
    }
  }, [your]);
  return (
    <AppBox data={data}>
      <Title>
        <h1>
          YES <span>or</span> No !
        </h1>
        <p>&#62; 예/아니오로 답할 수 있는 질문을 던져주세요.</p>
      </Title>
      <Question setYour={setYour} setData={setData} />
      <AnswerBox data={data}>
        {data ? <Answer data={data} your={your} /> : <Loader />}
      </AnswerBox>
    </AppBox>
  );
}

export default App;
