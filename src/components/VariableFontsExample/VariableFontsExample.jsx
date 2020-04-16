import React, {useState} from "react";

import styled from "styled-components";
import sourceSansVariable from '../../sourceSansVariable.woff2'

const VariableFontsExampleStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const RangeInputStyled = styled.input`
  width: 400px;
`;

const StyledParagraph = styled.p`
    @font-face {
        font-family: 'My variable font';
        src: url(${sourceSansVariable}) format('woff2');
        font-style: normal;
        font-weight: 1 999;
    }

  font-family: 'My variable font';

  font-weight: ${props => props.customWeight};
`;

export const VariableFontsExample = () => {
  const [fontWeight, setFontWeight] = useState(500)

  const rangeChangeHandle = (e) => setFontWeight(e.target.value)

  return <VariableFontsExampleStyled>
  <h2>Set weight of the font using slider:</h2>
    <RangeInputStyled type="range" onChange={rangeChangeHandle} min="100" value={fontWeight} step="100" max="900"></RangeInputStyled>
    <StyledParagraph customWeight={fontWeight}>
      Pellentesque at eros eget quam mollis consequat in vel dolor. Mauris
      hendrerit a quam nec luctus. Donec commodo tempor mattis. Nunc
      sollicitudin ultrices quam at ullamcorper. Nunc sed ligula vitae eros
      scelerisque egestas. Class aptent taciti sociosqu ad litora torquent per
      conubia nostra, per inceptos himenaeos. Donec at maximus dui. Ut vel risus
      a dui tempus aliquam. Mauris sed ligula non erat dictum faucibus id et
      diam. Nunc efficitur tristique augue, lobortis interdum est posuere in.
      Nunc vulputate arcu nec facilisis iaculis. In posuere tristique ipsum et
      dapibus.
    </StyledParagraph>
  </VariableFontsExampleStyled>
}
