import { NowRequest, NowResponse } from "@now/node";
import { db } from "../_utils/db";

export default (_req: NowRequest, res: NowResponse) => {
  db.query("SELECT * FROM customer;")
    .then(({ rows }) => {
      return res.json(rows);
    })
    .catch(console.error);
};
