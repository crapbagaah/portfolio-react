import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub,FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/Logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]= useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#06010f] shadow-lg shadow-purple-400 text-gray-300'>
        <div>
            <img className='rounded-[50px]' src={Logo} alt="Logo image" style={{width:'80px'} } />
        </div>

        {/*menu*/}
        
            <ul className='hidden md:flex'>

                <li>
                <Link to="home" smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>

                <li>
                <Link to="about" smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>

                <li>
                <Link to="experience" smooth={true} offset={50} duration={500}>
                Experience
                </Link>
                </li>

                <li>
                <Link to="skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="work" smooth={true} offset={50} duration={500}>
                Work
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} offset={50} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
      

        {/*hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10 '>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>


        {/*mobile menu*/}
        <ul className={!nav? 'hidden' : 'absolute bg-opacity-75 top-0 left-0 w-full h-screen bg-[#06010f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to="home" smooth={true} offset={50} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to="about" smooth={true} offset={50} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to="experience" smooth={true} offset={50} duration={500}>
                Experience
            </Link>
            </li>
            <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to="skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to="work" smooth={true} offset={50} duration={500}>
                Work
                </Link>
            </li>
            <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to="contact" smooth={true} offset={50} duration={500}>
                Contact
                </Link>
            </li>
        </ul>

        {/*social icons*/}
        <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#642bcc]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://www.linkedin.com/in/sahelisahoo/">LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'
                    href="https://github.com/crapbagaah">Github <FaGithub size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#642bcc]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="mailto:sahelisahoo1809@gamil.com">Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://drive.google.com/file/d/1_yGhx7ktYzuT1B-WeZ53Yi0m3rlCDJpc/view?usp=sharing">Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar