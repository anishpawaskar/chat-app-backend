import bcrypt from "bcrypt";

export const generateHash = async (password) => {
  try {
    return bcrypt.hash(password, 10);
  } catch (err) {
    console.error(err);
  }
};

export const compareHash = async (password, hashPassword) => {
  try {
    return bcrypt.compare(password, hashPassword);
  } catch (err) {
    console.error(err);
  }
};
