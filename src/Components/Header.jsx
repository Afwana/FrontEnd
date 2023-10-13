import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <Navbar className="" style={{backgroundColor:'transparent'}}>
        <Container>
          <Navbar.Brand className='text-light fw-bolder'>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>
            <i className="fa-solid fa-cloud-arrow-up fa-beat-fade" style={{color: '#ffffff'}}></i>{' '}
              Media Player
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header