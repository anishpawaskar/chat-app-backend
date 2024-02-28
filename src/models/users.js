import { Schema, model } from "mongoose";

const usersSchema = new Schema({
  email: String,
  displayName: String,
  username: String,
  password: String,
});

export const usersModel = model("users", usersSchema);

export const registerUser = async (user) => {
  try {
    const { email, displayName, username, password } = user;
    const newUser = new usersModel({
      email,
      displayName,
      username,
      password,
    });

    const saveUser = await newUser.save();
    console.log("save user", saveUser);
    return saveUser;
  } catch (err) {
    console.error(err);
  }
};

export const checkUsernameAvailability = async (username) => {
  try {
    const user = await usersModel.findOne({ username: username });
    return user;
  } catch (err) {
    console.error(err);
  }
};
