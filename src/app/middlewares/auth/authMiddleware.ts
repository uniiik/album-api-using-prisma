import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");
import { UserRepositories } from "../../repositories/userRepositories";

//create a async function to check id from token
export const authMidlleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({ message: "Token is not available" });
    }
    //to verify whether token is valid or not
    const token = authorization.split(" ")[1];
    const userId = jwt.verify(token, process.env.SECRET);
    //check if token is valid jwt
    if (!userId) {
      return res.send("Invalid token!!!");
    }
    //check if user id from token exists or not
    const user = await UserRepositories.findUserId(userId);
    if (!user) {
      return res.send("user id does not exists");
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
};
