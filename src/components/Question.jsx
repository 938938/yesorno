import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { asyncAPI } from '../store/answerSlice';
import Form from '../UI/Form';
import Options from '../UI/Options';

const defaultKeyword = [
  '오늘 치킨을 먹을까?',
  '운동을 쉬어도 될까?',
  '지금 할까?',
  '조금 쉴까?',
  '오늘 전화를 할까?',
];

const QuestionForm = ({ setYour }) => {
  const inputRef = useRef();
  const [on, setOn] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [question, setQuestion] = useState('');
  const [option, setOption] = useState(defaultKeyword);
  const dispatch = useDispatch();

  const onFocus = () => {
    setOn(true);
  };

  const onChange = (e) => {
    const { value } = e.target;
    setQuestion(value);
    setOption(defaultKeyword.filter((ele) => ele.includes(value)));
    setSelected(-1);
  };
  const onClick = (clicked) => {
    setQuestion(clicked);
    setOption(defaultKeyword.filter((ele) => ele.includes(clicked)));
    inputRef.current.focus();
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (question === '') return;
    dispatch(asyncAPI);
    setYour(question);
    setQuestion('');
    setOption(defaultKeyword);
    setOn(false);
    inputRef.current.blur();
    setSelected(-1);
  };

  const onKeyUp = (e) => {
    if (e.key === 'ArrowDown' && selected < option.length - 1) {
      setSelected(selected + 1);
    } else if (e.key === 'ArrowUp' && selected > 0) {
      setSelected(selected - 1);
    }
    if (e.key === 'Enter' && selected >= 0) {
      onClick(option[selected]);
    }
  };

  return (
    <section onKeyUp={onKeyUp}>
      <Form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          placeholder='이곳에 질문해주세요'
          value={question}
          onChange={onChange}
          onFocus={onFocus}
        />
        <button onClick={onSubmit}>묻기!</button>
      </Form>
      {on && option && (
        <Options setOn={setOn}>
          {option.map((ele, idx) => {
            return (
              <li
                key={idx}
                className={selected === idx ? 'selected' : ''}
                onClick={() => onClick(ele)}
              >
                {ele}
              </li>
            );
          })}
          <button onClick={() => setOn(false)}>X</button>
        </Options>
      )}
    </section>
  );
};

export default QuestionForm;
