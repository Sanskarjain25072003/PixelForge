import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { AddRounded, ExploreRounded } from "@mui/icons-material";
import Button from "./Button";

const Container = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.text_primary};
  font-weight: bold;
  background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
  background-size: 400% 400%;
  animation: gradientBG 10s ease infinite;
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
  @media only screen and (max-width: 600px) {
    padding: 10px 12px;
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

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <Container>
      <span style={{ color: "aqua", fontSize: "30px" }}>DreaMatrix</span>
      {path[1] === "post" ? (
        <Button
          onClick={() => navigate("/")}
          text="Explore Posts"
          leftIcon={
            <ExploreRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
          type="secondary"
        />
      ) : (
        <Button
          onClick={() => navigate("/post")}
          text="Create new post"
          leftIcon={
            <AddRounded
              style={{
                fontSize: "18px",
              }}
            />
          }
        />
      )}
    </Container>
  );
};

export default Navbar;