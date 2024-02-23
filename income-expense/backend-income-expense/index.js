import useRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import pg from "pg";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(useRouter);

app.listen(port, () => {
  console.log(`localhost:${port}`);
});

// app.get("", async (req, res) => {
//   res.send("working");
// });

const CONNTECTION_STRING =
  "postgresql://binderiyabilguun:lwF5ry9UQSad@ep-delicate-cherry-a1u3wem7.ap-southeast-1.aws.neon.tech/Leap-1D?sslmode=require";
export const client = new pg.Client({
  connectionString: CONNTECTION_STRING,
});

const createUserIncome = async () => {
  const userIncomeCreateQuery = `CREATE TABLE IF NOT EXISTS userIncome(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )`;

  await client.query(userIncomeCreateQuery);
};

const dbInit = async () => {
  await client.connect();
  // await createUserTable();
  await createUserIncome();
};

dbInit();
