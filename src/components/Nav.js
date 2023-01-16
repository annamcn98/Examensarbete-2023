import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import DropdownItem from './DropdownItem'


function Nav() {
  return (
    <div>
        <Navdiv>
        <LinkTitle className='Linkfont' to='/'>HEM</LinkTitle>
        <LinkTitle className='Linkfont' to="/products">
          PRODUKTER
          {/* <DropdownItem /> */}
          </LinkTitle>
        <LinkTitle className='Linkfont' to="/kontakt">KONTAKTA OSS</LinkTitle>
        </Navdiv>
    </div>
  )
}

const Navdiv = styled.div `
display: flex;
justify-content: center;
align-items: center;
/* height: 10vh; */
background-color: #EEB5A2;
`
const LinkTitle = styled(Link) `
background-color: #FAEDE4;
padding-top: 1em;
width: 200px;
margin: 0 0.5em;
text-decoration: none;
border-radius: 50px 50px 0 0;
color: #FD461C;
`

export default Nav