import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncAPI } from '../store/dataSlice';
import Title from '../UI/Title';
import QuestionForm from '../components/QuestionForm';
import AnswerBox from '../UI/AnswerBox';
import Answer from '../components/Answer';
import Loader from '../UI/Loader';

const Main = () => {
  const [your, setYour] = useState('');
  const dispatch = useDispatch();
  const answer = useSelector((state) => {
    return state.data.answer;
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
    <>
      <Title>
        <h1>
          YES <span>or</span> No !
        </h1>
        <p>&#62; 예/아니오로 답할 수 있는 질문을 던져주세요.</p>
      </Title>
      <QuestionForm setYour={setYour} />
      <AnswerBox>{answer ? <Answer your={your} /> : <Loader />}</AnswerBox>
    </>
  );
};

export default Main;
