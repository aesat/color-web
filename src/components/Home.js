import './Home.css';
import React from "react"
import Card from './Card'
import axios from 'axios';
import SearchBar from './SearchBar'
import FilterBar from './FilterBar';


class Home extends React.Component {

  state = {
    cards: [],
    searchQuery: ""
  }


  componentDidMount() {
    axios.get("/home").then(response => {
      this.setState({ cards: response.data })
    })
  }

  searchCards = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  //Sort Functions

  sortByPriceUp = () => {
    let prices=this.state.cards.map(
      (card)=>{
        return card.date
      }
    )
    prices.sort()
    console.log(this.state.cards)

    
  }

  sortByPriceDown = () => {
    console.log("pricedown")
  }


  sortByDateUp = () => {
    console.log("dateup")
  }


  sortByDateDown = () => {
    console.log("datedown")
  }

  render() {

    let filteredCards = this.state.cards.filter(
      (card) => {
        return card.title.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )



    return (

      <div href="/home" className="container">
        <SearchBar searchCardsProp={this.searchCards} />
        <FilterBar sortByPriceUpProp={this.sortByPriceUp} sortByPriceDownProp={this.sortByPriceDown} sortByDateUpProp={this.sortByDateUp} sortByDateDownProp={this.sortByDateDown}/>
        <div className="body">
          <Card cards={filteredCards} />
        </div>

      </div>

    )
  }

}

export default Home;
