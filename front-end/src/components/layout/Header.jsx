import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import Logo from '../../assets/img/bds-logo.jpg'
import {FaUserCircle} from 'react-icons/fa'
import {CgMathPlus} from 'react-icons/cg'
import {AiFillTool} from 'react-icons/ai'

const Header = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleMenuOne = () => {
    // do something
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload(false);
  }

  return (
    <header className='py-6 mb-0 border-b ll:mx-10 ll:pr-8 xl:mr-5 lg:mr-7 ms:mx-2 ss:mx-0'>
        <div className="container mx-auto flex justify-between iteams-center ss:justify-between ss:items-center ss:pr-4">
            <Link to='/'>
                <img className='w-[80px]' src={Logo} alt="" />
            </Link>
           

            <div className='flex items-center gap-1 ss:gap-1'>
                <Link className='border border-blue-500 hover:text-blue-800 hover:bg-blue-500 xl:px-4 py-2.5 text-2xl ss:text-sm ss:px-2 ss:flex rounded-lg transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:text-white hover:shadow-2xl hover:gap-1 flex flex-1' to='/AddProperty'>
                  Đăng tin
                </Link>
                {user?.isAdmin && 
                    <>
                      <Link className='border border-blue-500 hover:text-blue-800 hover:bg-blue-500 px-1 py-2.5 ss:text-sm ss:px-0 ss:flex rounded-lg transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:text-white hover:shadow-2xl hover:gap-1 flex flex-1 block' to='/admin'>
                        <AiFillTool className='mx-auto mt-1 ss:justify-center'/> <p className='px-1 flex flex-1 w-[70px]'>Quản lý</p>
                      </Link>
                    </> 
                }
                {user? (
                  <>
                  <div className='bg-blue-500 hover:bg-blue-800 text-white px-3 py-[10px] ss:text-sm ss:px-2R ss:flex rounded-lg transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:shadow-2xl hover:gap-1 flex gap-1' onClick={handleOpen}> 
                    <FaUserCircle className='mx-auto mt-1'/>{user.username}
                  <div className='py-3'>
                    <div className="relative left-6 transition transform duration-100 ease-out">
                      {isOpen ? (
                        <ul className="menu absolute right-0 mt-7 bg-white rounded-md shadow-lg border w-[123px] opacity-90">
                          <li className=" text-blue-800 font-medium block py-2 text-sm text-center rounded-md transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:rounded-md hover:text-white hover:shadow-2xl hover:gap-1">
                            <button onClick={handleMenuOne}>
                              <Link to='/Profile'>Tài khoản</Link>
                            </button>
                          </li>
                          <li className=" text-blue-800 font-medium block py-2 text-sm text-center rounded-md transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:rounded-md hover:text-white hover:shadow-2xl hover:gap-1">
                            <button onClick={logout}>Đăng xuất</button>
                          </li>
                        </ul>
                      ) : null}
                    </div>
                  </div>
                  </div>
                  </>
                ) : ( 
                  <>
                    <Link className='bg-blue-500 hover:bg-blue-800 text-white px-2 py-[10px] ss:px-1 rounded-lg transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:shadow-2xl hover:rounded-lg hover:gap-1' to='/Login'>Đăng nhập</Link>
                  </>
                )}
                
            </div>
        </div>
      
    </header>
  )
}

export default Header