import React from "react";
import styled from "styled-components";
import { InputAdornment, TextField } from "@mui/material";

export const SearchBar: React.FC<{
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  placeholder?: string;
  iconSrc?: string;
}> = ({ onChange, value, iconSrc, placeholder }) => {
  return (
    <StyledInput>
      <TextField
        placeholder={placeholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={iconSrc} alt="" />
            </InputAdornment>
          ),
        }}
        variant="standard"
        color="primary"
        fullWidth={true}
        value={value}
        onChange={onChange}
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  flex: 2 2 0;

  .MuiInput-root {
    padding-bottom: 7px;

    &:hover:before {
      // God bless America, I used !important flag (it will serve you well)
      border-bottom: 2px solid ${({ theme }) => theme.palette.primaryColor} !important;
    }
    &:before {
      border-bottom: 2px solid ${({ theme }) => theme.palette.primaryActive};
    }
    .MuiInput-input {
      color: ${({ theme }) => theme.palette.primaryActive};
      font-weight: 700;
      &::placeholder {
        color: ${({ theme }) => theme.palette.primaryActive};
      }
    }
  }
`;
