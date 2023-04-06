import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;
  if (req.method === "PUT") {
    // Process a PUT request
    try {
      const client = await clientPromise;
      if (!client) {
        res.json({ error: "Could not connect to database." });
        return;
      }
      const db = client.db("parkeat_db");
      const result = await db.collection("restaurants").findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: { rating: 1 },
        }
      );
      const { value: restaurant } = result;
      if (restaurant)
        res.json({
          message: `Successfully added document with id ${restaurant._id}`,
        });
      else
        res.json({
          message: `Failed to update details for this restaurant. ${id}`,
        });
    } catch (e) {
      console.error("We couldn't connect to the database.", e);
    }
  } else {
    // Process a GET one restaurant request
    try {
      const client = await clientPromise;
      if (!client) {
        res.json({ error: "Could not connect to database." });
        return;
      }
      const db = client.db("parkeat_db");

      const restaurant = await db
        .collection("restaurants")
        .find({ _id: new ObjectId(id) })
        .toArray();

      res.json({ restaurant });
    } catch (e) {
      console.error("We couldn't connect to the database.", e);
    }
  }
}
