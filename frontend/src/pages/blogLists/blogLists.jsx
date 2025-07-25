import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/icons/assets';
import {useAppContext} from '../../context/AppContext';
import TableBody from '../../components/admin/tableBody/tableBody';
import toast from 'react-hot-toast';

const BlogLists = () => {

  const [blogs , setBlogs] = useState([]);
  const {axios} = useAppContext();

  const fetchBlogs = async() =>{
    try{
      const {data} = await axios.get("/api/admin/blogs")
      if(data.success){
        setBlogs(data.blogs)
      }
      else{
        toast.error(data.message)
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50' >
      <h1>All Blogs</h1>
      <div className='relative h-4/5 mt-4 max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white' >
          <table className='w-full text-sm text-gray-500' >
            <thead className='text-xs text-gray-600 text-left uppercase' >
              <tr>
                <th className='px-2 py-4 xl:px-6' scope='col' >#</th>
                <th className='px-2 py-4' scope='col' >Blog Title</th>
                <th className='px-2 py-4 max-sm:hidden' scope='col' >Date</th>
                <th className='px-2 py-4 max-sm:hidden' scope='col' >Status</th>
                <th className='px-2 py-4' scope='col' >Action</th>
              </tr>
            </thead>
            <tbody>
              { blogs.map((blog , index)=>{
                return <TableBody key={blog._id} blog={blog} fetchBlogs={fetchBlogs} index={index+1} />
              }) }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default BlogLists
