import { Schema, model } from "mongoose";

const ReactionSchema = Schema({
    isLike: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        require: true
    }
},
    {
        timestamps: true
    })

const Reaction = model("Reaction", ReactionSchema)
export default Reaction