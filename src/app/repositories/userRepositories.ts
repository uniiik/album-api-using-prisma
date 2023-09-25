import { PrismaClient } from "@prisma/client"; //imported client to interact with the database
// import { UserAuth } from "../controllers/authuserInterface";
import UserAuth from "../controllers/authuserInterface";
const prisma = new PrismaClient();

export class UserRepositories {
  findAllUser = async () => {
    const all = await prisma.userAuth.findMany();
    return all;
  };
  static findUserId = async (userId: string) => {
    const user = await prisma.userAuth.findUnique({ where: { id: userId } });
    if (user) {
      return true;
    }
    return false;
  };

  returnUserDataUsingId = async (userId: string) => {
    const user = await prisma.userAuth.findUnique({ where: { id: userId } });
    return user;
  };

  createUser = async (user: UserAuth) => {
    const createdUser = await prisma.userAuth.create({ data: user });
    return createdUser;
  };

  findOneUser = async (user: UserAuth) => {
    const { email } = user;

    const userExists = await prisma.userAuth.findUnique({
      where: { email: email },
    });

    if (userExists) {
      return true;
    }
    return false;
  };

  returnOneUser = async (user: UserAuth) => {
    const { email } = user;

    const userExists = await prisma.userAuth.findUnique({
      where: { email: email },
    });

    return userExists;
  };
}
