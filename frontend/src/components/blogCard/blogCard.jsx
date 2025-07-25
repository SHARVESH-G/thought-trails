import React from 'react'
import { useNavigate } from 'react-router-dom'
import CtmShip from '../chip/chip';
import TopicChip from '../chip/topicChip';

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer"
    >
      <img src={image || import.meta.env.VITE_DEFAULT_IMAGE_URL} alt={title} className="aspect-video w-full object-cover" />

      <TopicChip category={category}/>

      <div className="p-5">
        <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
        <p className="mb-3 text-xs text-gray-600" dangerouslySetInnerHTML={{"__html":description.slice(0,80)}}>
        </p>
      </div>
    </div>
  )
}

export default BlogCard
