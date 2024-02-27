import { query } from "express";
import { client } from "../../index.js";

const createRecordSql = async (
  userId,
  amount,
  category,
  date,
  time,
  payee,
  note,
  expense
) => {
  const userRecordQuery = `INSERT INTO records (userId, amount, category, date, time, payee, note, expense) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING id`;

  const recordId = await client.query(userRecordQuery, [
    userId,
    amount,
    category,
    date,
    time,
    payee,
    note,
    expense,
  ]);
  return recordId;
};

export const createRecord = async (req) => {
  const { userId, amount, category, date, time, payee, note, expense } =
    req.body;

  try {
    const result = createRecordSql(
      userId,
      amount,
      category,
      date,
      time,
      payee,
      note,
      expense
    );

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
