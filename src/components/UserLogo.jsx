import React from 'react'

function UserLogo({imageSource, width}) {
  return (
    <span className="userImage"><img src={imageSource} alt="" width={width} /></span>
  )
}

export default UserLogo