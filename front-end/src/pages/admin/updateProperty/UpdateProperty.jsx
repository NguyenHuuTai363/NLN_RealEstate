import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';

const UpdateProperty = (props) => {
    // console.log(props.id)
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [surface, setSurface] = useState("");
    const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    
    useEffect(() => {
        const viewProperty = async() => {
          const res = await axios.get(`http://localhost:5000/api/property/find/${props.id}`);
        //   console.log(res);
          setType(res.data.type);
          setName(res.data.name);
          setDescription(res.data.description);
          setImage(res.data.image);
          setCountry(res.data.country);
          setAddress(res.data.address);
          setBedrooms(res.data.bedrooms);
          setBathrooms(res.data.bathrooms);
          setSurface(res.data.surface);
          setYear(res.data.year);
          setPrice(res.data.price)
        }
        viewProperty();
      }, []);
   
    const updateProperty = async() => {
        // e.preventDefault();
        const data = {
            type: type,
            name: name,
            description: description,
   
            country: country,
            address: address,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            surface: surface,
            year: year,
            price: price
        }
        
        try {
            const res = await axios.put(`http://localhost:5000/api/property/update/${props.id}`, data, {headers:{"Content-Type":"application/json"}});
            console.log("DEMO", res.data);
            
        } catch (err) {
            console.log(err);
        }
    }
  
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-6xl">
                <div className="text-3xl font-semibold text-center text-blue-500 uppercase">
                    Chỉnh sửa bài đăng
                </div>
                <form className="mt-6" onSubmit={updateProperty}>
                    <div className="flex flex-1 gap-x-4">
                        <div className="mx-auto w-1/2">
                            <div className="mb-6">
                                <input
                                    type="text" placeholder='Loại bất động sản'
                                    name='type' 
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="name" placeholder='Tên bất động sản'
                                    name='name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <textarea
                                    type="text" placeholder='Mô tả'
                                    name='description'
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="block w-full h-[94px] px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="file" placeholder='image'
                                    name='image'
                                    onChange={(e) => setImage(e.target.files[0])}
                                    className="block w-full h-[42px] px-4 py-2 mt-[22px] text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text" placeholder='Quốc gia'
                                    name='country'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            
                        </div>

                        <div className='mx-auto w-1/2'>
                            <div className="mb-6">
                                <input
                                    type="text" placeholder='Địa chỉ'
                                    name='address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="number" placeholder='Bedrooms'
                                    name='bedrooms'
                                    value={bedrooms}
                                    onChange={(e) => setBedrooms(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="number" placeholder='Bathrooms'
                                    name='bathrooms'
                                    value={bathrooms}
                                    onChange={(e) => setBathrooms(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text" placeholder='Diện tích'
                                    name='surface'
                                    value={surface}
                                    onChange={(e) => setSurface(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="number" placeholder='Năm xây dựng'
                                    name='year'
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text" placeholder='Giá'
                                    name='price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>

                            </div>
                        </div>
                    <div className="mt-6">
                        <button type="submit"  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-900 focus:outline-none focus:bg-blue-900">
                            Cập nhật
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default UpdateProperty