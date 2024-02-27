import { makeHash } from "../../util/password-hash.js";
import { client } from "../../index.js";

const createUserSql = async (name, email, password) => {
  const userCreateQuery = `
  INSERT INTO users (name, email, password ) VALUES ($1, $2, $3  ) RETURNING id`;

  const hashedPassword = makeHash(password);

  const userId = await client.query(userCreateQuery, [
    name,
    email,
    hashedPassword,
  ]);

  return userId;
};

export const createUser = async (req) => {
  const { name, email, password } = req.body;

  try {
    const result = createUserSql(name, email, password);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
