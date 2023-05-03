import Marker from "./Marker";
import styles from "./GoogleMap.module.scss";

export default function Places({ map, data }) {
  // const [data, setData] = useState(placeData);

  const showPlaces = () => {
    return data.map((place, key) => {
      return (
        <Marker key={key} map={map} position={place.geometry.location}>
          <div className={styles.marker}>
            <p>{place.name}</p>
          </div>
        </Marker>
      );
    });
  };
  return <>{showPlaces()}</>;
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
