import React from "react";
import styled from "styled-components";

const MovieItem: React.FC = () => {
  return (
    // TODO Complete the MovieItem component
    <MovieItemWrapper>
      <LeftCont>Left count</LeftCont>
      <RightCont>Right count</RightCont>
    </MovieItemWrapper>
  );
};

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
`;

export default MovieItem;
