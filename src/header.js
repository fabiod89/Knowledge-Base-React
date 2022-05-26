import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Header () {return(<div>

<Navbar className="header" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Brand Goes Here</Navbar.Brand>

    </Container>
  </Navbar>   

</div>
)
}

export default Header;