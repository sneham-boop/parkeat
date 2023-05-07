import GoogleMap from "@component/src/components/GoogleMap";
import useCurrentLocation from "../../src/hooks/useCurrentLocation";
import { useEffect, useState } from "react";

export default function Places(props) {
  const { restaurants, parking } = props;
  const { location } = useCurrentLocation();
  const [currentLocation, setCurrentLocation] = useState(location);

  useEffect(() => {
    // console.log("I'm in useEffect for pages.", currentLocation, location);
    setCurrentLocation(location);
  }, [location]);
  // console.log("Got location in pages",currentLocation, location);
  return (
    <section className="places">
      <GoogleMap
        restaurants={restaurants}
        parking={parking}
        currentLocation={currentLocation}
      />
    </section>
  );
}

export async function getServerSideProps(context) {
  //     const getUrl = (
  //       type
  //     ) => `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${type}&location=${43.655484}%2C${-79.38611}&radius=5000&type=${type}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;
  // // console.log("I got a position from the homepage", JSON.stringify(context.req.body));
  const getUrl = (type) =>
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}%20near%20me&radius=400&type=${type}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;

  try {
    // console.log("Links: ", getUrl("restaurant"), getUrl("parking"));
    const restaurantsResponse = await fetch(getUrl("restaurant"));
    const { results: restaurantsResults } = await restaurantsResponse.json();

    const parkingResponse = await fetch(getUrl("parking"));
    const { results: parkingResults } = await parkingResponse.json();
    // console.log("Google Maps API response",restaurantsResults, parkingResults);
    return {
      props: {
        restaurants: JSON.parse(JSON.stringify(restaurantsResults)),
        parking: JSON.parse(JSON.stringify(parkingResults)),
      },
    };
  } catch (error) {
    console.error("We couldn't find places for you.", error);
    return {
      props: {},
    };
  }
}
