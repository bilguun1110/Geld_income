import { client } from "../../index.js";

export const getUserRecord = async (req, res) => {
  const query = `SELECT * FROM records WHERE useremail = $1`;

  try {
    const { useremail } = req.body;

    const response = await client.query(query, [useremail]);
    // console.log(response.rows);
    return response.rows;
  } catch (error) {
    res.status(400).send(error.messege);
  }
};
