import React from 'react'
import {AppText} from '../Constants/index'
import { homeImage } from '../assets'
import Typewriter from 'typewriter-effect'
const Home = () => {
  return (
    <div id='home' className='mt-7 px-4 md:px-20 items-center flex flex-col md:flex-row justify-around'>
      <div className='item-center'>
        <h1>{AppText.hello}</h1>
        <h1 className='text-[40px] font-bold'>{AppText.Iam} {AppText.Kishore_k}<span className='text-purple-600'>
          <Typewriter
            options={{
              strings: [AppText.FrontedDeveloper,AppText.MernStackDevelper,AppText.BackendDeveloper,AppText.SprintBootDeveloper],
              autoStart: true,
              loop: true,
              
            }}
            />
          </span>
        </h1>
        <a href={require("../assets/kishore.pdf")} download="kishore_resume" >
          <button className='bg-purple-600 p-2 px-3 rounded-md mt-5 transition-all ease-in-out hover:scale-110 text-white'>
            Download Resume
          </button>
        </a>
      </div>
        <img className='w-[300px] md:w-[400px]' src={homeImage} alt="" />
    </div>
  )
}

export default Home