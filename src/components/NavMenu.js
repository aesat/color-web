import React from 'react'
import {Nav, Form, FormControl, Button, Navbar} from 'react-bootstrap'

class NavMenu extends React.Component {

    markColor=(e)=>{
        console.log(e.target.value)
    }

    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">COLORS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="pictures">Pictures</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" onChange={this.markColor} placeholder="Search a Color" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
            </div>
        )
    }
}

export default NavMenu
