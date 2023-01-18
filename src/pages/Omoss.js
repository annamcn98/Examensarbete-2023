import React from 'react'
import styled from 'styled-components'
import evelinabild from '../evelina.jpg.jpg'

function Omoss() {
  return (
    <div>
    <Rubrik>
     Vi är Vase Place!
    </Rubrik>
    <Divnames>
     <Anna>Anna Nilsson</Anna>
    <Evelina>Evelina Ghazzaoui</Evelina> 
    </Divnames>


    <Div>
    <Img src={evelinabild} alt=""></Img> 
        <P1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P1>
        
         <Img src={evelinabild} alt=""></Img>
        <P2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P2>
        </Div>
        <Divtext>
        <P3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P3>
        <P4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</P4>
        </Divtext>

        </div>
 
  )
}

const Div = styled.div`
display: flex;
margin:auto;
flex-direction:column;
`
const Rubrik = styled.h3`
color:#7AB0DF;
margin-top:40px;
`
const Divnames = styled.div`
display:flex;
justify-content:center;
`
 const Anna = styled.h3`
margin-right:3px;
`
const Evelina = styled.h3`
margin-left:400px;
` 
const P1 = styled.p`
margin-right:100px;
margin-left:50px;
`
const P2 = styled.p`
margin-left:100px;
margin-right:50px;
`
const P3 = styled.p`
margin-top:50px;
`
const P4 = styled.p`
margin-top:50px;
`
const Divtext = styled.div`
margin:auto;
width:800px;
`
const Img = styled.img`
 max-height:45vh;
 display:flex;
 margin:auto;
`

export default Omoss