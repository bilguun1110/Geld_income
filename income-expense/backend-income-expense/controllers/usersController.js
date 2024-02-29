import { createUser } from "../quaries/user/createUsers.js";
import jwt from "jsonwebtoken";
import { client } from "../index.js";
import { createRecord } from "../quaries/user/createRecord.js";

export const createUserService = async (req, res) => {
  try {
    const created = await createUser(req);
    res.send(created);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginUserService = async (req, res) => {
  const query = `SELECT * FROM users WHERE email = $1`;
  try {
    const { email } = req.body;

    const response = await client.query(query, [email]);

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1h" }
    );

    if (!response) {
      return "password or username wrong";
    }

    res.send({ token, response });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createRecordService = async (req, res) => {
  try {
    const recorded = await createRecord(req);
    res.send(recorded);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
