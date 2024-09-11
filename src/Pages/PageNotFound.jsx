import Lottie from 'lottie-react'
import pageNotFound from '../../public/Animation/PageNotFound.json'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-5 h-screen flex-col ">
        <div className="bg-[#525252] w-[555px] rounded-lg">
            <Lottie animationData={pageNotFound}/>
        </div>
        <Link className='text-2xl font-black bg-black text-white p-5 rounded-[10px] hover:text-[#b1b1b1] active:text-white transition-all' to='/'>Go to Homepage</Link>
      </div>
    </>
  )
}

export default PageNotFound