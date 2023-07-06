const courseForm = require("../models/courseForm");

const create = async ({ email, fullName, content }) => {
  const newUser = await courseForm.create({
    email,
    fullName,
    content,
  });

  return newUser;
};

const find = async ({ email }) => {
  const existingEmail = await courseForm.findOne({ email });
  return existingEmail;
};

module.exports = {
  create,
  find,
};
