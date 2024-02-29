import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  email: String,
  displayName: String,
  username: String,
  hashPassword: String,
});

export const UsersModel = model("users", usersSchema);

export const createUserModel = async (user) => {
  const newUser = new UsersModel(user);
  const saveUser = await newUser.save();
  return saveUser;
};

export const getUserByUsernameModel = async (username) => {
  return await UsersModel.findOne({ username });
};

export const getUserByEmailModel = async (email) => {
  return await UsersModel.findOne({ email });
};

export const getUsers = async () => {
  return await UsersModel.find({});
};
