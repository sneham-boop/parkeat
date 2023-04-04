import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useGoogleMapsAPI from "../../hooks/useGoogleMapsAPI";

export default function GoogleMap(props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const { getAPIKey } = useGoogleMapsAPI();
  const [key, setKey] = useState(null);

  const defaultLocation = { lat: 43.6532, lng: -79.3832 };
  const [location, setLocation] = useState(
    getLocalStorage("location") || defaultLocation
  );
  const [mapAPILoaded, setMapAPILoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [mapAPI, setMapAPI] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lng: longitude });
      setLocalStorage("location", { lat: latitude, lng: longitude });
    });
  };

  // Current location setting
  useEffect(() => {
    getCurrentLocation();
    return function cleanup() {
      getCurrentLocation();
    };
  });

  // Maps api key setting
  useEffect(() => {
    getAPIKey()
    .then((key)=>{
      setKey(key);
    });    
  });

  const handleApiLoaded = (map, maps) => {
    setMapAPILoaded(true);
    setMap(map);
    setMapAPI(maps);
  };

  const data = {
    map,
    mapAPI,
    mapAPILoaded,
    location,
  };

  return (
    <div id="map" style={{ width: "30vw", height: "50vh" }}>
      <h2>This is the map.</h2>
      {key && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: key,
            libraries: ["places"],
          }}
          defaultCenter={defaultLocation}
          center={location}
          zoom={15}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          {...props}
        ></GoogleMapReact>
      )}
    </div>
  );
}
