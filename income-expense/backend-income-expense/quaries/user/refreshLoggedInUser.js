import jwt from "jsonwebtoken";

export const refreshLoggedInuser = async (req, res) => {
  const header = req.headers.authorization;

  const token = header.split(` `)[1];

  jwt.verify(token, "defaultSecret", (err, res) => {
    if (err) {
      console.log(err);
      res.status(401).send("invalid token");
    } else {
      console.log(res);
    }
  });
  const { email } = jwt.decode;
  console.log(email);
};
