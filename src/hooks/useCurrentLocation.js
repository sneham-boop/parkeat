import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useCurrentLocation() {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const [location, setLocation] = useState(
    getLocalStorage("parkEatlocation") || { lat: 43.655484, lng: -79.38611 }
  );
 

  useEffect(() => {
    async function getMyLocation(key, value) {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          setLocalStorage("parkEatlocation", {
            lat: latitude,
            lng: longitude,
          });
          setLocation({
            lat: latitude,
            lng: longitude,
          });
        });
      } catch (err) {
        console.log(
          `ERROR: While setting local storage for key value pair: ${key} & ${value}`,
          err
        );
      }
    }

    getMyLocation();
  }, []);

  return { location };
}
