import React,{ useRef, useState} from 'react';
import '../index.css'
import {useAuth} from '../contexts/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import {useDatas} from '../contexts/FilmsContext'

function SignUp() {
    const emailRef = useRef(null)
    const passwordRef =useRef(null)
    const passwordConfirmRef = useRef(null)
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()

    async function handleSubmit(e) { 
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history('/')
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  return (
    <div className=' h-[100vh] flex items-center justify-center'>
      <div className='sign-up__form w-[400px]  border-solid rounded-2xl border-2 border-[#ccc]-500 p-10'>
          <div className='card max-w-sm'>
            <h2 className='text-center text-3xl font-semibold mb-4 '>Sign Up</h2>
            {
              error && <p className='mb-2 p-3 bg-slate-400 text-[red] rounded-md'>{error}</p>
            }
            <form onSubmit={handleSubmit} className='sign-up__form flex flex-col items-center justify-center' >
              <div className='form-group flex flex-col  w-full '>
                <label className='form-lable text-xl' htmlFor ='email'>Email</label>
                <input type='text' ref={emailRef} name='email' className='form-control p-1'></input>
              </div>
              <div className='form-group flex flex-col w-full mt-2'>
                <label className='form-lable text-xl' htmlFor ='password'>Password</label>
                <input type='password' ref={passwordRef} name='password' className='form-control p-1'></input>
              </div>
              <div className='form-group flex flex-col w-full  mt-2'>
                <label className='form-lable text-xl' htmlFor ='passwordConfirm'>Email</label>
                <input type='password' ref={passwordConfirmRef} name='passwordConfirm' className='form-control p-1'></input>
              </div>
              <button disabled={loading} className='text-[white] mt-3 w-full bg-[#0263cd] p-1 rounded-md'>Sign Up</button>
            </form>
          </div>
          <div className="w-full text-center text-lg mt-2">
              Already have an account? <Link to='/login'>Log in</Link>
          </div>
      </div>
    </div>
  );
}

export default SignUp;
