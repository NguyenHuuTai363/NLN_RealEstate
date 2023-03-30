import React from 'react'
import AdminProperty from './AdminProperty';
import axios from 'axios';
import { useEffect, useState } from 'react'

const AdminPropertyList = () => {
    const [adminAllProperty, setAdminAllProperty] = useState([]);
    useEffect(() => {
      const getAdminProperty = async() => {
        const res = await axios.get('http://localhost:5000/api/property/');
        setAdminAllProperty(res.data);
      }
      getAdminProperty().catch((err) => console.log(err));
      
    }, []);

  return (
    <section className='mb-20'>
        <div className='container mx-auto ms:container ss:container'>
        <h1 className='text-2xl font-medium text-blue-500 py-5 sm:px-1'>Danh sách bài đăng</h1>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
            {adminAllProperty.map((house, key) => {
              return (
                // <Link to={`/property/${house._id}`} key={index}>
                  <AdminProperty house={house} key={key}/>
                // </Link>
              );
            })}
          </div>
        </div>
      </section>
  )
}

export default AdminPropertyList