import React from 'react'
// import { housesData } from '../data'
import { useParams } from 'react-router-dom'
import { BiBed, BiBath, BiArea } from 'react-icons/bi'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMessage } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const PropertyDetails = () => {
  const {id} = useParams()
  const profile = useSelector((state) => state.auth.login.currentUser);
  
  const [property, setProperty] = useState();
    useEffect(() => {
      const getProperty = async() => {
        const res = await axios.get(`http://localhost:5000/api/property/find/${id}`);
        // return res;
        console.log(res.data);
        setProperty(res.data);
        // console.log(property)
      }
      // getProperty().catch((err) => console.log(err));
      getProperty();
    }, []);
 

  return (
    <div className='container mx-auto py-7 min-h-[800px] mb-14' >
      
      {property  && <> <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-3">{property?.name}</h2>
          <h3 className="text-lg mb-4 md:mb-1">Địa chỉ: {property?.address}</h3>
        </div>
        <div className="mb-4 mt-4 lg:mb-0 w-[1000px] ll:max-w-[860px] lg:max-w-[480px] ms:max-w-[400px] ss:max-w-[360px] flex gap-x-2 text-sm ll:pr-96">
          <div className="bg-green-500 rounded-full text-white px-3 py-1 inline-block">Loại: {property?.type}</div>
          <div className="bg-blue-500 rounded-full text-white px-3 py-1 inline-block">Quốc gia: {property?.country}</div>
        </div>
        {/* <div className="text-3xl font-semibold text-blue-800 md:mb-3">Giá: {property?.price}</div> */}
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img className='rounded-lg' src={property?.image} alt="" />
          </div>
          <div className="gap-6 text-blue-800 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property?.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property?.bathrooms}</div>
            </div>
            <div className="flex gap-x-20 items-center ms:max-w-[400px]">
             <div className='flex w-1/2'>
                <BiArea className="text-2xl" />
                <div className="flex flex-1 text-lg font-medium">Diện tích: {property?.surface}</div>
             </div>
                <div className='w-1/2'>
                <div className="text-2xl font-semibold text-blue-800 pl-0 mt-2 md:mb-3 ms:mb-3">Giá: {property?.price}</div>
              </div>
            </div>
          </div>
          <p>Mô tả: {property?.description}</p>
        </div>

        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src={profile?.image} alt="" />
            </div>

            <div>
              <div className="font-bold text-lg">{profile?.username}</div>
              <Link to='' className='text-blue-800 text-sm'> View listings</Link>
            </div>
          </div>
        
          <form action="" className="flex flex-col gap-y-4">

            <div className='flex gap-x-2'>
              {/* <button
                className='bg-blue-500 hover:bg-blue-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'
              >
                <AiOutlineMessage className='float-left flex flex-1 align-center justify-center mt-0.5'/>
                <div className="justify-center">Chat ngay</div>
              </button> */}
              <button className='border border-blue-500 text-blue-800 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition'>
                <FiPhoneCall className='float-left flex align-center justify-center mt-0.5'/>
                <div className='justify-center'>{profile?.phone}</div>
              </button>
            </div>
          </form>
        </div>

      </div></>}
      
    </div>
  )
}

export default PropertyDetails