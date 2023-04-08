import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const { id } = req.query;

  try {

    // Connect to db
    const client = await clientPromise;
    if (!client) {
      res.json({ error: "Could not connect to database." });
      return;
    }
    const db = client.db("parkeat_db");

    // Process a PUT request
    if (req.method === "PUT") {
      const result = await db.collection("parking_spots").findOneAndUpdate(
        {
          _id: new ObjectId(id),
        },
        {
          $set: { rating: 7 },
        }
      );
      const { value: parking_spot } = result;
      if (parking_spot)
        res.json({
          message: `Successfully updated parking spot with id ${parking_spot._id}`,
        });
      else
        res.json({
          message: `Failed to update details for this parking spot. ${id}`,
        });
    }

    // Process a GET request
    if (req.method === "GET") {
      const parking_spot = await db
        .collection("parking_spots")
        .find({ _id: new ObjectId(id) })
        .toArray();

      res.json({ parking_spot });
    }

    // Process a DELETE request
    if (req.method === "DELETE") {
      const result = await db
        .collection("parking_spots")
        .deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 1) {
        res.json({ message: "Successfully deleted one document." });
      } else {
        res.json({
          message: "No documents matched the query. Deleted 0 documents.",
        });
      }
    }
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
}
