import React, { useState } from "react";
import styled from "styled-components";

const TopicSectionStyled = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1:first-of-type {
    margin-left: 10px;
  }
`;

const ButtonStyled = styled.button`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #0b8aaf;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`;

export const TopicSection = ({ children, title, defaultHidden = true }) => {
  const [hidden, setHidden] = useState(defaultHidden);

  const toggleThisSection = () => setHidden(!hidden);

  return (
    <TopicSectionStyled>
      <h1>{title}</h1>
      <ButtonStyled onClick={toggleThisSection}>Show/hide</ButtonStyled>
      <div hidden={hidden}>{children}</div>
    </TopicSectionStyled>
  );
};
