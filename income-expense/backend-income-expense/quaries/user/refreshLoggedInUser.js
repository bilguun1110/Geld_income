import jwt from "jsonwebtoken";

export const refreshLoggedInuser = async (req, res) => {
  const header = req.headers.authorization;

  if (!header) {
    res.send("token not provided");
    return;
  }

  const token = header.split(` `)[1];

  jwt.verify(token, "defaultSecret", (err, res) => {
    if (err) {
      console.log(err);
      res.status(401).send("invalid token");
    } else {
      console.log(res);
    }
  });

  const { email } = jwt.decode(token);

  if (!email) {
    throw new Error("token buruu");
  } else {
    return email;
  }
};
