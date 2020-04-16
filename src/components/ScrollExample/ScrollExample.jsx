import React, { useState } from "react";

import styled from "styled-components";

const ScrollExampleStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContainerToScroll = styled.div`
  width: 400px;
  height: 400px;
  overflow: auto;
`;

const FullColorSlide = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.backColor};
  scroll-snap-align: start;
`;

const ContainerToScrollWithSnap = styled(ContainerToScroll)`
  scroll-snap-type: y mandatory;
`;

const ContainerToScrollWithOverscroll = styled(ContainerToScroll)`
  overscroll-behavior: contain;
`;
const ContainerToScrollWithAnchor = styled(ContainerToScroll)`
  overflow-anchor: auto;
`;

const StyledButton = styled.button`
  padding: 15px;
  font-size: 15px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`;

const colorsArray = [
  "#bada55",
  "#7fe5f0",
  "#133337",
  "#f15535",
  "#ffc0cb",
  "#b0e0e6",
  "#f7347a"
];

export const ScrollExample = () => {
  const [colors, setColors] = useState(colorsArray);

  const getRndColor = () =>
    "#" +
    Math.random()
      .toString(16)
      .slice(2, 8);

  const addRandomColor = () => setColors([getRndColor(), ...colors]);

  const NewSlideButton = () => (
    <StyledButton onClick={addRandomColor}>
      Add new slide at the beginning
    </StyledButton>
  );

  return (
    <ScrollExampleStyled>
      <h2>Normal scroll without special css</h2>
      <NewSlideButton/>
      <ContainerToScroll>
        {colors.map(color => (
          <FullColorSlide backColor={color} />
        ))}
      </ContainerToScroll>

      <h2>Scroll-snap</h2>
      <ContainerToScrollWithSnap>
        {colors.map(color => (
          <FullColorSlide backColor={color} />
        ))}
      </ContainerToScrollWithSnap>

      <h2>overscroll-behavior (cannot "scroll-out")</h2>
      <ContainerToScrollWithOverscroll>
        {colors.map(
          (color, i) => i < 3 && <FullColorSlide backColor={color} />
        )}
      </ContainerToScrollWithOverscroll>

      <h2>Overflow-anchor (doesnt work here?)</h2>
      <NewSlideButton/>
      <ContainerToScrollWithAnchor>
        {colors.map(color => (
          <FullColorSlide backColor={color} />
        ))}
      </ContainerToScrollWithAnchor>
    </ScrollExampleStyled>
  );
};
