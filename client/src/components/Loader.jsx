import React from 'react';
import styled from 'styled-components';

const Loader = ({ size = "large" }) => {
  const loaderSize = size === "small" ? "2rem" : "20rem";
  const nucleusSize = size === "small" ? "0.5rem" : "2rem";
  const electronSize = size === "small" ? "3rem" : "15rem";
  
  return (
    <StyledWrapper size={size}>
      <div className="loader" style={{ width: loaderSize, height: loaderSize }}>
        <div className="react-star" style={{ width: electronSize, height: electronSize }}>
          <div className="nucleus" style={{ width: nucleusSize, height: nucleusSize }} />
          <div className="electron electron1" style={{ width: electronSize, height: electronSize/2.5 }} />
          <div className="electron electron2" style={{ width: electronSize, height: electronSize/2.5 }} />
          <div className="electron electron3" style={{ width: electronSize, height: electronSize/2.5 }} />
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-star {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 3s infinite;
  }

  .nucleus {
    position: absolute;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(135deg, #8a2be2, #9d4edd);
    animation: rotate 1s linear infinite;
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
  }

  .electron {
    position: absolute;
    border-radius: 50%;
    border: 0.3rem solid rgba(138, 43, 226, 0.6);
    animation: revolve 1s linear infinite;
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
  }

  .electron1::before,
  .electron2::before,
  .electron3::before {
    content: "";
    position: absolute;
    top: 60%;
    left: 100%;
    transform: translate(-50%, -50%);
    background: linear-gradient(135deg, #8a2be2, #9d4edd);
    border-radius: 50%;
    animation: moveElectron 1s infinite;
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.8);
  }
  
  .electron2 {
    transform: rotate(60deg);
    animation-delay: -0.66s;
    border-color: rgba(157, 78, 221, 0.6);
  }
  
  .electron2::before {
    animation-delay: -0.66s;
    background: linear-gradient(135deg, #9d4edd, #bb86fc);
    box-shadow: 0 0 10px rgba(157, 78, 221, 0.8);
  }

  .electron3 {
    transform: rotate(-60deg);
    border-color: rgba(0, 250, 154, 0.6);
  }
  
  .electron3::before {
    background: linear-gradient(135deg, #00fa9a, #00ffaa);
    box-shadow: 0 0 10px rgba(0, 250, 154, 0.8);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg) scale3d(1.1, 1.1, 0);
    }
  }

  @keyframes revolve {
    0% {
      border-color: rgba(138, 43, 226, 0.6);
      border-right: transparent;
    }
    25% {
      border-color: rgba(138, 43, 226, 0.6);
      border-bottom-color: transparent;
    }
    50% {
      border-color: rgba(138, 43, 226, 0.6);
      border-left-color: transparent;
    }
    75% {
      border-color: rgba(138, 43, 226, 0.6);
      border-top-color: transparent;
    }
    100% {
      border-color: rgba(138, 43, 226, 0.6);
      border-right-color: transparent;
    }
  }

  @keyframes moveElectron {
    0% {
      top: 60%;
      left: 100%;
    }
    25% {
      top: 100%;
      left: 60%;
    }
    50% {
      top: 60%;
      left: 0%;
    }
    75% {
      top: 0%;
      left: 60%;
    }
    100% {
      top: 60%;
      left: 100%;
    }
  }`;

export default Loader;