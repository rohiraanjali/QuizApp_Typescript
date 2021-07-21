const mongoose = require("mongoose");

const OptionSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isRight: {
        type: Boolean,
        required: true
    }
})

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String, 
        required: true,
        true: true
    },
    options: [OptionSchema]
})

const ScoreBoardSchema = new mongoose.Schema({
    name: {
        type: String,
        rewuired: true,
        trim: true
    },
    score: {
        type: String,
        trim: true,
        required: true
    }
})

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    questions: [QuestionSchema],
    scoreBoard: [scoreBoardSchema]
},{timestamps:true})

module.exports = mongoose.model("Category", CategorySchema)