import mongoose from "mongoose";
import { string } from "prop-types";

const userSchema = new moongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,        
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;