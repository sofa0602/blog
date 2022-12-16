import { Schema, model } from "mongoose";

const TokenShema = Schema({
    refreshToken: { type: String, require: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    }
})
const Token = model("Token", TokenShema)
export default Token