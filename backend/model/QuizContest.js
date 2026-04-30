import mongoose from "mongoose";
const quizContestSchema = new mongoose.Schema(
  {

     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
     },
    contestId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Contest"
        },
    
    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"QuestionModel"
    },
    selectedOption:{
        type:String,
    }
  });

quizContestSchema.index({ userId: 1, contestId: 1, questionId: 1 }, { unique: true });

export const QuizContest = mongoose.model("QuizContest", quizContestSchema);