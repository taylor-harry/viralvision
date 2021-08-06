import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as covidData from "../data/covid.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const MapWrapper = styled.div`
   position: absolute; 
   top: 0; bottom: 0; 
   width: 100%;
`;

const PopUpTitle = styled.h3`
   color: black;
   background-color: white;
   text-align: left;
` 
const PopDescription = styled.a`
   color: black;
   background-color: white;
   text-align: left;
   font-size: 12px;
` 
const PopContainer = styled.div`
  display: grid;
  grid-column-rows: 2fr 1fr 1fr 1fr 1fr;
`

export default function Map() {
  const [hasError, setErrors] = useState(false);
  const [mapLocations, setMapLocations] = useState([]);



  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://corona-api.com/countries"
      );
      res
        .json()
        .then(data => console.log("fetch",data.data))
        .then(data => setMapLocations(...mapLocations, data['data']))
        .catch((err) => setErrors(err));
    }
    
    fetchData();
  },[]);

  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 1,
    width: "100vw",
    height: "100vh",
  });
  
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);


  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidGF5a29rbyIsImEiOiJjazk5MjN5b3IwMXliM2dud3hsMmZkZDQxIn0.1Fg81tmd900x1uN8eciCPw"
        mapStyle="mapbox://styles/taykoko/ckk8373gw0j5417qj5vfuzb8o"
        onViewportChange={(viewport) => {
          // for when user moves and zooms map, this will change the variables and rerender
          setViewport(viewport);
        }}
      >
        {covidData.data.map((locationItem) => (
          
          <Marker
            key={locationItem["code"]}
            latitude={(locationItem.coordinates.latitude)}
            longitude={(locationItem.coordinates.longitude)}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(locationItem);
              }}
            >
              <div className="fa-icon" style={{fontSize:locationItem.latest_data["confirmed"]/100000+20}}>
                <FontAwesomeIcon icon={faCircle} color="red" />
              </div>
            </button>
          </Marker>
         
        ))}
        {selectedCountry ? (
          <Popup
            className="map-popup"
            latitude={(selectedCountry["coordinates"]["latitude"])}
            longitude={(selectedCountry["coordinates"]["longitude"])}
            onClose={() => {
              setSelectedCountry(null);
            }}
          >
            <PopContainer>
              <PopUpTitle>{selectedCountry["name"]}</PopUpTitle>
              <PopDescription>CONFIRMED : {selectedCountry.latest_data["confirmed"]}</PopDescription>
              <PopDescription>RECOVERED : {selectedCountry.latest_data["recovered"]}</PopDescription>
              <PopDescription>CRITICAL : {selectedCountry.latest_data["critical"]}</PopDescription>
              <PopDescription>DEATHS : {selectedCountry.latest_data["deaths"]}</PopDescription>
            
            </PopContainer>
          </Popup>
        ) : null}
      </ReactMapGL>
    </MapWrapper>
  );
}
