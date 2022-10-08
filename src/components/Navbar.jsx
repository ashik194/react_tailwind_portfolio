import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import Link from 'react-scroll/modules/components/Link';

function Navbar() {

    const [bar, setBar] = useState()

    const links = [
        {
            id: 1,
            link : 'Home'
        },
        {
            id: 2,
            link : 'About Me'
        },
        {
            id: 3,
            link : 'Skills'
        },
        {
            id: 4,
            link : 'Projects'
        },
        {
            id: 5,
            link : 'Contact'
        },
    ]
  return (
    <div className='flex justify-between bg-black text-white px-4 w-full h-20 fixed items-center'>
        <div>
            <h1 className='text-4xl font-bold font-signature'>Md. Ashikur Rahman</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className='px-4 text-medium text-gray-500 font-bold capitalize cursor-pointer hover:scale-110 duration-200'><Link to={link} smooth duration={500}>{link}</Link></li>
            ))}
        </ul>
        <div onClick={() => setBar(!bar)} className='md:hidden cursor-pointer px-4 text-gray-500 pr-4 z-10'>
            {bar ? <FaTimes /> : <FaBars />}
        </div>

            <div className={bar ? "md:hidden fixed w-full h-full left-0 top-0 bg-gray-900/70 backdrop-blur" : ""} >
                <div className={bar ? "w-4/5 left-0 top-0 fixed h-full bg-gray-900 text-white p-10 ease-in duration-300" : "fixed top-0 left-[-100%] p-10 duration-300 ease-in"}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2 className='text-4xl font-bold capitalize cursor-pointer'>Md. Ashikur Rahman</h2>
                        </div>
                        <ul className='my-4'>
                            {links.map(({id, link}) => (
                                <li key={id} className='px-4 py-2 text-medium font-bold capitalize cursor-pointer hover:scale-110 duration-200'>
                                    <Link to={link} smooth duration={500}>{link}</Link>
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        
    </div>
  )
}

export default Navbar