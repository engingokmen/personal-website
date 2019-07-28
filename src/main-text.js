import React from 'react'
import styled from 'styled-components'

const FixedWidthText = styled.div`
  width:300px;
  text-align:left;
`

const StyledText = styled.p`
  line-height: 2em;
`

const technologies= ['HTML','CSS','NODEJS','MONGODB','REACT','STYLED COMPONENTS','UNIX SERVER','GITHUB'];
const programmingLanguages=['C++','JAVASCRIPT'];

const accounts=['https://github.com/engingokmen','https://codepen.io/engingokmen']

const listofTechnologies = technologies.map((tname) =>
  <li key={tname}>{tname}</li>
);

const listofProgrammingLanguages = programmingLanguages.map((pname) =>
  <li key={pname}>{pname}</li>
);

const listofAccounts = accounts.map((aname) =>
  <li key={aname}><a href={aname}>{aname}</a></li>
);

export default function AboutText () {
  return(
    <FixedWidthText>
      <p></p>
      <StyledText>
        This site is a client-side routed web app but has lack of
        CSS and messy coded without comment.
        Just to practice React and styled-components but it will be updated soon.
        Please check my GitHub site if you want to see source file anyway.
      </StyledText>

      <h2>Things that I practiced:</h2>

      <h3>Programming languages:</h3>
      <ul>
        {listofProgrammingLanguages}
      </ul>

      <h3>Internet technologies:</h3>
      <ul>
        {listofTechnologies}
      </ul>

      <h3>Links to my accounts:</h3>
      <ul>
        {listofAccounts}
      </ul>
    </FixedWidthText>
  )
}
