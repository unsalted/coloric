import { getUnsplash } from "./load";

export default async (req, res) => {req
    let color = req.query.color;
    let query = req.query.query;
  try {
    res.json(await getUnsplash({ color, query }));
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load users");
  }
};
