import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';


class Map extends React.Component {

    state = {
        localization: []
    }

    componentDidMount() {
        fetch('/offers.json')
        .then(r =>  r.json())
        .then(data => {
            data.map((localizationData) => {
                this.setState({
                    localization: localizationData.location.coordinates
                })
            })
        });
    }



    render(){
        // console.log(this.state.localization[0])
        return( 
            <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{ lat: 54.352024, lng: 18.646639 }}
            >
                
                {this.state.localization.map((baza) => {

                })}
                
            

                

                
            </GoogleMap>    
        )
    }

    
}

export default Map;