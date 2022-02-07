import React from "react";
import styled from "styled-components";

export const SearchBar: React.FC<{
  type: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string | number;
  iconSrc?: string;
}> = ({ type, onChange, value, iconSrc }) => {
  return (
    <StyledInput>
      {iconSrc && <img src={iconSrc} alt="" />}
      <input type={type} onChange={onChange} value={value} />
    </StyledInput>
  );
};

const StyledInput = styled.div``;
