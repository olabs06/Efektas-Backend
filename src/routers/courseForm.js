const express = require("express");
const { handleCourseForm } = require("../controllers/courseForm");
const router = express.Router();

router.post("/course-form", handleCourseForm);

module.exports = router;
