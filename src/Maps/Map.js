import React, { useState,  } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as offersInfo from "./offersInfo.json";
import markerIcon from "../img/place.svg";
import RezervationForm from "../Forms/RezervationForm"


function Map(){

    const [selectedPlace, setSelectedPlace] = useState(null);

  
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 54.352024, lng: 18.646639 }}
      >
        {offersInfo.features.map(place => (
          <Marker
            key={place.properties.PARK_ID}
            position={{
              lat: place.geometry.coordinates[0],
              lng: place.geometry.coordinates[1]
            }}
            onClick={() => {
              setSelectedPlace(place);
            }}
            icon={{
              url: markerIcon,
              scaledSize: new window.google.maps.Size(70, 50)
            }}
          />
        ))}
  
        {selectedPlace && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPlace(null);
            }}
            position={{
              lat: selectedPlace.geometry.coordinates[0],
              lng: selectedPlace.geometry.coordinates[1]
            }}
          >
            <div>
              <h2>{selectedPlace.properties.NAME}</h2>
              <RezervationForm/>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );

    

    
}

export default Map;