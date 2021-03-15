import './Home.css';
import React from "react"
import Card from './Card'
import axios from 'axios';
import SearchBar from './SearchBar'
import FilterBar from './FilterBar';
import Paggination from './Paggination';


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
    this.state.cards.sort((a,b)=>(a.price>b.price) ? 1:-1)
  }

  sortByPriceDown = () => {
    this.state.cards.sort((a,b)=>(a.price<b.price) ? 1:-1)
  }


  sortByNameUp = () => {
    this.state.cards.sort((a,b)=>(a.title>b.title) ? 1:-1)
   }


  sortByNameDown = () => {
    this.state.cards.sort((a,b)=>(a.title<b.title) ? 1:-1)
  }

  sortByDateUp = () => {
    this.state.cards.sort((a,b)=>(a.id<b.id) ? 1:-1)
  }

  sortByDateDown = () => {
    this.state.cards.sort((a,b)=>(a.id>b.id) ? 1:-1)
  }

  pagginationSort=()=>{
    

     
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
        <FilterBar sortByPriceUpProp={this.sortByPriceUp} sortByPriceDownProp={this.sortByPriceDown} sortByNameUpProp={this.sortByNameUp} sortByNameDownProp={this.sortByNameDown} sortByDateUpProp={this.sortByDateUp} sortByDateDownProp={this.sortByDateDown}/>
        <div className="body">
          <Card cards={filteredCards} />
          <Paggination pagginationSortProp={this.pagginationSort} pageNumProp={this.state.cards}/>
        </div>

      </div>

    )
  }

}

export default Home;
