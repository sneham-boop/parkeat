import GoogleMap from "@component/src/components/GoogleMap";
import clientPromise from "../../lib/mongodb";

export default function places(props) {
  const { listings } = props;
  console.log(listings);
  return (
    <section className="places">
      <h2>You are in places</h2>
      <GoogleMap />
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    if (!client) {
      res.json({ error: "Could not connect to database." });
      return;
    }
    const db = client.db("sample_airbnb");

    const listings = await db
      .collection("listingsAndReviews")
      .find({})
      .limit(10)
      .toArray();
    // console.log(listings);
    return {
      props: {
        listings: JSON.parse(JSON.stringify(listings)),
      },
    };
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
}
