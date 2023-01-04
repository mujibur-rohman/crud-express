import Users from "../models/UsersModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await Users.findAll();
    response.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
