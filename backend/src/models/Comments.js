import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema(
    {
        blog:{
            type:mongoose.Schema.Types.ObjectId ,
            ref:'blog',
            required:true
        },
        name:{
            type:String,
            required:true
        },
        content:{
            type:String,
            required:true 
        },
        isApproved:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)

const COMMENT = mongoose.model('comment' , CommentSchema);

export default COMMENT;