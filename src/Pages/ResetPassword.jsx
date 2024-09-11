import { Link } from 'react-router-dom'
import '../../src/Pages/ResetPassword.css'

const ResetPassword = () => {
  return (
    <>
      <div className="container">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="resBox w-[500px] bg-white rounded-[10px] p-5">
                <h1 className="text-xl text-center mb-10">Reset Password</h1>
                <input className="w-full border-2 border-solid border-black outline-none p-5 rounded-[50px]" type="email" placeholder="Enter your E-Mail Address"/>
                <div className="flex justify-between items-center">
                  <Link className='bg-[#afafaf] rounded-[10px] px-5 p-3 mt-5 text-xl active:scale-[0.9] transition-all' to='/'>Cancel</Link>
                  <button className="px-5 mt-5 bg-black text-white p-3 text-xl rounded-[10px] font-semibold active:scale-[1.1] transition-all" type="submit">Reset</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
