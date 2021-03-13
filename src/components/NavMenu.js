import React from 'react'
import './NavMenu.css'
import {Nav, Navbar} from 'react-bootstrap'

class NavMenu extends React.Component {
 

    render() {
        return (
            <div className="container">

                <Navbar className="navbar" bg="dark" variant="dark">
                <Navbar.Brand href="/">CHERCHİ</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="links" href="/">Anasayfa</Nav.Link>
                    <Nav.Link className="links" href="pictures">Fotoğraflar</Nav.Link>
                    <Nav.Link className="links" href="about">Hakkımızda</Nav.Link>
                </Nav><br/>
                
            </Navbar>
            </div>
        )
    }
}

export default NavMenu
