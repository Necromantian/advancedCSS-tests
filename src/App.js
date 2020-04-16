import React from 'react';
import styled from 'styled-components'

import { TopicSection } from './components/TopicSection'
import { BlendModeExample } from './components/BlendModeExample/BlendModeExample'
import { ShapesExample } from './components/ShapesExample/ShapesExample'
import { FiltersExample } from './components/FiltersExample/FiltersExample'
import { ClipPathExample } from './components/ClipPathExample/ClipPathExample'
import { VariableFontsExample } from './components/VariableFontsExample/VariableFontsExample'
import { AnimationCSSExample } from './components/AnimationCSSExample/AnimationCSSExample'
import { ScrollExample } from './components/ScrollExample/ScrollExample'

const AppContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  return (
    <AppContainerStyled>
      <TopicSection title="Blend mode">
        <BlendModeExample />
      </TopicSection>
      <TopicSection title="Shapes - flow of text">
        <ShapesExample/>
      </TopicSection>
      <TopicSection title="CSS Filters">
        <FiltersExample/>
      </TopicSection>
      <TopicSection title="Clip path">
        <ClipPathExample/>
      </TopicSection>
      <TopicSection title="Variable fonts">
        <VariableFontsExample/>
      </TopicSection>
      <TopicSection title="Animation.css lib">
        <AnimationCSSExample/>
      </TopicSection>
      <TopicSection title="Advanced scroll" defaultHidden={true}>
        <ScrollExample/>
      </TopicSection>
    </AppContainerStyled>
  );
}

export default App;
