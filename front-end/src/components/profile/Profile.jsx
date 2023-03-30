import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMessage } from 'react-icons/ai'
import { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import House from '../propertySection/House'


const Profile = () => {
    
    const profile = useSelector((state) => state.auth.login.currentUser);
    const [userAllProperty, setUserAllProperty] = useState([]);
    useEffect(() => {
      const getUserProperty = async() => {
        const res = await axios.get('http://localhost:5000/api/property/');
        // return res;
        setUserAllProperty(res.data);
        // console.log(res.data)
      }
      
      getUserProperty().catch((err) => console.log(err));
      
    }, []);

    useEffect(() => {
        const getUserId = async () => {
            const usId = await axios.get(`http://localhost:5000/api/property/profile/${profile?._id}`);
            console.log("ALOOOOOO",usId);
            setUserAllProperty(usId.data)

        }
        getUserId();
    }, [])

  return (
    <div className='flex fle-1'>
        <div className=' w-2/6 px-10 my-10'>
            <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
                <div className=" flex items-center justify-center align-center mb-8">
                    <div className="w-28 h-28 p-1 border border-gray-300 rounded-full">
                        <img src={profile.image} alt="" />
                    </div>
                </div>
            

                <div className='text-base font-medium max-w-[260px] mb-4'>Tài khoản: {profile?.username}</div>
                <div className='text-base font-medium max-w-[260px] mb-4'>Email: {profile?.email}</div>
                <form action="" className="flex flex-col gap-y-4">

                    <div className='flex gap-x-2 ms:mx-auto ms:px-3'>
                        {/* <button
                        className='bg-blue-500 hover:bg-blue-800 text-white rounded p-4 text-sm w-full transition'
                        type='submit'
                        >
                        <AiOutlineMessage className='float-left flex flex-1 align-center justify-center mt-0.5'/>
                        <div className="justify-center">Chat ngay</div>
                        </button> */}
                        <button className='border border-blue-500 text-blue-800 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'>
                        <FiPhoneCall className='float-left flex align-center justify-center mt-0.5'/>
                        <div className='justify-center'>{profile.phone}</div>
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="w-4/6">
        
        {profile?.PropertyList &&
            <>
                <section className='mb-20'>
                    <div className='py-5 text-xl text-blue-500 font-medium'>Các bài đã đăng</div>
                    <div className='container mx-auto pl-0 pr-5'>
                        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
                            {userAllProperty?.map((house, index) => {
                            console.log(profile.PropertyList)
                            return (
                                <Link to={`/property/${house._id}`} key={index}>
                                    <House house={house} />
                                </Link>
                            );
                            })}
                        </div>
                    </div>
                </section>
            </>
        }
        
        </div>
    </div>
  )
}

export default Profile