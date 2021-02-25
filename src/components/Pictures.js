import React from 'react'
import  NavMenu  from "./NavMenu";
import Phoots from "./Photos";

class Pictures extends React.Component {

   

    render() {
       return (
        <div className="container" id="pictures">
        <NavMenu/>
        <div className="body">
           <Phoots photoURL="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"/>
           <Phoots photoURL="https://images.pexels.com/photos/534124/pexels-photo-534124.jpeg?cs=srgb&dl=pexels-pixabay-534124.jpg&fm=jpg"/>
           <Phoots photoURL="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?cs=srgb&dl=pexels-stas-knop-1626481.jpg&fm=jpg"/>
           <Phoots photoURL="https://images.pexels.com/photos/220320/pexels-photo-220320.jpeg?cs=srgb&dl=pexels-pixabay-220320.jpg&fm=jpg"/>
           <Phoots photoURL="https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?cs=srgb&dl=pexels-lisa-fotios-1161547.jpg&fm=jpg"/>
           <Phoots photoURL="https://images.pexels.com/photos/922470/pexels-photo-922470.jpeg?cs=srgb&dl=pexels-oleg-magni-922470.jpg&fm=jpg"/>
        </div>
     
    </div>
        )
    }
}

export default Pictures