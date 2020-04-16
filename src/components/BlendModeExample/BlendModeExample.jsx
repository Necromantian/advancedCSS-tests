import React from "react";

import styled from "styled-components";

import image1 from '../../image1.png'
import image2 from '../../image2.png'

const BlendContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const SquaresBlended = styled.div`
  &::before {
    content: '${props => "background-blend-mode:" + props.blendType}';
    position: absolute;
    margin-left: -200px;
    max-width: 200px;
  }

  &::after {
    content: '${props => props.additionalInfo}';
    position: absolute;
    margin-left: 340px;
    max-width: 200px;
  }

  background-blend-mode: ${props => props.blendType};
  margin-top: 10px;
  height: 300px;
  width: 300px;
  background: url(${image1}),
    url(${image2});
`;

export const BlendModeExample = () => (
  <div>
    <img src={image1}></img>
    <img src={image2}></img>
    <hr />
    <BlendContainerStyled>
      <SquaresBlended
        blendType="normal"
        additionalInfo="one on top of the other"
      />
      <SquaresBlended blendType="multiply" />
      <SquaresBlended blendType="soft-light" />
      <SquaresBlended blendType="hard-light" />
      <SquaresBlended blendType="overlay" />
      <SquaresBlended blendType="darken" />
      <SquaresBlended blendType="lighten" />
      <SquaresBlended blendType="color-dodge" />
      <SquaresBlended blendType="screen" />
    </BlendContainerStyled>
  </div>
);
