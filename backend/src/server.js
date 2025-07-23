import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { ConnectToDB } from './config/connectToDB.js';
import adminRouter from './routes/adminRoutes.js';
import blogRoute from './routes/blogRoutes.js';

const app = express();

//VARIABLES
const PORT = process.env.PORT

//----------------------------------------------------------

//MIDDLEWARES
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true 
}));
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: true, limit: '20mb' }));


//----------------------------------------------------------


//ROUTES
app.get('/' , (req,res)=>{
    res.send("API WORKING")
})

app.use('/api/admin' , adminRouter)
app.use('/api/blog' , blogRoute)

//----------------------------------------------------------



//Start
ConnectToDB()
.then(()=>{
    app.listen(PORT , ()=>{
        console.log("Server Started")
    })
})
.catch((err)=>{
    console.log("Something Went Wrong")
})

//----------------------------------------------------------