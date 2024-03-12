import { errorMessages } from "../constants/errorMessages.js";
import { getUsers } from "../models/users.js";

export const fetchUsers = async (req, res) => {
  try {
    console.log(req.query);
    const users = await getUsers();
    return res
      .status(200)
      .json({ message: "Users return successfully!", users });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ messgae: errorMessages.INTERNAL_SERVER_ERROR });
  }
};
