import React from "react"

class Photos extends React.Component{
    render(){
        return(
            <img key={this.props.photoURL} alt="" style={{margin:"10px",width:"300px", height:"300px", borderRadius:"30px"}} src={this.props.photoURL}/>
        )
    }
}

export default Photos