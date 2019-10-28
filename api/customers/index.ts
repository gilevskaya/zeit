import { NowRequest, NowResponse } from "@now/node";
import { db } from "../_utils/db";

const text = "INSERT INTO customer(name, email) VALUES($1, $2) RETURNING *";

export default (req: NowRequest, res: NowResponse) => {
  console.log(":: /api/customers", { body: req.body });
  const rand = Math.floor(Math.random() * 90000) + 10000;
  db.query(text, [`${rand}`, `${rand}@ex.com`])
    .then(({ rows }) => {
      return res.json(rows);
    })
    .catch(console.error);
};
