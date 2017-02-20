import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Menu({ items }) {
  return (
    <Nav>
      <ul>
        {items.map(item => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  display: block;
   
  & ul { list-style: none; }
  & li { display: inline-block; margin-right: 10px; }
`
