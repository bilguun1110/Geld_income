import fs from "fs";
import { readFileSync } from "fs";
import { makeHash } from "../../util/password-hash.js";

const userDb =
  // "/Users/bilguun/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";
  "/Users/23LP0562/Desktop/Geld_income/income-expense/backend-income-expense/models/users.json";

export const readFile = async () => {
  try {
    const oldUsers = await readFileSync(userDb, "utf-8");
    return oldUsers;
  } catch (error) {
    return null;
  }
};

export const createUser = async (req) => {
  const { name, email, password, rePassword } = req.body;
  if (!name || !email) res.status(400).send("Not exist user");
  try {
    const newUserFile = await readFile();
    const objectOldUsers = JSON.parse(newUserFile);
    console.log(objectOldUsers);
    const existUser = objectOldUsers.find((el) => el.email === email);

    if (existUser) {
      throw new Error("exist user");
    } else if (password !== rePassword) {
      throw new Error("pass user");
    } else {
      const hashedPassword = makeHash(password);
      objectOldUsers.push({
        name,
        email,
        password: hashedPassword,
        rePassword: hashedPassword,
      });
    }

    fs.writeFileSync(userDb, JSON.stringify(objectOldUsers));
    const result = await readFile();
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
