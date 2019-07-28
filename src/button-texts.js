import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
  text-decoration: none;
  font-size: 0.5em;
`;

const textHome =
<div>
  <p>A full stack developer</p>
  <StyledSpan>This site was created with </StyledSpan>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
    <title>React Logo</title>
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" stroke-width="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
  <StyledSpan> React and 💅 styled components</StyledSpan>
</div>

const textCoverPage =
<div>
  <p>COVER PAGE</p>
</div>

const textAbout =
<div>
  <p>ABOUT</p>
</div>

const textContact =
<div>
  <p>CONTACT</p>
</div>

const buttonTexts = [textHome,textCoverPage,textAbout,textContact];
export default buttonTexts;
