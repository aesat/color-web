import './Home.css';
import React from "react"
import Card from './Card'
import CardCreator from './CardCreator';
import axios from 'axios';
import SearchBar from './SearchBar'


function ListCards(props) {

  const cards = props.cards
  const cardsList = cards.map(cardItem =>
    <Card id={cardItem.id} key="" description={cardItem.description} price={cardItem.price} title={cardItem.title} />
  );
  return cardsList
}


class Home extends React.Component {

  state = {
    cards: [{}],
    searchQuery:"",
    lastCards:[{}]
  }


  componentDidMount() {
    axios.get("/home").then(response => {
      this.setState({ cards: response.data })
      console.log(response.data)
    })
  }

  

  searchCards=(event)=>{
     this.setState({searchQuery: event.target.value})
     for(let i=0;i<this.state.cards.length-1;i++){
       if(this.state.cards[i].title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase())!==-1){
         for(let j=0;j<this.state.lastCards.length;j++){
           if(this.state.cards[i].title!==this.state.lastCards[j].title){
             this.state.lastCards.push(this.state.cards[i])
           }
         }
       }
     }
     console.log(this.state.lastCards)
  }

  render() {


    return (

      <div href="/home" className="container">
        <SearchBar searchCardsProp={this.searchCards}/>
        <CardCreator />

        <div className="body">
          {<ListCards cards={this.state.cards} />}
        </div>

      </div>

    )
  }

}

export default Home;
