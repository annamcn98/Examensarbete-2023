import React from 'react'
import styled from 'styled-components'



function Homepage() {
  return (
    <Wrapper>
      <LeftDiv>

      </LeftDiv>
      <RightDiv>

      </RightDiv>



    </Wrapper>
  )
}

export default Homepage

const Wrapper = styled.div`
    display: flex;
    /* height: 100vh; */
    justify-content: center;
    align-items: center;
`
const LeftDiv = styled.div`
    display: flex;
    height: 200px;
    width: 40%;
    background-color: aliceblue;
    margin: 1em;

`
const RightDiv = styled.div`
    display: flex;
    height: 200px;
    width: 40%;
    background-color: aliceblue;
    margin: 1em;


`