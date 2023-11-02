import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {

  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button className='inline-block px-6 py-2 duration-300 hover:bg-orange-400 rounded-full font-medium text-gray-700 hover:text-gray-100' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn