import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 30px 30px;
  background: linear-gradient(135deg, #0f0f1a 0%, #000000 100%);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 768px) {
    padding: 6px 10px;
  }
  
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1200px;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  return (
    
      <Container>
        <Wrapper>
          <GenerateImageForm
            post={post}
            setPost={setPost}
            createPostLoading={createPostLoading}
            setGenerateImageLoading={setGenerateImageLoading}
            generateImageLoading={generateImageLoading}
            setCreatePostLoading={setCreatePostLoading}
          />
          <GeneratedImageCard src={post?.photo} loading={generateImageLoading} />
        </Wrapper>
      </Container>
    
  );
};

export default CreatePost;