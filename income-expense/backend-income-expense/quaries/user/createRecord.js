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
  recordType
) => {
  const userRecordQuery = `INSERT INTO records (userId, amount, category, date, time, payee, note, recordType) VALUES ($1, $2,$3,$4,$5,$6,$7,$8) RETURNING id`;

  const recordId = await client.query(userRecordQuery, [
    userId,
    amount,
    category,
    date,
    time,
    payee,
    note,
    recordType,
  ]);
  return recordId;
};

export const createRecord = async (req) => {
  const { userId, amount, category, date, time, payee, note, recordType } =
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
      recordType
    );

    return result;
  } catch (error) {
    throw new Error(error);
  }
};
