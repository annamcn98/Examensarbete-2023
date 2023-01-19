import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import logo from './logo.png'
import flowers from '../flowers.jpg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
        <Link to="/">
          <Logodiv>
            <Img src={logo} alt="Logo"></Img>
          </Logodiv>
        </Link>
        <Nav />
      </div>
    </div>
  )
}

export default Header

const Logodiv = styled.div `
  display: flex;
  justify-content: center;
  background-color: #EEB5A2;
  width: 100vw;
  height: 20vh;
  align-items: center;
  background-image: url(${flowers});
  background-position: center;
`
const Img = styled.img `
  height: 130px;
`