import GoogleMap from "@component/src/components/GoogleMap";
import ShowPlaces from "@component/src/components/ShowPlaces";
// import clientPromise from "../../lib/mongodb";

export default function places(props) {
  const { restaurants, parking } = props;

  return (
    <section className="places">
      <GoogleMap restaurants={restaurants} parking={parking} />
      <ShowPlaces places={restaurants} />
      <ShowPlaces places={parking} />
    </section>
  );
}

export async function getServerSideProps() {
  //   const getUrl = (
  //     type
  //   ) => `https://maps.googleapis.com/maps/api/place/nearbysearch/json
  // ?keyword=${type}
  // &location=${43.4933287}%2C${-79.8715537}
  // &radius=500
  // &type=${type}
  // &key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;

  const getUrl = (
    type
  ) => `https://maps.googleapis.com/maps/api/place/textsearch/json
?query=${type}%20in%20Toronto
&radius=500
&type=${type}
&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;

  try {
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
  }
}
