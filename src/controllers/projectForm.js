const { find, create } = require("../services/projectForm");

export const handleProjectForm = async (req, res, next) => {
  try {
    const { fullName, email, content } = req.body;
    if (!fullName || !email || !content) {
      throw new Error("Some parameters are missing!");
    }
    const existingEmail = await find({ email });

    if (existingEmail) {
      throw new Error("Email already exists!");
    }
    const newUser = await create({ fullName, email, content });

    res.status(201).json({ newUser });
  } catch (error) {
    next(error);
  }
};
