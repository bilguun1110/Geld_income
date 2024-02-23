import { makeHash } from "../../util/password-hash.js";
import { client } from "../../index.js";

const createUserSql = async (username, email, password) => {
  const userCreateQuery = `
  INSERT INTO userIncome (username, email, password ) VALUES ($1, $2, $3  ) RETURNING id`;

  const hashedPassword = makeHash(password);

  const userId = await client.query(userCreateQuery, [
    username,
    email,
    hashedPassword,
  ]);

  return userId;
};

export const createUser = async (req) => {
  const { username, email, password } = req.body;

  try {
    const result = createUserSql(username, email, password);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
