import Loader from "./Loader";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  border-radius: 12px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: ${({ $isDisabled, $isLoading }) => ($isDisabled || $isLoading ? 'not-allowed' : 'pointer')};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 12px 28px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  border: none;
  background: linear-gradient(135deg, #8a2be2, #9d4edd);
  min-width: fit-content;
  @media (max-width: 600px) {
    padding: 10px 16px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  ${({ type, theme }) =>
    type === "secondary"
      ? `
  background: linear-gradient(135deg, ${theme.secondary}, #bb86fc);
  `
      : `
  background: linear-gradient(135deg, ${theme.primary}, #9d4edd);
`}

  ${({ isDisabled }) =>
    isDisabled &&
    `
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;

  `}
  ${({ isLoading }) =>
    isLoading &&
    `
    opacity: 0.8;
  cursor: not-allowed;
`}
${({ flex }) =>
    flex &&
    `
    flex: 1;
`}
`;

const button = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick()}
      isDisabled={isDisabled}
      type={type}
      isLoading={isLoading}
      flex={flex}
    >
      {isLoading ? (
        <>
          <Loader size="small" />
        </>
      ) : (
        <>
          {leftIcon}
          {text}
          {rightIcon}
        </>
      )}
    </Button>
  );
};

export default button;