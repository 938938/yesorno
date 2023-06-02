import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BLACK, MIDNIGHTEXPRESS } from '../global/globalColor';

const Loader = () => {
  return <LoaderIcon />;
};

export default Loader;

const Jump = keyframes`
    15% {
      border-bottom-right-radius: 3px;
    }

    25% {
      transform: translateY(9px) rotate(22.5deg);
    }

    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }

    75% {
      transform: translateY(9px) rotate(67.5deg);
    }

    100% {
      transform: translateY(0) rotate(90deg);
    }
  `;
const Shadow = keyframes`
    0%,
    100% {
      transform: scale(1, 1);
    }

    50% {
      transform: scale(1.2, 1);
    }
`;

const LoaderIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: auto;
  position: relative;

  &:before {
    content: '';
    width: 30px;
    height: 5px;
    background: ${BLACK};
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: ${Shadow} 0.5s linear infinite;
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background: ${MIDNIGHTEXPRESS};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: ${Jump} 0.5s linear infinite;
  }
`;
