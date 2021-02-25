import './Home.css';
import React from "react"
import NavMenu from "./NavMenu"
import Card from './Card'
import CardCreator from './CardCreator';
import axios from 'axios';

function ListCards(props){
const cards= props.cards
const cardsList=cards.map(cardItem=>
  <Card id={cardItem.id} key="" CardDescription={cardItem.description} CardHeader={cardItem.color}/>
       );
       return cardsList
}


class Home extends React.Component {

  state={
    cards:[{}]
  }

  componentDidMount(){
    axios.get("/home").then(response=>{
      this.setState({cards: response.data})
      console.log(response.data)
    })
  }

 render(){

    return (
 
    
      <div href="/home" className="container">
        <NavMenu />
        <CardCreator/>
        
        <div className="body">
        {<ListCards cards={this.state.cards}/>}
         </div>
      
      </div>
     
 )}

}

export default Home;
