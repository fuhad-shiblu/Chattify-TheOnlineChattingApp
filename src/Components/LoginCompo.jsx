import '../../src/Components/LoginCompo.css'
import loginanim from '../../public/Animation/Loginanim.json'
import Lottie from 'lottie-react'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useState } from 'react';

const LoginCompo = () => {
  const [showPass , setShowPass] = useState(false)
  const handleShowPass = ()=>{
    setShowPass(!showPass)
  }
  return (
    <>
      <div className="container">
        <div className="LPAnimForm">
            {/*========== Log In Animation ==========*/}
            <Lottie className='w-[500px]' animationData={loginanim}/>
            {/*========== Log In Form ==========*/}
            <form className='LPformBox'>
                <h1>Welcome to Chatify</h1>
                <label className='text-white text-xl'>E-Mail</label>
                <br />
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <MdEmail className='text-white text-xl' />
                    <input className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type="email" />
                </div>
                <br />
                <br />
                <label className='text-white text-xl'>Password</label>
                <br />
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <FaKey className='text-white text-xl' />
                    <input className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type={showPass ? 'text' : 'password'} />
                    {
                      showPass?
                      <IoEye onClick={handleShowPass} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                      :
                      <IoEyeOff onClick={handleShowPass} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                    }
                </div>
                <br />
                <button className='w-full p-3 bg-black text-white rounded-[15px] text-xl font-semibold active:scale-[1.1] transition-all' type='submit'>Log In</button>
                <Link className='flex justify-end mt-3 text-black font-bold' to='/reset-password'>Forgot Password?</Link>
                <div className="flex justify-between items-center mt-5">
                    <p className='text-xl text-white'>Don't have an Account?</p>
                    <Link className='text-xl text-[#c0c0c0]' to='/sign-up'>Create Account</Link>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default LoginCompo
