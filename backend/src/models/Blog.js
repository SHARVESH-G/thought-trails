import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        subTitle:{
            type:String,
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true
        },
        image:{
            type:String,
            default:process.env.IMAGE
        },
        isPublished:{
            type:Boolean,
            required:true,
        },
        views:{
            type:Number,
            default:0,
        }
    },
    {
        timestamps:true
    }
)

const BLOG = mongoose.model('blog' , BlogSchema);

export default BLOG;