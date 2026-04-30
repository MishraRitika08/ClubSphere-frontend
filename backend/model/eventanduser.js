import mongoose from "mongoose";
// this is use to store club and event with user 
const event = mongoose.Schema({
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref :"User",
        required:true
    },
    EventId:{
            type:mongoose.Schema.Types.ObjectId,
            ref :"Event",
            required:true
    },
    club:{
        type:String,
        required:true
    },
    formdata:{
        type: mongoose.Schema.Types.Mixed,
        required:true
    }

})

event.index({ EventId: 1, UserId: 1 }, { unique: true });
event.index({ EventId: 1, club: 1 });

export default mongoose.model("EventUser", event);