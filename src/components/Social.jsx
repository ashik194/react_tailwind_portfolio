import React from 'react'
import {FaLinkedinIn, FaFacebookF, FaGithub, FaInstagram} from 'react-icons/fa'

function Social() {
  const sociallinks = [
    {
      id:1,
      child: (
        <>Github <FaGithub size={30}/></>
      ),
      style: "rounded-tr-md",
      href: "github.com/Ashik194",
    },
    {
      id:2,
      child: (
        <>Linkedin <FaLinkedinIn size={30}/></>
      ),
      style: "rounded-tr-md",
      href: "linkedin.com/in/iamashik194",
    },
    {
      id:3,
      child: (
        <>Facebook <FaFacebookF size={30}/></>
      ),
      style: "rounded-tr-md",
      href: "facebook.com/iamashik194",
    },
    {
      id:4,
      child: (
        <>Instagram <FaInstagram size={30}/></>
      ),
      style: "rounded-br-md",
      href: "instagram.com/iamashik194",
    },
    
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
          {sociallinks.map(({id, child, href}) => (
            <li key={id} className='flex justify-between items-center w-40 h-14 px-4 hover:rounded-md ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                <a href={href} className='flex justify-between items-center w-full text-white' target="_blank">
                  {child}
                </a>
            </li>
          ))}
            
        </ul>
    </div>
  )
}

export default Social