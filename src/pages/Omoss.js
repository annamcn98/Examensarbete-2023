import React from 'react'
import styled from 'styled-components'
import evelinabild from '../evelina.jpg.jpg'
import annabild from '../anna.jpeg'
function Omoss() {
  return (
    <Body>
    <Rubrik>
     Vi är Vase Place!
    </Rubrik>

    <Container>
      <Content1>
      <h3>Anna Nilsson</h3>
    <Bestavi src={annabild} alt=""></Bestavi> 
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
    </Content1>
        <Content1>
        <h3>Evelina Ghazzaoui</h3> 
         <Bestavi src={evelinabild} alt=""></Bestavi>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
         </Content1>

        </Container>

     {/*    <Vases>
        <Pinkblue src={pinkcomp} alt=""></Pinkblue>
        <Pinkblue src={bluevase} alt=""></Pinkblue>
        <Pinkblue src={pinkcomp} alt=""></Pinkblue>
        </Vases>  */}
        <Divtext>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </Divtext>

        </Body>
 
  )
}

const Body = styled.body`
background-color:#FAEDE4;
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
margin-top:60px;
margin-bottom:40px;
`
const Divtext = styled.div`
display: flex;
flex-direction:column;
margin:auto;
padding-bottom:50px;
padding-top:50px;
width:70%;
`
const Bestavi = styled.img`
max-height:25%;
`
/* const Vases = styled.div`
display:flex;
justify-content:center;
`  */
 const Pinkblue = styled.img`
 max-height:50vh;
 margin-top: 50px; 
` 
export default Omoss