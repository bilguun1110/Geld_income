import { createUser } from "../quaries/user/createUsers.js";
import jwt from "jsonwebtoken";
// import { client } from "../../index.js";

export const createUserService = async (req, res) => {
  try {
    const created = await createUser(req);
    res.send(created);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const loginUserService = async (req, res) => {
  // const { email } = req.body;
  const query = `SELECT * FROM userIncome WHERE email = $1`;
  try {
    const { email } = req.body;
    // const oldUsersJson = await fs.readFileSync(userDb, "utf-8");
    // const oldUsers = JSON.parse(oldUsersJson);

    // const exactUser = oldUsers.find(({ email }) => email === paraEmail);

    const response = await client.query(query, [email]);
    console.log(response.rows);

    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET || "defaultSecret",
      { expiresIn: "1h" }
    );

    if (!response) {
      return "password or username wrong";
    }

    res.send({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
