import Lottie from 'lottie-react'
import registeranim from '../../public/Animation/Regisanim.json'
import '../Components/RegisterCompo.css'
import { MdEmail } from "react-icons/md"
import { FaKey } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa"
import { IoEye } from "react-icons/io5"
import { IoEyeOff } from "react-icons/io5"
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState, CSSProperties } from "react";
import { BeatLoader } from 'react-spinners'

const RegisterCompo = () => {
  //========================== Firebase variables part
  const auth = getAuth();
  //========================== Hide/Show Password
  const [showPass , setShowPass] = useState(false)
  const handleShowPass = ()=>{
    setShowPass(!showPass)
  }
  const [showPass2 , setShowPass2] = useState(false)
  const handleShowPass2 = ()=>{
    setShowPass2(!showPass2)
  }
  //========================== State Part
  const [name , showName]              = useState('')
  const [nameErr , showNameErr]        = useState('')
  const [email , showEmail]            = useState('')
  const [emailErr , showEmailErr]      = useState('')
  const [pass , letPass]               = useState('')
  const [passErr , letPassErr]         = useState('')
  const [conPass , conLetPass]         = useState('')
  const [conPassErr , conLetPassErr]   = useState('')
  const [loading , setLoading]         = useState(false)
  const navigate                            = useNavigate()

  //========================== Function Part
  const handleName = (e)=>{
    showName(e.target.value)
    showNameErr('')
  }
  const handleEmail = (e)=>{
    showEmail(e.target.value)
    showEmailErr('')
  }
  const handlePass = (e)=>{
    letPass(e.target.value)
    letPassErr('')
  }
  const handleConPass = (e)=>{
    conLetPass(e.target.value)
    conLetPassErr('')
  }
  //========================== Submit Part
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name){
      showNameErr('Enter your Full Name')
    }if(!email){
      showEmailErr('Enter your E-Mail Address')
    }if(!pass){
      letPassErr('Enter Password')
    }if(!conPass){
      conLetPassErr('Confirm Password')
    }else{
      setLoading(true)
          createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        setLoading(false)
        toast.success('Registration has been successfull', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          navigate('/sign-in')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false)
        if(errorCode == 'auth/weak-password'){
          letPassErr('Password must be at least 6 characters')
        }
        if(errorCode == 'auth/email-already-in-use'){
          toast.error('E-Mail already in used', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      });
      // toast.success('Account Created Successfully', {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      //   transition: Bounce,
      //   });
    }
  }
  return (
    <>
      <div className="container">
        <div className="flex justify-around items-center h-screen">
            <form onSubmit={handleSubmit} className='RCformBox'>
                <h1 className='text-center text-[#8ae9e4] font-bold text-xl'>Create a New Account</h1>
                <label className='text-white text-md'>Full Name</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <FaUser className='text-white text-xl' />
                    <input onChange={handleName} className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type="text" />
                </div>
                <p className='text-red-600 text-md mt-2'>{nameErr}</p>
                <br />
                <label className='text-white text-md'>E-Mail</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <MdEmail className='text-white text-xl' />
                    <input onChange={handleEmail} className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type="email" />
                </div>
                <p className='text-red-600 text-md mt-2'>{emailErr}</p>
                <br />
                <label className='text-white text-md'>Password</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <FaKey className='text-white text-xl' />
                    <input onChange={handlePass} className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type={showPass ? 'text' : 'password'} />
                    {
                      showPass?
                      <IoEye onClick={handleShowPass} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                      :
                      <IoEyeOff onClick={handleShowPass} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                    }
                </div>
                <p className='text-red-600 text-md mt-2'>{passErr}</p>
                <br />
                <label className='text-white text-md'>Comfirm Password</label>
                <br />
                <div className="w-full p-3 rounded-[10px] relative border-white border-2 border-solid">
                    <FaKey className='text-white text-xl' />
                    <input onChange={handleConPass} className='inpBox text-white pl-10 w-full bg-transparent border-none outline-none h-full absolute top-0 right-0 border-2' type={showPass2 ? 'text' : 'password'} />
                    {
                      showPass2?
                      <IoEye onClick={handleShowPass2} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                      :
                      <IoEyeOff onClick={handleShowPass2} className='absolute top-[50%] translate-y-[-50%] mr-3 right-0 text-white text-xl font-bold'/>
                    }
                </div>
                <p className='text-red-600 text-md mt-2'>{conPassErr}</p>
                <br />
                {
                loading ?
                <div className='flex justify-center items-center w-full p-3 bg-black text-white rounded-[15px] text-xl font-semibold active:scale-[1.1] transition-all'>  
                <BeatLoader color='#fff' size='24px' />
                </div>
                :
                <button className='w-full p-3 bg-black text-white rounded-[15px] text-xl font-semibold active:scale-[1.1] transition-all' type='submit'>Create Account</button>
                }
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
