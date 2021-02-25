import React, { Component } from 'react'
import './CardCreator.css'
import axios from 'axios'


class CardCreator extends Component {

    state={
        color:'',
        description:'',
        image:''
    }

    handleChangeColor=event=>{
        this.setState({color: event.target.value})
    }

    handleChangeDescription=event=>{
        this.setState({description: event.target.value})
    }

    handleChangeImage=event=>{
        this.setState({image: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post("/home",{color: this.state.color, description: this.state.description})
            .then((response) => {
                console.log(response.data)
            })
            .catch(e => console.log(e))

            axios.get("/home").then(response=>{
                this.setState({cards: response.data})
              })

            
    }

    render() {
        return (
            <div className="cardCreator">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="labelTitle" for="exampleInputEmail1">Color Name</label>
                        <input onChange={this.handleChangeColor} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter a color name" />
                    </div>
                    <div className="form-group">
                        <label className="labelTitle" for="exampleInputPassword1">Description</label>
                        <input onChange={this.handleChangeDescription} type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Enter your feels about the color you entered" />
                    </div>
                    <div className="form-group">
                        <label className="labelTitle" for="exampleInputPassword1">Images</label>
                        <input onChange={this.handleChangeImage} type="file"  className="form-control" alt="" placeholder="Enter the images" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}


export default CardCreator