
export default async function handler(req, res) {
  const { body } = req;
  // console.log("I got body.", body);
  const { lat, lng } = body;
  const getUrl = (type) =>
    // `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${type}%20near%20me&radius=400&type=${type}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=${type}&location=${lat}%2C${lng}&radius=5000&type=${type}&key=${process.env.NEXT_PUBLIC_MAP_API_KEY}`;

  try {
    // Process a POST request
    if (req.method === "POST") {
      const restaurantsResponse = await fetch(getUrl("restaurant"));
      const { results: restaurantsResults } = await restaurantsResponse.json();

      const parkingResponse = await fetch(getUrl("parking"));
      const { results: parkingResults } = await parkingResponse.json();
      res.json({
        restaurantsResults,
        parkingResults,
      });
    }
  } catch (e) {
    console.error("We couldn't connect to the database.", e);
  }
}
