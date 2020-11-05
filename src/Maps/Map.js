import React from 'react';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';


class Map extends React.Component {

    state = {
        offersInfo: [],
    }


    componentDidMount() {
        fetch('/offers.json')
        .then(r =>  r.json())
        .then(data => this.setState({offersInfo: data}));       
    }
    

    render(){
        
        

        let markersLokalization = this.state.offersInfo.map(e => {
            return e.location.coordinates
        })

        return( 
            <GoogleMap 
            defaultZoom={11} 
            defaultCenter={{ lat: 54.352024, lng: 18.646639 }}
            >
                {markersLokalization.map((location) => {
                    return (
                    <>
                        <Marker
                        position = {{
                            lat: parseFloat(location[0]),
                            lng: parseFloat(location[1])
                        }}
                        onClick={() => {
                            return <InfoWindow

                            >
                                <div>info</div>
                            </InfoWindow>
                                                        
                        }}
                        />

                        

                    </>
                    )
                    
                })}

            </GoogleMap>    
        )
    }

    
}

export default Map;