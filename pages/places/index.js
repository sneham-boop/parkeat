import GoogleMap from "@component/src/components/GoogleMap";
// import clientPromise from "../../lib/mongodb";

export default function places(props) {
  const { restaurants } = props;
  console.log(restaurants);
  return (
    <section className="places">
      <GoogleMap restaurants={restaurants} />
    </section>
  );
}

export async function getServerSideProps() {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=restaurants
&location=${43.4933287}%2C${-79.8715537}
&radius=500
&type=restaurant
&key=${process.env.REACT_APP_MAP_API_KEY}`;
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

  // // Get data from the database
  // try {
  //   const client = await clientPromise;
  //   if (!client) {
  //     res.json({ error: "Could not connect to database." });
  //     return;
  //   }
  //   const db = client.db("sample_airbnb");

  //   const listings = await db
  //     .collection("listingsAndReviews")
  //     .find({})
  //     .limit(10)
  //     .toArray();
  //   // console.log(listings);
  //   return {
  //     props: {
  //       listings: JSON.parse(JSON.stringify(listings)),
  //     },
  //   };
  // } catch (e) {
  //   console.error("We couldn't connect to the database.", e);
  // }
}
