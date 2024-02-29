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

const CONNTECTION_STRING =
  "postgresql://binderiyabilguun:lwF5ry9UQSad@ep-delicate-cherry-a1u3wem7.ap-southeast-1.aws.neon.tech/Leap-1D?sslmode=require";
export const client = new pg.Client({
  connectionString: CONNTECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

const createUserIncome = async () => {
  const userIncomeCreateQuery = `CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )`;

  await client.query(userIncomeCreateQuery);
};

const createRecord = async () => {
  const userIncomeAddRecord = `CREATE TABLE IF NOT EXISTS records(
    id SERIAL PRIMARY KEY,
    userEmail TEXT,
    amount INT,
    category TEXT,
    date DATE,
    time TIME,
    payee TEXT,
    note TEXT,
    expense BOOL
  )`;

  await client.query(userIncomeAddRecord);
};

const dbInit = async () => {
  await client.connect();
  await client.query("SET statement_timeout = 0");

  await createUserIncome();
  await createRecord();
};

dbInit();

client.on("error", async (error, cl) => {
  if (error) {
    console.log(error, "eroeoreoroeroeoro");
  }
});
