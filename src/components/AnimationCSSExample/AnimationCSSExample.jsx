import React, { useRef, useEffect } from "react";

import styled from "styled-components";

const AnimationCSSExampleStyled = styled.div`
  display: flex;
`;

const SquareStyled = styled.div`
  height: 100px;
  width: 100px;
  margin: 20px;
  background-color: magenta;
`;

export const AnimationCSSExample = () => {
  const lastSquare = useRef(null);

  useEffect(() => {
    lastSquare.current &&
      lastSquare.current.addEventListener("animationend", e =>
        e.target.classList.remove("animated", "bounce")
      );
  }, [lastSquare]);

  const onHoverHandler = e => {
    e.target.classList.add("animated", "bounce");
  };

  return (
    <AnimationCSSExampleStyled>
      <h2>Endless animation</h2>
      <SquareStyled className="animated infinite bounce delay-2s" />
      <SquareStyled className="animated infinite hinge delay-2s" />

      <div>
        <h2>Animation on hover</h2>
        <SquareStyled onMouseEnter={onHoverHandler} ref={lastSquare} />
      </div>
    </AnimationCSSExampleStyled>
  );
};
