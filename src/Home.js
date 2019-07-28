import React from 'react'
import styled from 'styled-components'
import {
    Link
} from 'react-router-dom'
import buttonTexts from './button-texts.js'


const StyledLink = styled(Link)`
  color:#454545;
  text-decoration: none;
  font-size: 2em;
  &:hover {
    text-shadow:2px 2px 5px lightblue;
  }
`;

const CenterContent = styled.div`
  height:100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default function Home () {
  return (
      <CenterContent>
        <StyledLink to='/about'>{buttonTexts[0]}</StyledLink>
      </CenterContent>
  )
}
