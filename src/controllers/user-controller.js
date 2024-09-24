import User from "../models/user-model.js"

export const signup = async (req, res) => {
  try {
    const user = await User.create({
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
        role: req.body.role
    });

    res.status(201)
  } catch (error) {
    res.status(400).send(error);
  }
};
