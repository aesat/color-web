import React from 'react'
import "./FilterBar.css"
import { Dropdown } from 'react-bootstrap'



class FilterBar extends React.Component {

    


   


    render() {
        return (
            
                <div className="sortBar">
                    <div className="row">
                        <div className="col-sm">
                            <Dropdown>
                                <Dropdown.Toggle variant="info" id="dropdown-basic">
                                   Sırala
                                </Dropdown.Toggle>
                                <Dropdown.Menu id="dropdownMenu">
                                    <Dropdown.Item onClick={this.props.sortByPriceUpProp} href="#/action-1">Fiyata Göre Artan</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.sortByPriceDownProp} href="#/action-2">Fiyata Göre Azalan</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.sortByDateUpProp} href="#/action-3">Tarihe Göre Yeni</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.sortByDateDownProp} href="#/action-3">Tarihe Göre Eski</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.sortByNameUpProp} href="#/action-3">A-Z Sıralama</Dropdown.Item>
                                    <Dropdown.Item onClick={this.props.sortByNameDownProp} href="#/action-3">Z-A Sıralama</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>


        )
    }
}

export default FilterBar