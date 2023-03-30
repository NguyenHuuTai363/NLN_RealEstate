import React, {useContext} from 'react'
import House from './House'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react'

const Houselist = () => {

    const [allProperty, setAllProperty] = useState([]);
    useEffect(() => {
      const getAllProperty = async() => {
        const res = await axios.get('http://localhost:5000/api/property/', {headers:{"Content-Type": "application/json"}});
        setAllProperty(res.data);
        console.log(res.data)
      }
      getAllProperty().catch((err) => console.log(err));
      
    }, []);
  
    return (
      <section className='mb-20'>
        <div className='container mx-auto '>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14 '>
            {allProperty.map((house, index) => {
              return (
                <Link to={`/property/${house._id}`} key={index}>
                  <House house={house} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
}

export default Houselist