import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import styles from "./GoogleMap.module.scss";
import Map from "./Map";
import useCurrentLocation from "@component/src/hooks/useCurrentLocation";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <h2>Loading</h2>;

    case Status.FAILURE:
      return <h2>Failure</h2>;

    case Status.SUCCESS:
      return <Map />;
  }
};

export default function GoogleMap({ restaurants, parking, currentLocation }) {
  // const { location } = useCurrentLocation();
  // const [currentLocation, setCurrentLocation] = useState(null);
  // const defaultLocation =  currentLocation || {lat: 43.655484, lng: -79.38611 };
  const [restaurantData, setRestaurantData] = useState();
  const [parkingData, setParkingData] = useState();

  useEffect(() => {
    // console.log(restaurants)
    // setCurrentLocation(location);
    setRestaurantData(restaurants);
    setParkingData(parking);
  }, []);

  return (
    <>
      <section className={styles.googleMap}>
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
          version="beta"
          libraries={["marker"]}
          render={render}
        >
          <Map
            center={currentLocation}
            zoom={15}
            data={restaurantData}
            parkingData={parkingData}
          />
        </Wrapper>
      </section>
    </>
  );
}
