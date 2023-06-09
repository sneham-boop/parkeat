import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  try {

    // Connect to db
    const client = await clientPromise;
    if (!client) {
      res.json({ error: "Could not connect to database." });
      return;
    }
    const db = client.db("parkeat_db");

    // Process a POST request
    if (req.method === "POST") {
      const restaurant = {
        name: "Advait's Burgers",
        description: "Best burgers in town. Definitely not made of beans.",
        lat: 43.496766,
        lng: -79.872682,
        rating: 3.4
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
    }
    
    // Process a POST request
    if (req.method === "GET") {
      const restaurants = await db
        .collection("restaurants")
        .find({})
        .limit(10)
        .toArray();

      res.json(restaurants);
    }
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
}
