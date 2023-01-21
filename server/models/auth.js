import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    name: {type: String , required: true},
    email: {type: String , required: true},
    password: {type: String},
    about: {type: String },
    tags: {type: [String]},
    joinedOn: {type: Date, default: Date.now}
})

export default mongoose.model("User", usersSchema)