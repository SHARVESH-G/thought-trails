import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../../assets/icons/assets'

const SideBar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
      <NavLink end={true} to='/admin' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"} `} >
        <img src={assets.home_icon} alt="" className='min-w-4 w-5' />
        <p>Dashboard</p>
      </NavLink>


      <NavLink end={true} to='/admin/addblog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"} `} >
        <img src={assets.add_icon} alt="" className='min-w-4 w-5' />
        <p>Add New Blog</p>
      </NavLink>

      <NavLink end={true} to='/admin/listblog' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"} `} >
        <img src={assets.list_icon} alt="" className='min-w-4 w-5' />
        <p>Blog Lists</p>
      </NavLink>

      <NavLink end={true} to='/admin/comments' className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-primary/10 border-r-4 border-primary"} `} >
        <img src={assets.comment_icon} alt="" className='min-w-4 w-5' />
        <p>Comments</p>
      </NavLink>
    </div>
  )
}

export default SideBar
