import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'



function Header() {
  return (
    <div>

        <div>
            <Logodiv>
                
            </Logodiv>
            <Nav />
        </div>
        
        
    </div>
  )
}

    const Logodiv = styled.div `
    display: flex;
    /* align-items: flex-start; */
    background-color: #EEB5A2;
    width: 100vw;
    height: 25vh;
    `

export default Header