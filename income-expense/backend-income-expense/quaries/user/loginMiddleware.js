import fs from "fs";
import { compareHash } from "../../util/password-hash.js";

const userDb =
  "/Users/23LP0562/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";
// "/Users/bilguun/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";

export const loginMiddleWare = async (req, res, next) => {
  const { email: paraEmail, password: paraPassword } = req.body;
  try {
    const oldUsersJson = await fs.readFileSync(userDb, "utf-8");
    const users = JSON.parse(oldUsersJson);

    const exactUser = users.find(({ email }) => email === paraEmail);

    if (!exactUser) {
      res.status(400).send("wrong username or password");
      return;
    }

    const comparePassword = compareHash(paraPassword, exactUser.password);

    if (!comparePassword) {
      res.status(400).send("wrong  or password");
      return;
    } else {
      next();
      return;
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
