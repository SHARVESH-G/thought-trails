import mongoose, { mongo } from 'mongoose'


export const ConnectToDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DataBase Connected Successfully")
    }
    catch(err){
        console.log("Something Went Wrong While Connecting To DB")
    }
}