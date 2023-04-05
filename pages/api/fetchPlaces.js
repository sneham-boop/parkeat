export default async (req, res) => {
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json
?keyword=restaurants
&location=${43.4933287}%2C${-79.8715537}
&radius=500
&type=restaurant
&key=${process.env.REACT_APP_MAP_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log("Here's the data you received from Google Maps", data);
    res.json(data);
  } catch (e) {
    console.error(
      "We couldn't find the places on google maps that you were looking for.",
      e
    );
  }
};
