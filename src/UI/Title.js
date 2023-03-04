import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
  return <TitleBox>{props.children}</TitleBox>;
};

export default Title;

const TitleBox = styled.header`
  margin-bottom: 40px;
  h1 {
    font-size: 50px;
  }
  p {
    margin-top: -10px;
    font-size: 18px;
  }
`;
