import React from 'react'

function UserLogo({imageSource}) {
  return (
    <span className="userImage"><img src={imageSource} alt="" width='40px' /></span>
  )
}

export default UserLogo