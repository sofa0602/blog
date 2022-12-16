import { Schema, model } from "mongoose";

const UserShema = Schema({

    username: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    avatar: String
},
    {
        timestamps: true
    }
)

const User = model("User", UserShema)
export default User