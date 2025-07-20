import express from 'express'
import { addBlog, addComments, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blogController.js';
import authMiddleware from '../middleswares/authMiddleware.js';

const blogRoute = express.Router();


blogRoute.post('/add',authMiddleware,addBlog)

blogRoute.get("/all" , getAllBlogs);

blogRoute.get('/:blogId' , getBlogById);

blogRoute.post('/delete' , deleteBlogById);

blogRoute.post('/toggle-publish',authMiddleware,togglePublish);

blogRoute.post('/add-comment' , addComments);

blogRoute.post('/comments' , getBlogComments);

export default blogRoute;