import React from 'react'
import appwriteService from '../appwrite/configAppWrite'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

function PostCard({
  $id,
  title,
  "featured-image": featuredImage,
  post,
}) {

  // const userData = useSelector(state => state.auth.userData)
  // console.log(post);

  return (
    // <Link to={`/post/${userData.userData.$id}`}>
    <div className='w-full bg-gray-300 rounded-md p-4 flex flex-col gap-3'>
      <div className="userDeatils text-2xl flex items-center gap-3 justify-between">
        <div className="user flex items-center justify-normal gap-3">
          <span className="userImage"><img src="https://filestore.community.support.microsoft.com/api/images/0ce956b2-9787-4756-a580-299568810730?upload=true" alt="" width='40px' /></span>
          <span className='userName text-base'>{post.userName}</span>
          <span className="labels text-xs text-red-600">{post.userLabel}</span>
        </div>
        <span className='follow text-sm'>+ Follow</span>
      </div>
      <div className='w-full justify-center'>
        <img src={appwriteService.getFilePreview(post["featured-image"])}
          alt={title}
          className='rounded-md' />
      </div>
      <div className="contentPart">
        <h2
          className='text-md font-bold text-black'>
          {post.title}
        </h2>
        <div className="content break-words line-clamp-1">{parse(post.content)}</div>
      </div>
      <div className="lcs flex items-center justify-around gap-3">
        <span><FontAwesomeIcon
          icon={faHeart}
          className='pr-2' />
          Like</span>
        <span><FontAwesomeIcon
          icon={faComment}
          className='px-2' />Comment</span>
        <span><FontAwesomeIcon
          icon={faShare}
          className='px-2' />Share</span>
      </div>
    </div>
    /* </Link> */
  )
}

export default PostCard