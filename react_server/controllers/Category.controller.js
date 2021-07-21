const Categories = require("../models/category.models");

const getQuestions = async(req, res) => {
    try {
        const questions = await Categories.find({}).lean();
        if(questions) {
            return res.status(200).json({quiz:questions})
        }
        res.status(404).json({success: false, message:"Questions not found"})
    } catch (error) {
        res.status(404).json({success: false, message:"Questions not found"})
    }
}


const updateScoreBoard = async(req,res) => {
    try {
        const {quizId} = await Categories.findById(quizId);
        quiz.scoreBoard.push(req.body);

        await quiz.save((err, quiz) => {
            if(err) {
                return res.status(404).json({status: 404, message: "Not able to update the scoreBoard. Please refresh the page!"})
            }
            if(quiz) {
                return res.status(201).json({scoreBoard:quiz.scoreBoard})
            }
        })
    } catch (error) {
        return res.status(404).json({status: 404, message: "Scoreboard not found. Please refresh the page!"})
    }
}

module.exports = {getQuestions, updateScoreBoard};