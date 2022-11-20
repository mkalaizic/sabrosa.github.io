import * as React from 'react';
import styled from 'styled-components';
import './imagenes/Sabrosa01.png';

const SabrosaAppWrapper = styled.div`
  background-color: #fefefd;
  margin: -10px;
  height: 110vh;
`;
export const SabrosaApp: React.FC = () => {
  return (
    <SabrosaAppWrapper>
      <span>Hola a todes</span>
    </SabrosaAppWrapper>
  );
};
