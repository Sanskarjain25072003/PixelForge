import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0px 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const OutlinedInput = styled.div`
  border-radius: 12px;
  border: 1px solid rgba(138, 43, 226, 0.3);
  background: rgba(26, 26, 46, 0.7);
  color: ${({ theme }) => theme.text_secondary};
  outline: none;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #8a2be2;
    box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.2);
  }
`;

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text_primary};
  caret-color: #9d4edd;
  
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary + '80'};
  }
  
  &:focus {
    outline: none;
  }
`;

const TextInput = ({
  label,
  placeholder,
  name,
  value,
  handelChange,
  textArea,
  rows,
  columns,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <OutlinedInput>
        <Input
          as={textArea ? "textarea" : "input"}
          name={name}
          rows={rows}
          columns={columns}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handelChange(e)}
        />
      </OutlinedInput>
    </Container>
  );
};

export default TextInput;