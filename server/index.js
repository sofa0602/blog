import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import 'dotenv/config'
import { userRouter, postRouter } from "./routes/index.js"
import { errorMiddleware } from "./middlewares/error.middleware.js"

const app = express()

app.use(express.json());
app.use(cors())
app.use(cookieParser())

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use(errorMiddleware)
// app.use('/posts', postRouter)



app.listen(process.env.PORT || 8080, async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)

        console.log(`Server running on port ${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
}
)