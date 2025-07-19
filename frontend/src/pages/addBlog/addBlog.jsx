import React, { useState } from 'react'
import { assets } from '../../assets/icons/assets';

const AddBlog = () => {

  const [image , setImage] = useState(false);
  const [title , setTitle] = useState("");
  const [subTitle , setSubTitle] = useState("");
  const [category , setCategory] = useState("Startup");
  const [isPublished , setIsPublished] = useState(false);

  const submitHandler = async(e) =>{
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler} className='flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>
        <p>upload Thumbnail</p>
        <label htmlFor='image'>
          <img src={assets.upload_area} alt="" className='mt-2 h-16 rounded cursor-pointer'/>
          <input type='file' id="image" hidden required onChange={(e)=>setImage(e.target.files[0])}/>
        </label>

        <p className='mt-4'>Blog Title</p>
        <input type='text' placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={(e)=>setTitle(e.target.value)} value={title} />

        <p className='mt-4'>Sub Title</p>
        <input type='text' placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' onChange={(e)=>setSubTitle(e.target.value)} value={subTitle} />

      </div>
    </form>
  )
}

export default AddBlog
