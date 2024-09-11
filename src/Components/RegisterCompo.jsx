import Lottie from 'lottie-react'
import registeranim from '../../public/Animation/Regisanim.json'
import '../Components/RegisterCompo.css'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const RegisterCompo = () => {
  const [showPass , setShowPass] = useState(false)
  const handleShowPass = ()=>{
    setShowPass(!showPass)
  }
  const [showPass2 , setShowPass2] = useState(false)
  const handleShowPass2 = ()=>{
    setShowPass2(!showPass2)
  }
  return (
    <>
      <div className="container">
        <div className="flex justify-around items-center h-screen">
            <form className='RCformBox'>
                <h1 className='text-center text-[#8ae9e4] font-bold text-xl'>Create a New Account</h1>
                <label className='text-white text-md'>Full Name</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <FaUser className='text-white text-xl' />
                    <input className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type="text" />
                </div>
                <br />
                <br />
                <label className='text-white text-md'>E-Mail</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <MdEmail className='text-white text-xl' />
                    <input className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type="email" />
                </div>
                <br />
                <br />
                <label className='text-white text-md'>Password</label>
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
                <br />
                <label className='text-white text-md'>Comfirm Password</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <FaKey className='text-white text-xl' />
                    <input className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type={showPass2 ? 'text' : 'password'} />
                    {
                      showPass2?
                      <IoEye onClick={handleShowPass2} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                      :
                      <IoEyeOff onClick={handleShowPass2} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                    }
                </div>
                <br />
                <button className='w-full p-3 bg-black text-white rounded-[15px] text-xl font-semibold active:scale-[1.1] transition-all' type='submit'>Create Account</button>
                <div className="flex justify-between items-center mt-5">
                    <p className='text-xl text-white font-normal'>Already have an Account?</p>
                    <Link className='text-xl text-[#c0c0c0] font-normal' to='/sign-in'>Log In here</Link>
                </div>
            </form>
            <Lottie className='w-[500px]' animationData={registeranim}/>
        </div>
      </div>
    </>
  )
}

export default RegisterCompo
