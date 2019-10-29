import { NowRequest, NowResponse } from "@now/node";
import { db } from "../_utils/db";

export default (req: NowRequest, res: NowResponse) => {
  console.log(":: /api/customers/delete", { body: req.body });
  const { id } = req.body;
  db.query(`DELETE FROM customer WHERE id = ${id}`)
    .then(() => {
      // facepalm
      return res.json("OK");
    })
    .catch(console.error);
};
