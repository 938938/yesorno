import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActiveAPI } from '../store/activeSlice';
import Title from '../UI/Title';

const Bored = () => {
  const dispatch = useDispatch();
  const activeData = useSelector((state) => {
    return state.active.value;
  });
  const linkData = useSelector((state) => {
    return state.active.link;
  });
  const typeData = useSelector((state) => {
    return state.active.type;
  });
  const getActive = () => {
    dispatch(ActiveAPI());
  };
  useEffect(() => {
    getActive();
  }, []);
  return (
    <div>
      <Title>
        <h1>지루함과 싸워보자!</h1>
        <p>&#62; 지루하지 않기 위한 활동을 찾기!</p>
      </Title>
      {activeData}
      <br />
      {linkData}
      <br />
      {typeData}
    </div>
  );
};

export default Bored;
