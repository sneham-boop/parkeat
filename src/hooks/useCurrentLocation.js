import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useCurrentLocation() {
  const [location, setLocation] = useState({lat: 43.655484, lng: -79.38611 });
  const { getLocalStorage, setLocalStorage } = useLocalStorage();

  useEffect(() => {
    async function getMyLocation(key, value) {
      try {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const inMemoryLocation = await getLocalStorage("parkEatlocation");
          console.log(inMemoryLocation);
          const { latitude, longitude } = position.coords;
          if (
            inMemoryLocation && inMemoryLocation.lat !== latitude &&
            inMemoryLocation && inMemoryLocation.lng !== longitude
          ) {
            setLocation({ lat: latitude, lng: longitude });
            setLocalStorage("parkEatlocation", {
              lat: latitude,
              lng: longitude,
            });
          } else {
            setLocalStorage("parkEatlocation", {
              lat: latitude,
              lng: longitude,
            });
          }
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
