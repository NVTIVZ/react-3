import React from "react";
import styled, { keyframes } from "styled-components";

const LoadingSpinner = () => {
  return (
    <Container>
      <Ring>
        <RingItem></RingItem>
        <RingItem></RingItem>
        <RingItem></RingItem>
        <RingItem></RingItem>
      </Ring>
    </Container>
  );
};

export default LoadingSpinner;

const Container = styled.div`
  margin: auto;
`;
const RingAnimation = keyframes`0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

const RingItem = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #bd2222;
  border-radius: 50%;
  animation: ${RingAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #bd2222 transparent transparent transparent;
`;
