const projectForm = require("../models/projectForm");

const create = async ({ email, fullName, content }) => {
  const newUser = await projectForm.create({
    email,
    fullName,
    content,
  });

  return newUser;
};

const find = async ({ email }) => {
  const existingEmail = await projectForm.findOne({ email });
  return existingEmail;
};

module.exports = {
  create,
  find,
};
