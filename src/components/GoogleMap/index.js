import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useGoogleMapsAPI from "../../hooks/useGoogleMapsAPI";
import Markers from "./Markers";
import styles from "./GoogleMap.module.scss";

export default function GoogleMap(props) {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const { getAPIKey } = useGoogleMapsAPI();
  const [key, setKey] = useState(null);

  // Show restaurants if they exist
  const { restaurants } = props;
  const showPlaces = (places) => {
    const placesArray = Object.values(places);
    return placesArray.map((place, id) => (
      <Markers
        key={id}
        id={id}
        name={place.name}
        description="Restaurant"
        lat={place.geometry.location.lat}
        lng={place.geometry.location.lng}
      />
    ));
  };
  const defaultLocation = { lat: 43.6532, lng: -79.3832 };
  const [location, setLocation] = useState(
    getLocalStorage("location") || defaultLocation
  );
  // const [mapAPILoaded, setMapAPILoaded] = useState(false);
  // const [map, setMap] = useState(null);
  // const [mapAPI, setMapAPI] = useState(null);

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
    getAPIKey().then((key) => {
      setKey(key);
    });
  }, []);

  // const handleApiLoaded = (map, maps) => {
  //   setMapAPILoaded(true);
  //   setMap(map);
  //   setMapAPI(maps);
  // };

  // const data = {
  //   map,
  //   mapAPI,
  //   mapAPILoaded,
  //   location,
  // };

  return (
    <div className={styles.mapContainer}>
      <h2>Let's find some restaurants for you.</h2>
      <div
        id={styles.map}
        style={{
          width: "80vw",
          height: "50vh",
          borderRadius: "1.5rem",
          overflow: "hidden",
        }}
      >
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
            // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            {...props}
          >
            <Markers
              lat={location.lat}
              lng={location.lng}
              id="Me"
              description="You are here!"
            />
            {restaurants && showPlaces(restaurants)}
          </GoogleMapReact>
        )}
      </div>
    </div>
  );
}
