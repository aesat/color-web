import React from 'react'
import './SearchBar.css'
import {Form, FormControl, Button} from 'react-bootstrap'

class NavMenu extends React.Component {

  
 
    handleFormSubmit=(event)=>{
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                 <Form onSubmit={this.handleFormSubmit} className="search" inline>
                    <FormControl 
                    onChange={this.props.searchCardsProp} 
                    type="text" placeholder="Bir Ürün Adı Giriniz" 
                    className="mr-sm-2" />
                    <Button variant="outline-info">Ara</Button>
                </Form>
            </div>
        )
    }
}

export default NavMenu
