import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddProperty = () => {
    const profile = useSelector((state) => state.auth.login.currentUser);
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [bedrooms, setBedrooms] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [surface, setSurface] = useState("");
  //  const [year, setYear] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    console.log(profile._id)
    const addProperty = async(e) => {
        e.preventDefault();
        console.warn(type, name, description, image, country, address, bedrooms, bathrooms, surface, price)
        const formData = new FormData();
        formData.append('idUser', profile._id);
        formData.append('type', type);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('country', country);
        formData.append('address', address);
        formData.append('bedrooms', bedrooms);
        formData.append('bathrooms', bathrooms);
        formData.append('surface', surface);
       // formData.append('year', year);
        formData.append('price', price);

        if(image !== null) {
            formData.append('image', image);
        }

        console.log([...formData]);
        try {
            const res = await axios.post('http://localhost:5000/api/property/upload' ,formData, {headers:{"Content-Type":"multipart/form-data"}});
            navigate("/")
            
            
        } catch (err) {

            console.log("okokokokokookrs",err);
        }
    }
  
    return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 pt-0 m-auto bg-white rounded-md shadow-xl lg:max-w-6xl">
                <h1 className="text-3xl font-semibold text-center text-blue-500 uppercase">
                    Đăng tin
                </h1>
                <form className="mt-6" onSubmit={addProperty} type='multipart/form-data'>
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
                                    className="block w-full h-[152px] px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
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

                            
                            
                        </div>

                        <div className='mx-auto w-1/2'>
                            <div className="mb-4">
                                <input
                                    type="text" placeholder='Quốc gia'
                                    name='country'
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
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

                            {/* <div className="mb-4">
                                <input
                                    type="number" placeholder='Năm xây dựng'
                                    name='year'
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-blue-800 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div> */}

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
                            Đăng
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
  )
}

export default AddProperty