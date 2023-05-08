import styles from "./GoogleMap.module.scss";
import Places from "./Places";
import { useRef, useEffect, useState } from "react";

export default function Map({ data, parkingData }) {
  const ref = useRef();
  const [map, setMap] = useState();
  const [center, setCenter] = useState({ lat: 43.655484, lng: -79.38611 })
  // const defaultLocation = { lat: 43.655484, lng: -79.38611 };

  // const mapOptions = {
  //   mapId: process.env.NEXT_PUBLIC_MAP_ID,
  //   center: center || defaultLocation,
  //   zoom: 14,
  //   disableDefaultUI: true,
  // };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      // setLocation({ lat: latitude, lng: longitude });
      setCenter({ lat: latitude, lng: longitude })
      const mapOptions = {
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        center: { lat: latitude, lng: longitude },
        zoom: 14,
        disableDefaultUI: true,
      };
      setMap(new window.google.maps.Map(ref.current, mapOptions));
    });
    
  }, []);

  // useEffect(()=>{
  //   map && map.setCenter(center); 
  // },[center])

  return (
    <>
      <div
        className={styles.mapContainer}
        ref={ref}
      />
      {map && <Places map={map} data={data} parkingData={parkingData} you={center}/>}
    </>
  );
}