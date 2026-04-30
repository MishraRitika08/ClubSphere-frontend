import mongoose from "mongoose";


const EventModel = mongoose.Schema({
  title: String,
  description: String,
  start: Date,
  end: Date,
  location: String,
  imageurl: String, // url  of image which come cloudinary
  formjson: {},
  // attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Array of user IDs
  club:{
     type:String
  }
},{timestamps: true});

EventModel.index({ club: 1 });
EventModel.index({ location: 1, start: 1, end: 1 });

export default mongoose.model("Event", EventModel);
