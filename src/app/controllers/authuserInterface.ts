// we have created this file because in typescript it is necessary to create interface to interact with database , otherwise there will be too many errors
export default interface UserAuth {
  id?: string; //? means this field is optional means, it might be available or not available while working with it
  email: string;
  password: string;
  name: string;
}
// export interface payload {
//   userId: string;
// }
