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
      const parking_spot = {
        name: "Advait's parking",
        description: "Best parking in town. Definitely safe.",
        lat: 43.496766,
        lng: -79.872682,
      };
      const result = await db.collection("parking_spots").insertOne(parking_spot);
      if (result.insertedId)
        res.json({
          message: `Successfully added document with id ${result.insertedId}`,
        });
      else
        res.json({
          message: `Failed to add new parking_spot.`,
        });
    }
    
    // Process a POST request
    if (req.method === "GET") {
      const parking_spots = await db
        .collection("parking_spots")
        .find({})
        .limit(10)
        .toArray();

      res.json(parking_spots);
    }
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
}
