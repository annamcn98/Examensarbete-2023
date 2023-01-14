import React from 'react'
import styled from 'styled-components'
import bukett from '../bukett.jpg'
import vase from '../vase.jpg'
// import bluevase from '../bluevase.png'
// import flowers from '../flowers.jpg'
// import component1 from '../component1.png'
// import { Link } from 'react-router-dom'




function Homepage() {
  return (
    <div>
    <Wrapper>
      <LeftDiv>
      <Img src={vase} alt="vase"></Img>

      <Btn1>
          Shoppa vaser
          </Btn1>
        {/* <h1 className='Linkfont'>
          All you need is love, some flowers and a good vase..
        </h1> */}
      </LeftDiv>
      <RightDiv>
        <Img src={bukett} alt="dried flowers"></Img>
        <Btn2>
          Shoppa blommor
          </Btn2>

      {/* <Img src={bluevase} alt="dried flowers"></Img> */}
      {/* <Img src={flowers} alt="dried flowers"></Img> */}

      </RightDiv>
    </Wrapper>
          {/* <ButtonDiv> */}
        {/* </ButtonDiv> */}
        <div>

        </div>
        </div>
  )
}

export default Homepage

const Wrapper = styled.div`
    display: flex;
    max-height: 480px;
    margin: 50px 0;
    justify-content: center;
    align-items: center;
`
// const ButtonDiv = styled.div`
// display: flex;
// justify-content: center;
// margin: 1.5em 0;
// `
const Btn1 = styled.button`
  height: 30px;
  margin-right: 0.5em;
  background-color: #EEB5A2;
  border: none;
  margin-bottom: 1em;
`
const Btn2 = styled.button`
height: 30px;
margin-left: 0.5em;
background-color: #EEB5A2;
border: none;
margin-bottom: 1em;

`
const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 500px;
    max-width: 300px;
    margin-right: 1em;
    background-color: white;
    justify-content: center;
    align-items: center;
`
const RightDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 500px;
    max-width: 300px;
    margin-right: 1em;
    background-color: white;
    justify-content: center;
    align-items: center;
`

const Img = styled.img `
  /* min-width: 15vw; */
  max-height: 25vh;
  margin-bottom: 20px;
  padding: 1em;

/* height: 25vh;

position: absolute;
  left: 0px;
  top: 0px;
  z-index: 2; */
`
// const ImgComponent = styled.img `
// height: 350px;
// `