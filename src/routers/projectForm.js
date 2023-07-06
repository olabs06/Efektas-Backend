const express = require("express");
const { handleProjectForm } = require("../controllers/projectForm");
const router = express.Router();

router.post("/project-form", handleProjectForm);

module.exports = router;
