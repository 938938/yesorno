import React from 'react';
import styled from 'styled-components';
import { WHISPER } from '../global/globalColor';

const Image = (props) => {
  return <ImageBox>{props.children}</ImageBox>;
};

export default Image;

const ImageBox = styled.div`
  img {
    max-width: 400px;
    max-height: 300px;
    border-radius: 10px;
    overflow: hidden;
    padding: 10px;
    border: 2px solid ${WHISPER};
  }
`;
