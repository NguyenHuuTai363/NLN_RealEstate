import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {BsGoogle, BsGithub, BsTwitter} from 'react-icons/bs'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/requestMethods'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };
  
    return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-blue-500 uppercase">
                    Đăng nhập
                </h1>
                <form className="mt-6" onSubmit={handleLogin}>
                    <div className="mb-6">
                        <input
                            type="username" placeholder='Nhập tên tài khoản' 
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-4">
                        <input
                            type="password" placeholder='Nhập mật khẩu'
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <Link
                        className="text-xs text-blue-500 hover:underline"
                    >
                        Quên mật khẩu?
                    </Link>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                            Đăng nhập
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Hoặc</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button type="button" className="flex items-center justify-center w-full p-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
                        <BsGoogle/>
                    </button>
                    <button className="flex items-center justify-center w-full p-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
                        <BsGithub/>
                    </button>
                    <button className="flex items-center justify-center w-full p-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-blue-500">
                        <BsTwitter/>
                    </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Bạn chưa có tài khoản?{" "}
                    <Link className="font-medium text-blue-500 hover:underline" to='/Register'>
                        Đăng ký ngay
                    </Link>
                </p>
            </div>
        </div>
  )
}

export default Login