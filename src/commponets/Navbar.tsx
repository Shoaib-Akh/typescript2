import React from 'react'
import { Container, Nav, Navbar as Navbarbs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <Navbarbs className='bg-white shadow-sm mb-3' >
   <Container>
<Nav className='me auto'>
<Nav.Link  to="/" as={NavLink}>
Home
</Nav.Link>
<Nav.Link  to="store" as={NavLink}
>store
</Nav.Link><Nav.Link  to="about" as={NavLink}>
about
</Nav.Link>
</Nav>
<div>add to card <span>3</span></div>

   </Container>
    </Navbarbs>
  )
}

export default Navbar
