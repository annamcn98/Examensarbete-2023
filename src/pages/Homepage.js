import React from 'react'
import styled from 'styled-components'
import bluevase from '../bluevase.png'
import { Link } from 'react-router-dom'




function Homepage() {
  return (
    <div>
    <Wrapper>
      <LeftDiv>
        <h1 className='Linkfont'>
          All you need is love, some flowers and a good vase..
        </h1>
      </LeftDiv>
      <RightDiv>
      <Img src={bluevase} alt="dried flowers"></Img>
      </RightDiv>
    </Wrapper>
          <ButtonDiv>
          <Btn1>
          Shoppa vaser
          </Btn1>
          <Btn2>
          Shoppa blommor
          </Btn2>
        </ButtonDiv>
        </div>
  )
}

export default Homepage

const Wrapper = styled.div`
    display: flex;
    height: 350px;
    justify-content: center;
    align-items: flex-end;
`
const ButtonDiv = styled.div`
display: flex;
justify-content: center;
margin: 1.5em 0;
`
const Btn1 = styled.button`
  height: 30px;
  margin-right: 0.5em;
`
const Btn2 = styled.button`
height: 30px;
margin-left: 0.5em;

`
const LeftDiv = styled.div`
    display: flex;
    height: 200px;
    width: 40%;
    background-color: aliceblue;

`
const RightDiv = styled.div`
justify-content: center;
align-items: center;
    display: flex;
    height: 200px;
    width: 20%;
    background-color: aliceblue;
`
const Img = styled.img `
height: 350px;
`