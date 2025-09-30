import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  min-height: 300px;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border: 2px dashed rgba(138, 43, 226, 0.5);
  background: linear-gradient(145deg, #1a1a2e, #0f0f1a);
  color: rgba(192, 192, 192, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  background: linear-gradient(145deg, #2d2d44, #1a1a2e);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const GeneratedImageCard = ({ src, loading }) => {
  return (
    <Container>
      {loading ? (
        <>
          <CircularProgress
            style={{ color: "inherit", width: "24px", height: "24px" }}
          />
          Generating Your Image ...
        </>
      ) : (
        <>
          {src ? <Image src={src} /> : <>Write a prompt to generate image </>}
        </>
      )}
    </Container>
  );
};

export default GeneratedImageCard;