import React, { Component } from 'react'
import './CardCreator.css'
import axios from 'axios'


class CardCreator extends Component {

    state={
        title:'',
        description:'',
        price:'',
        image:''
    }

    handleChangeTitle=event=>{
        this.setState({title: event.target.value})
    }

    handleChangeDescription=event=>{
        this.setState({description: event.target.value})
    }

    handleChangePrice=event=>{
        this.setState({price: event.target.value})
    }

    handleChangeImage=event=>{
        this.setState({image: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post("/home",{title: this.state.title,price:this.state.price ,description: this.state.description})
            .then((response) => {
                console.log(response.data)
            })
            .catch(e => console.log(e))

           

            
    }

    render() {
        return (
            <div className="cardCreator">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="labelTitle" htmlFor="exampleInputEmail1">Ürünün Adı</label>
                        <input onChange={this.handleChangeTitle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ürünün Adını Giriniz" />
                    </div>
                    <div className="form-group">
                        <label className="labelTitle" htmlFor="exampleInputPassword1">Açıklama</label>
                        <input onChange={this.handleChangeDescription} type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Açıklama Giriniz" />
                    </div>
                    <div className="form-group">
                        <label className="labelTitle" htmlFor="exampleInputPassword1">Fiyat</label>
                        <input onChange={this.handleChangePrice} type="textarea" className="form-control" id="exampleInputPassword1" placeholder="Fiyatı Giriniz" />
                    </div>
                    <div className="form-group">
                        <label className="labelTitle" htmlFor="exampleInputPassword1">Images</label>
                        <input onChange={this.handleChangeImage} type="file"  className="form-control" alt="" placeholder="Enter the images" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}


export default CardCreator