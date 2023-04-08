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
      const user = {
        name: "Advait Raje",
        username: "advait",
        password: "advait",
        parking_spots: [],
        restaurants: [],
      };
      const result = await db.collection("users").insertOne(user);
      if (result.insertedId)
        res.json({
          message: `Successfully added document with id ${result.insertedId}`,
        });
      else
        res.json({
          message: `Failed to add new user.`,
        });
    }

    // Process a POST request
    if (req.method === "GET") {
      const users = await db
        .collection("users")
        .find({})
        .limit(10)
        .toArray();

      res.json(users);
    }
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
}
