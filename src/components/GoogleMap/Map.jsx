import useCurrentLocation from "@component/src/hooks/useCurrentLocation";
import styles from "./GoogleMap.module.scss";
import Places from "./Places";
import { useRef, useEffect, useState, useMemo } from "react";

export default function Map() {
  const ref = useRef();
  const [map, setMap] = useState();
  const { location } = useCurrentLocation();
  const [center, setCenter] = useState(location);

  const [restaurantData, setRestaurantData] = useState([]);
  const [parkingData, setParkingData] = useState([]);

  useEffect(() => {
    const mapOptions = {
      mapId: process.env.NEXT_PUBLIC_MAP_ID,
      center: center,
      zoom: 14,
      // disableDefaultUI: true,
    };
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  useEffect(() => {
    const getPlacesData = async (data) => {
      const response = await fetch("/api/currentRestaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const responseJson = await response.json();
      setParkingData(responseJson.parkingResults);
      setRestaurantData(responseJson.restaurantsResults);
    };

    getPlacesData(location);
  }, []);

  return (
    <>
      <div className={styles.mapContainer} ref={ref} />
      {map && (
        <Places
          map={map}
          data={restaurantData}
          parkingData={parkingData}
          you={location}
        />
      )}
    </>
  );
}
