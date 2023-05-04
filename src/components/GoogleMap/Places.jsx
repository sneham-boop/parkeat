import Marker from "./Marker";
import styles from "./GoogleMap.module.scss";
import { useState } from "react";

export default function Places({ map, data, parkingData }) {
  // const [data, setData] = useState(placeData);
  const [hover, setHover] = useState(null);

  const showPlaces = () => {
    return data.map((place, key) => {
      // console.log(place.geometry.location);
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
            onClick={() => console.log("I was clicked.", place.place_id)}
            style={{ backgroundColor: "#FF8A65" }}
          >
            <img src="/restaurantIcon.svg"></img>
            {hover === place.place_id && <span>{place.name}</span>}
          </div>
        </Marker>
      );
    });
  };
  const showParkingPlaces = () => {
    return parkingData.map((place, key) => {
      // console.log(place.geometry.location);
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
            onClick={() => console.log("I was clicked.", place.place_id)}
            style={{ backgroundColor: "#242C2E" }}
          >
            <img src="/garageIcon.svg"></img>
            {hover === place.place_id && (
              <span>{hover === place.place_id && place.name}</span>
            )}
          </div>
        </Marker>
      );
    });
  };
  return (
    <>
      {data && showPlaces()}
      {parkingData && showParkingPlaces()}
    </>
  );
}

// const placeData = {
//   A: {
//     name: "Bob's Burgers",
//     position: { lat: 43.7027104, lng: -79.3996452 },
//     rating: 4.5,
//     cuisine: "American",
//   },
//   B: {
//     name: "Bob's Bananas",
//     position: { lat: 43.629669, lng: -80.1018147 },
//     rating: 4.5,
//     cuisine: "American",
//   },
//   C: {
//     name: "Bob's Cakes",
//     position: { lat: 43.497006, lng: -79.874574 },
//     rating: 4.5,
//     cuisine: "American",
//   },
// };
