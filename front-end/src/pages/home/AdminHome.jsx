import React from 'react'
import { Link } from 'react-router-dom'

const AdminHome = ({children}) => {
  return (
    <div className='flex flex-1 min-h-[1800px] w-full'>
        <div className="bg-white-500 min-w-[200px] lg:min-w-[180px] ss:min-w-[100px] ss:w-24 border shadow-2xl">
          <div className='mt-10 flex justify-center items-center border border-none shadow-sm py-5 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:shadow-2xl hover:text-white rounded-md'>
            <Link to='/admin' className='font-semibold px-5 text-blue-500 hover:text-white'>Người dùng</Link>
          </div>
          <div className='mt-5 flex justify-center items-center border border-none shadow-sm py-5 transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 hover:shadow-2xl hover:text-white rounded-md'>
            <Link to='/adminpropertylist' className='font-semibold px-5 text-blue-500 hover:text-white'>Bài đăng</Link>
          </div>
        </div>
        <div className='ml-0 w-3/6 ms:w-full ss:w-full border'>
          <div className='mx-auto px-10 ms:px-0 ss:px-0'>
              <div className='sm:mx-auto ms:min-h-fit'>{children}</div>
          </div>
        </div>
    </div>
  )
}

export default AdminHome