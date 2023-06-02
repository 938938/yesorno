import styled from 'styled-components';
import { MIDNIGHTEXPRESS } from '../global/globalColor';

export const Text = styled.p`
  font-weight: bolder;
  font-size: 20px;
  color: ${MIDNIGHTEXPRESS};
`;

export const Image = styled.div`
  img {
    max-width: 400px;
    max-height: 300px;
    overflow: hidden;
    padding: 10px;
    border: 1px solid ${MIDNIGHTEXPRESS};
    margin-top: 10px;
  }
`;
