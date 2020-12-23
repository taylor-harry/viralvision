import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as covidData from "../data/covid.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVirus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const MapWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export default function Map() {
  const [hasError, setErrors] = useState(false);
  const [mapLocations, setMapLocations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.covid19api.com/dayone/country/new-zealand"
      );
      res
        .json()
        .then((res) => setMapLocations(res))
        .catch((err) => setErrors(err));
    }

    fetchData();
  });

  const [viewport, setViewport] = useState({
    latitude: 29.5328,
    longitude: 145.4915,
    zoom: 2,
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
        mapStyle="mapbox://styles/taykoko/ck994e8ha0it21ipk4gs0j3pd"
        onViewportChange={(viewport) => {
          // for when user moves and zooms map, this will change the variables and rerender
          setViewport(viewport);
        }}
      >
        {mapLocations.map((covid) => (
          <Marker
            key={covid["CountryCode"]}
            latitude={parseInt(covid["Lat"])}
            longitude={parseInt(covid["Lon"])}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(covid);
              }}
            >
              <div className="fa-icon">
                <FontAwesomeIcon icon={faVirus} color="#cc0000" />
              </div>
            </button>
          </Marker>
        ))}
        {selectedCountry ? (
          <Popup
            className="map-popup"
            latitude={parseInt(selectedCountry["Lat"])}
            longitude={parseInt(selectedCountry["Lon"])}
            onClose={() => {
              setSelectedCountry(null);
            }}
          >
            <div>
              <h2>{selectedCountry["Country"]}</h2>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </MapWrapper>
  );
}
