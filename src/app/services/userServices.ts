import { Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserAuth from "../controllers/authuserInterface";
import { UserRepositories } from "../repositories/userRepositories";
import { createSecretKey } from "crypto";
const userRepositories = new UserRepositories();
export class UserService {
  public generateToken(userid: string) {
    console.log(userid);
    const token = jwt.sign(userid, process.env.SECRET!);
    return token;
  }

  public signUpService = async (details: UserAuth, res: Response) => {
    const { email, password, name } = details;
    //check if user email or password are present are present or not in given data
    if (!email) {
      return res.status(400).json({ message: "Email field cannot be empty" });
    }
    if (!password) {
      return res
        .status(400)
        .json({ message: "Password field cannot be empty" });
    }
    try {
      //check if user already present
      // const existingUser = ;
      if (await userRepositories.findOneUser(details)) {
        return res.status(400).json({ message: "user already exists" });
      }

      //if user is not present then we will hash the password and create a new user in our database
      const hashpassword = await bcrypt.hash(password, 10);
      const newuserdetails = {
        email: email,
        password: hashpassword,
        name: name,
      };
      //create the new user in database
      const createdUser = await userRepositories.createUser(newuserdetails);
      console.log(createdUser);
      const userid = createdUser.id;
      console.log("my user id is:  ", userid);
      const token = this.generateToken(userid); //toString was added forcefully
      console.log("my token is :", token);
      return res.status(200).json({ details, token });
    } catch (err) {
      res.status(400).json({ error: err });
    }
  };

  public SignInService = async (details: UserAuth, res: Response) => {
    const { email, password } = details;

    // if email or password field is empty
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "email or password field cannot be empty" });
    }
    //if user does not exist
    const checkuseremail = await userRepositories.findOneUser(details);

    if (!checkuseremail) {
      return res.status(400).json({ message: "user donot exist" });
    }
    const userdata = await userRepositories.returnOneUser(details);
    const comparepassword = await bcrypt.compare(password, userdata!.password);
    if (!comparepassword) {
      return res.status(400).send({ message: "password doesnot match" });
    }
    const token = this.generateToken(userdata!.id.toString()); //toString was added forcefully
    return res.json(token);
  };
  AllUsers = async (res: Response) => {
    try {
      const allusers = await userRepositories.findAllUser();
      return res.status(200).json(allusers);
    } catch (error) {
      return res.status(400).json({ message: "some error occured!" });
    }
  };
}
