export default function handler(req, res) {
  res.status(200).json({ key: process.env.REACT_APP_MAP_API_KEY })
}