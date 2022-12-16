import { Schema, model } from "mongoose"

const ImageSchema = Schema({
    path: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const Image = model("Image", ImageSchema)

export default Image