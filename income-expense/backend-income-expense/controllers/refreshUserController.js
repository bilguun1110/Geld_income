import { refreshLoggedInuser } from "../quaries/user/refreshLoggedInUser.js";

export const refreshLoggedInController = async (req, res) => {
  try {
    const refreshed = await refreshLoggedInuser(req);
    res.send(refreshed);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
