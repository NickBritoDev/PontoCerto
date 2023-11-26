import { createUserService } from "../../services/users/CreateUserService.js";

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const users = await createUserService(user);

    res.status(201).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};
