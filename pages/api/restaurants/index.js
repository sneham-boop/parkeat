import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    try {
      const client = await clientPromise;
      if (!client) {
        res.json({ error: "Could not connect to database." });
        return;
      }
      const db = client.db("parkeat_db");
      const restaurant = {
        name: "Advait's Burgers",
        description: "Best burgers in town. Definitely not made of beans.",
        lat: 43.496766,
        lng: -79.872682,
      };
      const result = await db.collection("restaurants").insertOne(restaurant);
      if (result.insertedId)
        res.json({
          message: `Successfully added document with id ${result.insertedId}`,
        });
      else
        res.json({
          message: `Failed to add new restaurant.`,
        });
    } catch (e) {
      console.error("We couldn't connect to the database.", e);
    }
  } else {
      // Process a GET request
    try {
      const client = await clientPromise;
      if (!client) {
        res.json({ error: "Could not connect to database." });
        return;
      }
      const db = client.db("parkeat_db");

      const listings = await db
        .collection("restaurants")
        .find({})
        .limit(10)
        .toArray();

      res.json(listings);
    } catch (e) {
      console.error("We couldn't connect to the database.", e);
    }
  }
}
