import React from 'react'
import bannerimage from '../assets/mudp1.jpg'
import bannerBg from '../assets/banner_wallpaper.svg'

const Banner = () => {
  return (
    <div>
    <div style={
        {
            backgroundImage:`url(${bannerBg})`,
            backgroundSize:"cover"
        }
    } className="main-container flex items-center ">
    <div className=' w-full flex justify-center  text-white'>
    <div className='w-2/3  ms-15'>
    <h3 className='mt-4 text-3xl font-semibold'>Hi I am,</h3>
    <h1 className='mt-4 text-5xl font-bold'>Anandhu Reji</h1>
    <h2 className='mt-4 text-3xl font-bold'>I am a Full Stack Developer</h2>
    <p className='mt-4'>
    
    
    A passionate Full Stack Java Developer with over 2 years of hands-on experience 
    in crafting robust and scalable applications.
     My journey in the world of software development began with a deep curiosity for 
     creating seamless user experiences and a commitment to excellence in code..</p>
     
     <div className="icons-container flex space-x-5">
            <a className=" hover:bg-orange-600 border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-facebook"></i>
            </a>

            <a className=" hover:bg-orange-600   border cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-instagram"></i>
            </a>

            <a className="  hover:bg-orange-600 border  cursor-pointer  px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-youtube"></i>
            </a>

            <a className=" hover:bg-orange-600  border  cursor-pointer px-3 py-4 w-16 h-16  rounded-full flex justify-center items-center bg-gray-800">
              <i class="fa-brands text-4xl  fa-linkedin-in"></i>
            </a>
          </div>
     <br />
    
    <a className="mt-4 px-3 py-3 text-1xl bg-blue-400 rounded-full shadow" href='/contact'>Contact Me</a>
    </div>
    </div>


    <div className=' w-full flex justify-center'>
    <img className="rounded-full shadow-lg w-fit" src={bannerimage} />
    
    </div>
    </div>
    </div>
  )
}

export default Banner