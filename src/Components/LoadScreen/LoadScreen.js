import React from "react";
import styled, { keyframes } from "styled-components";

const LoadScreen = () => {
  const loading = keyframes`
        50%{
            height: 64px;
        }
    `;

  const Div = styled.div`
    background-color: #000000;
    width: 16px;
    height: 32px;
    margin-left: 10px;
    animation: ${loading} 1.2s infinite;
  `;
  const Section = styled.section`
    background: #000000;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    & ${Div}:nth-child(1) {
      background-color: #ff9f1a;
      animation-delay: -0.4s;
    }
    & ${Div}:nth-child(2) {
      background-color: #fed330;
      animation-delay: -0.2s;
    }
    & ${Div}:nth-child(3) {
      background-color: #fffa65;
      animation-delay: 0;
    }
  `;
  return (
    <Section>
      <Div></Div>
      <Div></Div>
      <Div></Div>
    </Section>
  );
};

export default LoadScreen;
