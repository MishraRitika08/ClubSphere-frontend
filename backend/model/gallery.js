import mongoose  from "mongoose";
// this schema is to store gallery images and eventid ,club
const gallerySchema = new mongoose.Schema({
    imageUrl: [{
        type: String,
        required: true
    }],
    EventId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Event"
    },
    club: {
        type:String,
        enum: ["PFAC", "HOBBY", "LIT", "MEF", "PTSC", "DRAMATIC","IISF","ADMIN"],
        required: true
    }
});

gallerySchema.index({ EventId: 1 }, { unique: true });
gallerySchema.index({ club: 1 });

export default mongoose.model("Gallery", gallerySchema);
