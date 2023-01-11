import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <Navdiv>
        <LinkTitle to='/'>Hem</LinkTitle>
        <LinkTitle to="/products">Produkter</LinkTitle>
        <LinkTitle to="/kontaktaoss">Kontakta oss</LinkTitle>
        </Navdiv>
    </div>
  )
}

const Navdiv = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 10vh;
background-color: #EEB5A2;
`
const LinkTitle = styled(Link) `
font-size: 1.2em;
font-weight: 800;
padding: 0 1em;
text-decoration: none;
color: #FD461C;
`

export default Nav