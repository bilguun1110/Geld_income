import { getUserRecord } from "../quaries/user/getUserRecord.js";

export const getUserRecordController = async (req, res) => {
  try {
    const getRecord = await getUserRecord(req);
    res.send(getRecord);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
