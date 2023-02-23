const mongoose = require("mongoose");
const {Schema} = mongoose;

const bookingSchema = new Schema({
    _id:String,
    name:String,
    image:String,
    cloudinaryID:String,
    DOB:String,
    TOB:String,
    COB:String,
    SOB:String,
})

module.exports = mongoose.model("booking",bookingSchema)