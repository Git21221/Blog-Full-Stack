import React from 'react'
import appwriteService from '../appwrite/configAppWrite'
import { Link } from 'react-router-dom'

function PostCard({
  $id,
  title,
  "featured-image": featuredImage,
  post
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(post["featured-image"])}
          alt={title}
          className='rounded-xl' />
        </div>
        <h2
        className='text-xl font-bold'>
          {post.title}
        </h2>
      </div>
    </Link>
  )
}

export default PostCard