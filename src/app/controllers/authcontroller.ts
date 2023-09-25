import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
import { UserService } from "../services/userServices";

const userService = new UserService();

export const usersignup = async (req: Request, res: Response) => {
  console.log("post request for user signup");
  console.log(req.body);
  const { email, password, name } = req.body;
  const details = { email, password, name };

  const response = userService.signUpService(details, res);
  return response;
};
export const usersignin = async (req: Request, res: Response) => {
  console.log("post request for user sign In");

  // const {email,password,name}=req.body;
  // another way to fetch data from json body
  const details = {
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
  };

  const response = userService.SignInService(details, res);
  return response;
};

export const allusers = async (req: Request, res: Response) => {
  console.log("get request for getting all users details");
  const response = userService.AllUsers(res);
  return response;
};
