import React from 'react'
import mypicture from '../images/Md_Ashikur_Rahman.jpg';
import {FaChevronRight} from 'react-icons/fa';


function Hero() {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-500'>
        <div className='mx-w-screen-lg mx-auto flex flex-col items-center md:pt-10 lg:pt-10 justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='text-4xl font-bold sm:text-7xl text-white'>Md. Ashikur Rahman</h1>
                <h3 className='text-2xl font-bold sm:text-3xl text-white'>Software Engineer</h3>
                <p className='text-gray-400 py-4 mx-w-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis et unde ipsam labore magni dignissimos iure veniam excepturi, eos facere quisquam quis soluta. Nostrum, nisi. Error nostrum perferendis culpa tenetur.</p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold text-2xl'>
                        Projects
                        <span className='ml-2 group-hover:rotate-90 duration-300'><FaChevronRight size={25} /></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={mypicture} alt="my_picture" className='rounded-3xl md:w-2/3 mx-auto sm:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Hero