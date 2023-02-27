import React from 'react';
import styled from 'styled-components';
import { MIDNIGHTEXPRESS } from '../global/globalColor';

const Image = (props) => {
  return <ImageBox>{props.children}</ImageBox>;
};

export default Image;

const ImageBox = styled.div`
  img {
    max-width: 400px;
    max-height: 300px;
    overflow: hidden;
    padding: 10px;
    border: 1px solid ${MIDNIGHTEXPRESS};
    margin-top:10px;
  }
`;
