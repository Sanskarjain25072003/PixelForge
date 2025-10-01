import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import PostRouter from "./routes/Posts.js"
import GenerateRouter from "./routes/Generate.js";

const app = express()
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({ extended: true}))

app.use(cors({
  origin: 'https://pixelforge-h26i.onrender.com/',
  credentials: true // if you're using cookies/auth headers
}));

const PORT = process.env.PORT

app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success: false,
        status,
        message
    })
})

//default get
app.get("/",(req,res)=>{
    res.status(200).json({
        success: true,
        message: "Welcome to the server"
    })
})

//connect to mongodb
const ConnectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

const startServer = async (fn)=>{
    try{
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`)
            fn()
        })
        
    }catch(err){
        console.log(err)
    }
}

startServer(ConnectDB)

app.use("/api/post",PostRouter)

// Make sure these routes are defined before the error handler
app.use("/api/generate", GenerateRouter);
app.use("/api/post", PostRouter);

// Error handler should be last
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong"
    return res.status(status).json({
        success: false,
        status,
        message
    })
});
