import GoogleMap from "@component/src/components/GoogleMap";
import ShowPlaces from "@component/src/components/ShowPlaces";
import { useEffect } from "react";
// import clientPromise from "../../lib/mongodb";

export default function places(props) {
  const { restaurants } = props;

  useEffect(() => {
    console.log(restaurants);
  }, []);

  return (
    <section className="places">
      <GoogleMap restaurants={restaurants} />
      <ShowPlaces places={restaurants} />
    </section>
  );
}

export async function getServerSideProps() {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=restaurants
&location=${43.4933287}%2C${-79.8715537}
&radius=500
&type=restaurant
&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;
  try {
    const response = await fetch(url);
    const { results } = await response.json();
    return {
      props: {
        restaurants: JSON.parse(JSON.stringify(results)),
      },
    };
  } catch (error) {
    console.error("We couldn't find places for you.", error);
  }
}
