import React, { useState } from 'react';
import Form from '../UI/Form';

const QuestionForm = ({ setYour, setData }) => {
  const [question, setQuestion] = useState('');
  const onChange = (e) => {
    const { value } = e.target;
    setQuestion(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (question === '') return;
    setData(undefined);
    setYour(question);
    setQuestion('');
  };
  return (
    <Form onSubmit={onSubmit}>
      <input placeholder='' value={question} onChange={onChange} />
      <button onClick={onSubmit}>묻기!</button>
    </Form>
  );
};

export default QuestionForm;
