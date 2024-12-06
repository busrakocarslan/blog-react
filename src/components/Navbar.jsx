import React, { useContext, useState } from 'react'
import { Link,NavLink, useLocation } from 'react-router-dom'
import { FcHome } from "react-icons/fc"; 
import { FaSignOutAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { AuthContext } from '../context/AuthProvider';

const navigation=[
   
    {
        title:"Home",
        path:"/dashboard/home"
    },
    {
        title:"Blog",
        path:"/dashboard/blog"
    },
    {
        title:"NewBlog",
        path:"/dashboard/newblog"
    },
]

const Navbar = () => {
    const[show,setShow]=useState(false)
    const {logout}=useContext(AuthContext)
    const location=useLocation()
  return (
    
    <nav className='min-h-[10vh] py-2 bg-primary' >
        <div>
        
            <div className='md:hidden flex justify-between p-5'>
            <Link to="https://www.linkedin.com/in/busrakocarslan/" target='true'><FcHome /></Link>
                <button onClick={()=>setShow(!show)} className='menu-btn text-gray-900 hover:text-gray-500 text-label duration-150' > {show ? <MdClose /> :
                    <GiHamburgerMenu />}

                </button>

            </div>
            <div className= {` ${show? "flex flex-col items-center justify-center": "hidden"} md:flex md:justify-start md:items-center gap-10 ml-10 text-label font-bold` }>
               
                <div className='max-md:text-center md:items-center md:text-end
                 '>
                    <ul className='md:flex gap-5 justify-start w-[90vw]  m-5'>
                        {
                            navigation.map(item=>(
                                <li key={item.title} className={`font-pageFont hover:text-orange-400 ps-1 hover:cursor-pointer pe-1 transition-all duration-300 ${
                                    location.pathname === item.path ? "font-montepasifico text-orange-400" : ""
                                  } `} >
                                   <NavLink to={item.path} element={item.title} >{item.title}</NavLink>
                                </li>
                            ))
                            
                        }
                    </ul>
                    <NavLink to={"/"} className='hover:text-black hover:font-pageFont p-2 duration-300 text-orange-400 rounded-xl font-montepasifico' onClick={()=>logout()}>LogOut<FaSignOutAlt className='inline-block ms-3'/></NavLink>
               

                </div>
                

            </div>
        </div>
    </nav>
  )
}

export default Navbar