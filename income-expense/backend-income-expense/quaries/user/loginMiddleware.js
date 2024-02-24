import fs from "fs";
import { compareHash } from "../../util/password-hash.js";
import { client } from "../../index.js";

export const loginMiddleWare = async (req, res, next) => {
  const query = `SELECT * FROM userIncome WHERE email = $1`;

  try {
    const { password, email } = req.body;
    const respons = await client.query(query, [email]);
    console.log(respons.rows);
    // if (!exactUser) {
    //   res.status(400).send("wrong username or password");
    //   return;
    // }
    const comparePassword = compareHash(password, respons.rows[0].password);
    console.log(comparePassword);

    if (!comparePassword) {
      res.status(400).send("wrong  or password");
    } else {
      next();
      return;
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
