const express = require("express");
const router = express.Router();
const {getQuestions, updateScoreBoard} = require("../controllers/Category.controller")

router.route("/questions").get(getQuestions)

router.route("/scoreboard/:quizId").post(updateScoreBoard)

module.exports = router;