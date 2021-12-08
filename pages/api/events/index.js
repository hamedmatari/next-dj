const { events } = require("./data.json");
export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Methos ${req.method} is not allowed` });
  }
}
