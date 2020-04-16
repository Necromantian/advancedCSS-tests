import React from "react";
import styled from "styled-components";

import image1 from "../../image1.png";

const FiltersExampleStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledImage = styled.div`
  position: relative;
  background: url(${image1});
  width: 300px;
  height: 300px;
`;

const FilteredHeader = styled.h2`
  /* margin: 100px; */
	line-height: 0;
	display: inline-block;
	padding: 70px;
  filter: url(#displacementFilter);
  transform: translate3d(0, 0, 0);
  font-size: 60px;
`;
export const FiltersExample = () => (
  <FiltersExampleStyled>
  <FilteredHeader>Filtered header by SVG</FilteredHeader>
    <div>
      <h2>Normal image</h2>
      <StyledImage />
    </div>
    <div>
      <h2>blur(2px)</h2>
      <StyledImage style={{ filter: "blur(2px)" }} />
    </div>
    <div>
      <h2>blur(5px)</h2>
      <StyledImage style={{ filter: "blur(5px)" }} />
    </div>
    <div>
      <h2>brightness(0.4)</h2>
      <StyledImage style={{ filter: "brightness(0.4)" }} />
    </div>
    <div>
      <h2>contrast(200%)</h2>
      <StyledImage style={{ filter: "contrast(200%)" }} />
    </div>
    <div>
      <h2>drop-shadow(16px 16px 20px blue)</h2>
      <StyledImage style={{ filter: "drop-shadow(16px 16px 20px blue)" }} />
    </div>
    <div>
      <h2>||||grayscale(50%)</h2>
      <StyledImage style={{ filter: "grayscale(50%)" }} />
    </div>
    <div>
      <h2>hue-rotate(90deg)</h2>
      <StyledImage style={{ filter: "hue-rotate(90deg)" }} />
    </div>
    <div>
      <h2>Combo: contrast(175%) brightness(3%)</h2>
      <StyledImage style={{ filter: "contrast(175%) brightness(3%)" }} />
    </div>


    <svg xmlns="http://www.w3.org/2000/svg" hidden>
      <filter id="displacementFilter">
        <feMorphology operator="dilate" radius="8" in="SourceGraphic" result="THICKNESS" />

        <feComposite operator="out" in="THICKNESS" in2="SourceGraphic"></feComposite>

      </filter>
    </svg>
  </FiltersExampleStyled>
);
