import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";
import * as offersInfo from "./offersInfo.json";
import markerIcon from "../img/place.svg"


function Map(){

    const [selectedPark, setSelectedPark] = useState(null);

    useEffect(() => {
      const listener = e => {
        if (e.key === "Escape") {
          setSelectedPark(null);
        }
      };
      window.addEventListener("keydown", listener);
  
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
  
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 54.352024, lng: 18.646639 }}
        // defaultOptions={{ styles: mapStyles }}
      >
        {offersInfo.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            position={{
              lat: park.geometry.coordinates[0],
              lng: park.geometry.coordinates[1]
            }}
            onClick={() => {
              setSelectedPark(park);
            }}
            icon={{
              url: markerIcon,
              scaledSize: new window.google.maps.Size(70, 50)
            }}
          />
        ))}
  
        {selectedPark && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedPark(null);
            }}
            position={{
              lat: selectedPark.geometry.coordinates[0],
              lng: selectedPark.geometry.coordinates[1]
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );

    

    
}

export default Map;