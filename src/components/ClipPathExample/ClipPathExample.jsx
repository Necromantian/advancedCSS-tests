import React from "react";

import styled from "styled-components";

const ClipPathExampleStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SquareStyled = styled.div`
  height: 300px;
  width: 300px;
  background-color: magenta;
  margin: 20px;
`;

const SquareClipedToCircle = styled(SquareStyled)`
  clip-path: circle();
`;
const SquareClipedToTriangle = styled(SquareStyled)`
  clip-path: polygon(0 0, 300px 0, 300px 300px);
`;

export const ClipPathExample = () => (
  <ClipPathExampleStyled>
    <div>
      <h2>Normal square</h2>
      <SquareStyled />
    </div>
    <div>
      <h2>Square clipped using circle()</h2>
      <SquareClipedToCircle />
    </div>
    <div>
      <h2>Square clipped using polygon()</h2>
      <SquareClipedToTriangle />
    </div>
  </ClipPathExampleStyled>
);
