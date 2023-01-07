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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -300px;
    flex-direction: column;
  }
  .square-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`;

const createBox = keyframes`
   from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const StyledSquare = styled.span`
  height: 120vh;
  width: 220vh;
  border: 1px solid violet;
  animation: ${createBox} 4s infinite;
`;

const StyledButton = styled.button`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #e2560a;
  border-radius: 4px;
  border: none;
  height: 40px;
  width: 150px;
  margin-top: 30px;
  color: #fdfefd;
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
  animation: ${rotate} 4s linear infinite;
  padding: 5px;
  font-size: 1.2rem;
`;

export const SabrosaApp: React.FC = () => {
  return (
    <SabrosaAppWrapper>
      {/* <div className='square-wrapper'> */}
      {/* <StyledSquare></StyledSquare> */}
      {/* </div> */}
      <div className='image-wrapper'>
        <img src={Logo} width='400px' />
        <Rotate>
          <img src={Sabro5} width='300px' />
        </Rotate>
      </div>
      <StyledButton
        onClick={() => {
          console.log('here');
        }}>
        Get tickets
      </StyledButton>
      {/* <img src={Sabro3} width='400px' />
      <img src={Sabro4} width='400px' /> */}
    </SabrosaAppWrapper>
  );
};
