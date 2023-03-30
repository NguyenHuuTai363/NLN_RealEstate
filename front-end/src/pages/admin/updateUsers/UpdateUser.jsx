import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const UpdateUser = (props) => {
    // console.log(props.id)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const viewUser = async() => {
          const res = await axios.get(`http://localhost:5000/api/users/find/${props.id}`);
          setUsername(res.data.username);
          setEmail(res.data.email);
          setPhone(res.data.phone);
         
        }
        viewUser();
      }, []);

    const updateUser = async() => {
        // e.preventDefault();
        const userdata = {
            username: username,
            email: email,
            phone: phone
        }
        
        try {
            const res = await axios.put(`http://localhost:5000/api/users/update/${props.id}`, userdata, {headers:{"Content-Type":"application/json"}});
            console.log("DEMO", res.data);
            
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <div className="text-3xl font-semibold text-center text-blue-500 uppercase">
                    Chỉnh sửa người dùng
                </div>
                <form className="mt-6" onSubmit={updateUser}>
                    <div className="mb-6">
                        <input
                            type="username" placeholder='Nhập tên người dùng'
                            name='username' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-6">
                        <input
                            type="email" placeholder='Nhập Email'
                            name='email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="phone" placeholder='Nhập số điện thoại'
                            name='phone' 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <input 
                            type="password" placeholder='Nhập mật khẩu'
                            name='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default UpdateUser