import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <Footerdiv>
      <Div1>
    <p>Norrlandsgatan 27</p>       
       <p>112 67</p>      
       <p>Stockholm</p>    
       <p>hej@vaseplace.se</p>
    </Div1>    
   <Div2>  
   <Linkstyle to="products">
      <p>Våra produkter</p>
      </Linkstyle> 
      <Linkstyle to="OmOss">
      <p>Om oss</p> 
      </Linkstyle> 
      <Linkstyle to="/Kontakt">  
      <p>Kontakta oss</p> 
      </Linkstyle>
        </Div2>
<CopyrightDiv>
  <div>    
  <p>Copyright 2023</p>  
</div>    
</CopyrightDiv>

    </Footerdiv>
  )
}

export default Footer

const Footerdiv = styled.div`

    display: flex;
    justify-content: center;
    align-self: flex-end;
    flex-wrap: wrap;
    background-color: #888888;
    padding-top: 30px;
    `
    const CopyrightDiv = styled.div `
    display: flex;
    justify-content: center;
    width: 100vw;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    padding-bottom: 5px;
    font-size: 12px;
    color:white;
`
    const Div1 = styled.div `
    padding-right: 50px;
    color:white;
    `
    const Div2 = styled.div `
    padding-left: 50px;
    color: white;

    `
    const Linkstyle = styled(Link)`
    text-decoration:none;
    color:white;
    &:hover{
      color:#EEB5A2;
    }
    `

    

