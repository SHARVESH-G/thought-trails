import jwt from 'jsonwebtoken'
import BLOG from '../models/Blog.js';
import COMMENT from '../models/Comments.js';

export const adminLogin = async(req , res) =>{
    try{
        const {email , password} = req.body;

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success:false , message:'Invalid Credentials'})
        }

        const token = jwt.sign({email} , process.env.JWT_SECRET)
        res.json({success:true , token})
    }catch(error){
        res.json({success:false , message:error.message})
    }
}



export const getAllBlogsAdmin = async(req,res)=>{
    try{
        const blogs = await BLOG.find({}).sort({createdAt:-1});
        return res.json({success:true , blogs})
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}



export const getAllComments = async(req,res) =>{
    try{
        const comments = await COMMENT.find({}).populate("blog").sort({createdAt:-1});
        return res.json({success:true , comments})
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}




export const getDashboard = async(req,res) =>{
    try{
        const recentBlogs = await BLOG.find({}).sort({createdAt:-1}).limit(5);
        const blogs = await BLOG.countDocuments();
        const comments = await COMMENT.countDocuments();
        const drafts = await BLOG.countDocuments({isPublished:false})

        const dashboardData = { recentBlogs , blogs , comments , drafts }

        return res.json({success:true , dashboardData})
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}



export const deleteCommentById = async(req,res) =>{
    try{
        const { id } = req.body;
        await COMMENT.findByIdAndDelete(id);
        return res.json({success:true})
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}


export const approveCommentById = async(req,res) =>{
    try{
        const { id } = req.body;
        await COMMENT.findByIdAndUpdate(id , {isApproved:true});
        return res.json({success:true , message:"Comment Approved"});
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}