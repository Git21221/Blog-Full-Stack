import { useEffect, useState } from 'react'
import './App.css'
import {Header, Footer} from './components'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice'
import { Outlet } from 'react-router-dom';
function App() {

  const[loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  return !loading ? (
    <div className='w-full flex flex-wrap items-center justify-center bg-slate-500'>
      <div className='flex flex-col items-center justify-center'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App
