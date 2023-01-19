import React from 'react'
import styled from 'styled-components'
import evelinabild from '../evelina.jpg.jpg'
import annabild from '../anna.jpeg'
function Omoss() {
  return (
    <Parent>
    <Rubrik>
     Vi är Vase Place!
    </Rubrik>

    <Container>
      <Content1>
      <H3>Anna Nilsson</H3>
    <Bestavi src={annabild} alt=""></Bestavi> 
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
    </Content1>
        <Content1>
        <H3>Evelina Ghazzaoui</H3> 
         <Bestavi src={evelinabild} alt=""></Bestavi>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
         </Content1>

        </Container>

        </Parent>
 
  )
}

const Parent = styled.div`
background-color:#FAEDE4;
height:100vh;
margin-bottom:0;
`
const Container = styled.div`
display: flex;
justify-content:space-around;
`
const Content1 = styled.div`
display: flex;
flex-direction:column;
width:40%;
align-items:center;
`
const Rubrik = styled.h2`
color:#343434;
margin-top:0;
padding-top:60px;
margin-bottom:40px;
`
const Bestavi = styled.img`
max-height:25%;
`
const H3 = styled.h3`
padding-bottom:30px;
padding-top:20px;
`

export default Omoss