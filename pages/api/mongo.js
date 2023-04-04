import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
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

    res.json(listings);
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
};
