import { checkUsernameAvailability, registerUser } from "../models/users.js";

export const handleUserRegistration = async (req, res) => {
  try {
    const newUser = req.body;
    console.log("newUser", newUser);
    const saveUser = await registerUser(newUser);
    res
      .status(201)
      .json({ message: "User register successfully!", user: saveUser });
  } catch (err) {
    console.error(err);
  }
};

export const validateUsername = async (req, res) => {
  try {
    const { username } = req.body;
    const isUsernameAvailable = await checkUsernameAvailability(username);
    if (isUsernameAvailable) {
      res.status(200).json({ taken: false });
    } else {
      res.status(200).json({ taken: true });
    }
  } catch (err) {
    console.error(err);
  }
};
