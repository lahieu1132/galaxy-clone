import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


function AuthDeatil() {
  const [error, setError] = useState('')
  const { currentUser, logout} = useAuth()
  const navigate = useNavigate()


  async function handleLogout() {
    setError('')
    try{
      await logout()
      navigate('/login')
    }
    catch {
      setError('failed to log out')
    }
  }
  return (
    <div className='acc-detail absolute -right-6 top-16 z-1 h-0 overflow-hidden hover:h-[180px] text-white bg-black'>
        <div className='p-3 flex flex-col items-start'>
          <h2 className='text-center text-3xl font-semibold mb-2 '>profile</h2>
          {error && {error}}
          <p className='mb-6 text-xl'>{currentUser.email}</p>
          <div className="w-full text-center text-lg mt-2 border-t-2 border-solid flex items-start">
            <button onClick={handleLogout} className='p-1 text-xl font-medium mt-5'>
              <FontAwesomeIcon icon={faArrowRightFromBracket} className='mr-2'/>
              Đăng xuất</button>
          </div>
        </div>
    </div>
  )
}

export default AuthDeatil