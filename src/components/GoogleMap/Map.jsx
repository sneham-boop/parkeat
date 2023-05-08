import styles from "./GoogleMap.module.scss";
import Places from "./Places";
import { useRef, useEffect, useState } from "react";

export default function Map() {
  const ref = useRef();
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 43.655484, lng: -79.38611 });
  const [restaurantData, setRestaurantData] = useState([]);
  const [parkingData, setParkingData] = useState([]);

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
      console.log(responseJson);
    };

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      setCenter({ lat: latitude, lng: longitude });
      const mapOptions = {
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        center: { lat: latitude, lng: longitude },
        zoom: 14,
        disableDefaultUI: true,
      };
      getPlacesData({ lat: latitude, lng: longitude });
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    });
  }, []);

  return (
    <>
      <div className={styles.mapContainer} ref={ref} />
      {map && (
        <Places map={map} data={restaurantData} parkingData={parkingData} you={center} />
      )}
    </>
  );
}
