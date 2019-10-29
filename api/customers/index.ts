import { NowRequest, NowResponse } from "@now/node";
import { db } from "../_utils/db";

export default (req: NowRequest, res: NowResponse) => {
  console.log(":: /api/customers", { body: req.body });
  const { name, email } = req.body;
  db.query(
    `INSERT INTO customer(name, email) VALUES($${name}, $${email}) RETURNING *`
  )
    .then(({ rows }) => {
      return res.json(rows);
    })
    .catch(console.error);
};
