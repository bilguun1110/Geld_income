import fs from "fs";
import { compareHash } from "../../util/password-hash.js";

const userDb =
  "/Users/bilguun/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";

export const loginMiddleWare = async (req, res, next) => {
  const { email: paraEmail, password: paraPassword } = req.body;
  try {
    const oldUsersJson = await fs.readFileSync(userDb, "utf-8");
    const users = JSON.parse(oldUsersJson);
    const exactUser = users.find(({ email }) => email === paraEmail);

    if (!exactUser) {
      res.send("wrong username or password");
    }

    const comparePassword = compareHash(paraPassword, exactUser.password);

    if (!comparePassword) {
      res.send("wrong username or password");
    } else {
      next();
      return;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
