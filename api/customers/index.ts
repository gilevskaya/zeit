import { NowRequest, NowResponse } from "@now/node";
import { db } from "../_utils/db";

const text = "INSERT INTO customer(name, email) VALUES($1, $2) RETURNING *";

export default (req: NowRequest, res: NowResponse) => {
  console.log(":: /api/customers", { body: req.body });
  const { name, email } = req.body;
  db.query(text, [name, email])
    .then(({ rows }) => {
      return res.json(rows);
    })
    .catch(console.error);
};
