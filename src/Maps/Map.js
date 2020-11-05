import React from 'react';
import { GoogleMap, Marker } from 'react-google-maps';


class Map extends React.Component {

    state = {
        localization: [],
    }


    componentDidMount() {
        fetch('/offers.json')
        .then(r =>  r.json())
        .then(data => this.setState({localization: data}));       
    }



    render(){

        let markersLokalization = this.state.localization.map(e => {
            return e.location.coordinates
        })

        return( 
            <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{ lat: 54.352024, lng: 18.646639 }}
            >
                {markersLokalization.map((location) => {
                    return <Marker
                        position = {{
                            lat: parseFloat(location[0]),
                            lng: parseFloat(location[1])
                        }}
                    />
                })}

            </GoogleMap>    
        )
    }

    
}

export default Map;