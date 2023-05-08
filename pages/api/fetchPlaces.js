export default async function handler (req, res) {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=restaurants
&location=${43.4933287}%2C${-79.8715537}
&radius=500
&type=restaurant
&key=${process.env.REACT_APP_MAP_API_KEY}`;

  try {
    const response = await fetch(url);
    const { results } = await response.json();
    res.json({places: results});
  } catch (e) {
    console.error(
      "We couldn't find the places on google maps that you were looking for.",
      e
    );
  }
};
