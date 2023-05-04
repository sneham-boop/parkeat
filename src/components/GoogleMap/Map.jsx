import styles from "./GoogleMap.module.scss";
import Places from "./Places";
import { useRef, useEffect, useState } from "react";

export default function Map({ data, center, parkingData }) {
  const ref = useRef();
  const [map, setMap] = useState();
  // const defaultLocation = { lat: 43.6532, lng: -79.3832 };

  const mapOptions = {
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    center: center,
    zoom: 14,
    disableDefaultUI: true,
  };

  useEffect(() => {
    setMap(new window.google.maps.Map(ref.current, mapOptions));
  }, []);

  return (
    <>
      <div
        className={styles.mapContainer}
        ref={ref}
      />
      {map && <Places map={map} data={data} parkingData={parkingData} />}
    </>
  );
}