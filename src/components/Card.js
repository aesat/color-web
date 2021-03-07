import React from 'react'
import './Card.css'


class Card extends React.Component {
    render() {
        return (
            <div key={""} className="cardParent">
                {this.props.cards.map((card) => (
                    <div className="card" key={card.id}>
                        <img src="https://images.pexels.com/photos/4546165/pexels-photo-4546165.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="..." />
                        <div key={card.id} className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            <p className="card-text">{card.price}₺</p>
                            <div className="description"><p className="card-text ">{card.description}</p></div>
                            <a href="/cardfeatures" className="btn btn-info">İNCELE</a>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}


export default Card