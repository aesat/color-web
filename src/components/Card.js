import React from 'react'
import './Card.css' 


class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img src="https://images.pexels.com/photos/4546165/pexels-photo-4546165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.price}₺</p>
                        <div className="description"><p className="card-text ">{this.props.description}</p></div>
                        <a href="/cardfeatures" className="btn btn-primary">İNCELE</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default Card