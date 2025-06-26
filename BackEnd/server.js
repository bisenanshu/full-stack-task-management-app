import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import 'dotenv/config'
import orderRouter from './routes/orderRoute.js';

// app config

const app = express()  
const port =  4000;

// middleware

app.use(express.json())  // whenever we get the req from frontend to backend that will be pass through that json
app.use(cors())          // we can access the backend from any frontend

// db connection
connectDB();

//api endpoints

app.use("/api/food", foodRouter )
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res)=> {             // it is http method using that we can req the data from server
  
    res.send("API Working")
})                

app.listen(port, ()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

 