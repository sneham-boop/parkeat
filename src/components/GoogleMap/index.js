import React, { useState, useEffect, useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import styles from "./GoogleMap.module.scss";
import { createRoot } from "react-dom/client";

const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <h2>Loading</h2>;

    case Status.FAILURE:
      return <h2>Failure</h2>;

    case Status.SUCCESS:
      return <MyMap />;
  }
};

export default function GoogleMapp() {
  const defaultLocation = { lat: 43.6532, lng: -79.3832 };

  return (
    <>
      <h2>Let&apos;s find some restaurants for you.</h2>
      <Wrapper
        apiKey={process.env.NEXT_PUBLIC_MAP_API_KEY}
        version="beta"
        libraries={["marker"]}
        render={render}
      >
        <MyMap center={defaultLocation} zoom={15} />
      </Wrapper>
    </>
  );
}

const placeData = {
  A: {
    name: "Bob's Burgers",
    position: { lat: 43.7027104, lng: -79.3996452 },
    rating: 4.5,
    cuisine: "American",
  },
  B: {
    name: "Bob's Bananas",
    position: { lat: 43.629669,lng: -80.1018147 },
    rating: 4.5,
    cuisine: "American",
  },
  C: {
    name: "Bob's Cakes",
    position: { lat: 43.497006, lng: -79.874574 },
    rating: 4.5,
    cuisine: "American",
  },
};

function Marker({ map, children, position }) {
  const markerRef = useRef();
  const rootRef = useRef();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container);
      markerRef.current = new google.maps.marker.AdvancedMarkerView({
        position,
        content: container,
      });
    }
  }, []);

  useEffect(() => {
    rootRef.current.render(children);
    markerRef.current.position = position;
    markerRef.current.map = map;
  }, [map, position, children]);
}

function Places({ map }) {
  const [data, setData] = useState(placeData);

  const showPlaces = () => {
    return Object.entries(data).map(([key, place]) => {
      return (
        <Marker key={key} map={map} position={place.position}>
          <div className={styles.marker}>
            <p>{place.name}</p>
          </div>
        </Marker>
      );
    });
  };

  return <>{showPlaces()}</>;
}

function MyMap({ center, zoom }) {
  const ref = useRef();
  const [map, setMap] = useState();
  const defaultLocation = { lat: 43.6532, lng: -79.3832 };

  const mapOptions = {
    mapId: process.env.NEXT_PUBLIC_MAP_ID,
    center: defaultLocation,
    zoom: 10,
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
        id="map"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />
      {map && <Places map={map} />}
    </>
  );
}
