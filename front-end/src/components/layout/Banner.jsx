import React, { useState } from 'react'
import Image from '../../assets/img/property-banner.jpg'
import {FaSearchLocation} from 'react-icons/fa'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import House from '../propertySection/House'

const Banner = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchSearch = async () => {
      const rs = await axios.get(`http://localhost:5000/api/property/search/${search}`);
      setList(rs.data)
    };
    if(search) {
      fetchSearch();
    }else {
      setList([]);
    }
  }, [search]);
  return (
    
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <img src={Image} alt="" />
      <div className='px-[30px] py-6 ll:max-w-[980px] lg:max-w-[700px] md:max-w-[600px] max-w-[970px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur md:shadow-1 md:bg-white md:bg-transparent md:backdrop-blur rounded-lg'>
          <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow-xl">
            <div class="grid place-items-center h-full w-12 text-gray-300">
                <FaSearchLocation className='text-blue-500'/>
            </div>

            <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm kiếm bất động sản.." /> 
          </div>
      </div>

      <section className='mb-20'>
        <div className='container mx-auto'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {list?.map(house => {
            return (
              <Link className='z-[400] mt-10 h-[900px]' onClick={() => setSearch('')} to={`/property/${house._id}`} key={house._id}>
                <House house={house}/>
              </Link>
            )
          })}
          </div>
        </div>
      </section>
    
    </section>
  )
}

export default Banner