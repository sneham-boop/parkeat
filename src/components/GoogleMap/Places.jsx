import Marker from "./Marker";
import styles from "./GoogleMap.module.scss";
import { useState } from "react";

export default function Places({ map, data, parkingData, you }) {
  // const [data, setData] = useState(placeData);
  const [hover, setHover] = useState(null);

  const showPlaces = () => {
    return data.map((place, key) => {
      // console.log(place.geometry.location);
      let url = `https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}`;
      return (
        <Marker
          key={place.place_id}
          map={map}
          position={place.geometry.location}
        >
          <div
            className={`${styles.marker} ${
              hover === place.place_id ? styles.hover : ""
            }`}
            onMouseEnter={() => setHover(place.place_id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setHover(place.place_id)}
            style={{ backgroundColor: "#FF8A65" }}
          >
            <img src="/restaurantIcon.svg"></img>
            {hover === place.place_id && <span>{place.name}</span>}
            {hover === place.place_id && <a href={url} target="_blank">Open in Maps</a>}
          </div>
        </Marker>
      );
    });
  };
  const showParkingPlaces = () => {
    return parkingData.map((place, key) => {
      if (place.rating > 0) {
        let url = `https://www.google.com/maps/search/?api=1&query=${place.name}&query_place_id=${place.place_id}`;
        return (
          <Marker
            key={place.place_id}
            map={map}
            position={place.geometry.location}
          >
            <div
              className={`${styles.marker} ${
                hover === place.place_id ? styles.hover : ""
              }`}
              onMouseEnter={() => setHover(place.place_id)}
              onMouseLeave={() => setHover(null)}
              onClick={() => setHover(place.place_id)}
              style={{ backgroundColor: "#242C2E" }}
            >
              <img src="/garageIcon.svg"></img>
              <span>{hover === place.place_id && place.name}</span>
              {hover === place.place_id && <a href={url} target="_blank">Open in Maps</a>}
            </div>
          </Marker>
        );
      }
    });
  };
  const showYou = () => {
    const youID = 12345;
    return(
      <Marker
      map={map}
      position={you}
      key={youID}
    >
      <div
        className={`${styles.marker} ${
          hover === youID ? styles.hover : ""
        }`}
        onMouseEnter={() => setHover(youID)}
        onMouseLeave={() => setHover(null)}
        onClick={() => setHover(youID)}
        style={{ backgroundColor: "#2476EB" }}
      >
        <img src="/youIcon.svg"></img>
        {hover === youID && <span>You are here!</span>}
      </div>
    </Marker>
    );
  }
  return (
    <>
      {data && showPlaces()}
      {parkingData && showParkingPlaces()}
      {showYou()}
    </>
  );
}


