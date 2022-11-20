import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from './Sabrosa01.png';
import Sabro3 from './Sabrosa03.png';
import Sabro4 from './Sabrosa04.png';
import Sabro5 from './Sabrosa05.png';

const SabrosaAppWrapper = styled.div`
  background-color: #fefefd;
  margin: -10px;
  height: 110vh;
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -150px;
    flex-direction: column;
  }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Rotate = styled.div`
  margin-top: -250px;
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;

export const SabrosaApp: React.FC = () => {
  return (
    <SabrosaAppWrapper>
      <span>Hola a todes</span>
      <div className='image-wrapper'>
        <img src={Logo} width='400px' />

        <Rotate>
          <img src={Sabro5} width='400px' />
        </Rotate>
      </div>
      {/* <img src={Sabro3} width='400px' />
      <img src={Sabro4} width='400px' /> */}
    </SabrosaAppWrapper>
  );
};
