import axios from 'axios'
import React from 'react'
import './Card.css'

class Card extends React.Component {

    constructor(){
        super()
        this.state={
              currentClass:'cardBody'
        }
    }
 
   changeColor=()=>{
    //    console.log(this.props.CardHeader.toLowerCase())
    if(this.state.currentClass==="cardBody"){
        this.setState({currentClass: this.props.CardHeader.toLowerCase()})
    }else{
        this.setState({currentClass: "cardBody"})
    }
   }
   

   deleteItem=()=>{
       axios.delete(`/home/${this.props.id}`).then(response=>console.log(response.data))
   }

    render() {
       return (
            <div>
            <div className={this.state.currentClass}>
                <h3 onClick={this.changeColor}>{this.props.CardHeader}</h3>
                <p>{this.props.CardDescription}</p>
                <button onClick={this.deleteItem} className='btn btn-danger'>DELETE</button>
                </div>
            </div>
        )
    }
}

export default Card
