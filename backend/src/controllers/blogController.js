import BLOG from "../models/Blog.js";
import COMMENT from "../models/Comments.js";

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, image, isPublished } = req.body;

    if (!title || !description || !category || isPublished === undefined) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    const newBlog = new BLOG({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished
    });

    await newBlog.save();

    res.status(201).json({
      message: 'Blog created successfully'
    });
  } catch (error) {
    console.error('Error in addBlog:', error);
    res.status(500).json({ message: 'Something went wrong', error });
  }
};



export const getAllBlogs = async(req,res) => {
    try{
        const blogs = await BLOG.find({isPublished:true})
        return res.json({success:true , blogs})
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}


export const getBlogById = async(req,res) =>{
    try{
        const {blogId} = req.params;
        const blog = await BLOG.findById(blogId)
        if(!blog){
            return res.json({success:false , message:"Blog Not Found By This ID"})
        }
        return res.json({success:true , blog});
    }catch(error){
        res.json({success:true,message:error.message})
    }
}




export const deleteBlogById = async(req,res) =>{
    try{
        const {id} = req.body;
        await BLOG.findByIdAndDelete(id)
        await COMMENT.deleteMany({blog:id})
        return res.json({success:true , message:"BLOG Deleted Successfully"});
    }catch(error){
        res.json({success:true,message:error.message})
    }
}


export const togglePublish = async(req,res)=>{
    try{
        const {id} = req.body;
        const blog = await BLOG.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        return res.json({success:true , message:"Blog Updated"});
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}




export const addComments = async(req,res) =>{
    try{
        const {blog , name , content} = req.body;
        await COMMENT.create({blog , name , content});
        res.json({success:true , message:error.message})
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}




export const getBlogComments = async(req,res) =>{
    try{
        const {blogId} = req.body;
        const comments = await COMMENT.find({blog:blogId , isApproved:true}).sort({createdAt:-1});
        return res.json({success:true, comments});
    }catch(error){
        return res.json({success:false , message:error.message})
    }
}