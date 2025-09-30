import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  max-width: 550px;
  display: flex;
  width: 90%;
  border: 1px solid rgba(138, 43, 226, 0.3);
  background: rgba(26, 26, 46, 0.7);
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 16px 20px;
  cursor: pointer;
  gap: 12px;
  align-items: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #8a2be2;
    box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.2);
  }
`;

const SearchBar = ({ search, setSearch }) => {
    return (
      <SearchBarContainer>
        <SearchOutlined style={{ color: 'rgba(192, 192, 192, 0.7)' }} />
        <input
          placeholder="Search with prompt or name . . ."
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            color: "inherit",
            fontSize: "16px",
            background: "transparent",
            caretColor: "#9d4edd",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBarContainer>
    );
  };
  
  export default SearchBar;