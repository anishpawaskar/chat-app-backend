import {
  createUserModel,
  getUserByEmailModel,
  getUserByUsernameModel,
} from "../models/users.js";
import { compareHash, generateHash, generateJWT } from "../utils/auth.js";

export const regitserController = async (req, res) => {
  try {
    const { email, username, displayName, password } = req.body;

    const existingEmail = await getUserByEmailModel(email);
    if (existingEmail) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    const saveUser = await createUserModel({
      email,
      username,
      displayName,
      hashPassword: await generateHash(password),
    });

    const payload = {
      id: saveUser._id,
      username: saveUser.username,
      email: saveUser.email,
    };

    const token = generateJWT(payload);
    res.cookie("babble-session", token, { httpOnly: true });

    return res
      .status(201)
      .json({ message: "User register successfully!", user: saveUser });
  } catch (err) {
    console.error(err);
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user;
    if (username) {
      user = await getUserByUsernameModel(username);
    } else {
      user = await getUserByEmailModel(email);
    }

    if (!user) {
      return res.status(404).json({ message: "User does not exist!" });
    }

    if (!password) {
      return res.status(400).json({ message: "Wrong password!" });
    }

    const passwordMatch = await compareHash(password, user.hashPassword);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password is incorrect!" });
    }

    const payload = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = generateJWT(payload);
    res.cookie("babble-session", token, { httpOnly: true });

    return res.status(200).json({ message: "User login successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const validateUsername = async (req, res) => {
  try {
    const { username } = req.body;
    const isUsernameAvailable = await getUserByUsernameModel(username);
    if (!isUsernameAvailable) {
      return res.status(200).json({ taken: false });
    } else {
      return res.status(200).json({ taken: true });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
