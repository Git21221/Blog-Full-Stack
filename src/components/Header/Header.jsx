import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'

function Header() {

  const authStatus = useSelector(state => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]

  return (
    <header className='py-3 shadow-lg bg-white w-full rounded-md'>
      <Container>
        <nav className='flex items-center justify-between max-w-5xl px-4'>
          <div className="mr-4">
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <ul className='flex gap-2'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-orange-400 rounded-full font-medium text-gray-700 hover:text-gray-100'>{item.name}</button>
                </li>
              ) : null
            )}
            {
               authStatus && (
                <li>
                  <span className="userImage"><img src="https://filestore.community.support.microsoft.com/api/images/0ce956b2-9787-4756-a580-299568810730?upload=true" alt="" width='40px' /></span>
                </li>
              )
            }
            {/* temporarily replacing logout button with account  */}
            {/* {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )} */}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header