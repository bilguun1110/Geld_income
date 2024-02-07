import jwt from "jsonwebtoken";

export const tokenMiddleChecker = async (req, res, next) => {
  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkJpbmRlcml5YW1haWwuY29tIiwiaWF0IjoxNzA3MTkyNzc2LCJleHAiOjE3MDcxOTYzNzZ9.T52JmlHYc-WLNr-LO--IrP-e9AIGrRfGAUrcYdhjvLg";

  const token = req.headers.autorization;
  jwt.verify(token, "defaultSecret", (err, res) => {
    if (err) {
      console.log(err);
      res.status(401).send("invalid token");
    } else {
      console.log(res);
      next();
    }
  });
};
