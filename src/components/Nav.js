import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cart from '../shopping-bag.png'


function Nav() {
  return (
    <Navdiv>
      <Empty></Empty>
        <Linkdiv>
          <LinkTitle className='Linkfont' to='/'>HEM</LinkTitle>
          <LinkTitle className='Linkfont' to="/products">PRODUKTER</LinkTitle>
          <LinkTitle className='Linkfont' to="/omoss">OM OSS</LinkTitle>
          <LinkTitle className='Linkfont' to="/kontakt">KONTAKT</LinkTitle>
        </Linkdiv>
        <CartDiv>
          <CartImg src={cart} alt="Logo"></CartImg>
        </CartDiv>
    </Navdiv>
  )
}

export default Nav

const Empty = styled.div `
  display: flex;
  width: 20%;
`
const Navdiv = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FAEDE4;
  width: 100%;
`
const Linkdiv = styled.div `
  display: flex;
  justify-content: center;
  width: 60%;
`
const LinkTitle = styled(Link) `
  background-color: #FAEDE4;
  padding: 1em 0;
  width: 200px;
  margin: 0 0.5em;
  text-decoration: none;
  color: #FD461C;
`
const CartDiv = styled.div`
  display:flex;
  width: 18%;
  justify-content: right;
  padding-right: 2%;
`
const CartImg = styled.img`
  max-height: 2.2em;
`