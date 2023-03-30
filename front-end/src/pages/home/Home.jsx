import React from 'react'
import Banner from '../../components/layout/Banner'
import Houselist from '../../components/propertySection/Houselist'


const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner />
      <Houselist />
    </div>
  )
}

export default Home