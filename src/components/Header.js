import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import logo from './logo.png'



function Header() {
  return (
    <div>

        <div>
            <Logodiv>
              <Img src={logo} alt="Logo"></Img>
            </Logodiv>
            <Nav />
        </div>
        
        
    </div>
  )
}

    const Logodiv = styled.div `
    display: flex;
    /* align-items: flex-start; */
    justify-content: center;
    background-color: #EEB5A2;
    width: 100vw;
    height: 25vh;
      align-items: center;

    `
    const Img = styled.img `
    height: 150px;
    `

export default Header