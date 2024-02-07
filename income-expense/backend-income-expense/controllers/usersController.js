import { createUser } from "../quaries/user/createUsers.js";
import jwt from "jsonwebtoken";

import fs from "fs";

export const createUserService = async (req, res) => {
  try {
    const created = await createUser(req);
    res.send(created);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginUserService = async (req, res) => {
  const { email: paraEmail } = req.body;
  const userDb =
    // "/Users/bilguun/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";
    "/Users/23LP0562/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";

  try {
    const oldUsersJson = await fs.readFileSync(userDb, "utf-8");
    const oldUsers = JSON.parse(oldUsersJson);

    const exactUser = oldUsers.find(({ email }) => email === paraEmail);
    const token = jwt.sign(
      { email: paraEmail },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1h" }
    );

    if (!exactUser) {
      return "password or username wrong";
    }

    res.send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
