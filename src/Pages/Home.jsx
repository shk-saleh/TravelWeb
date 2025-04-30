import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Courses from '../Components/Courses'
import Stats from '../Components/Stats'
import Add from '../Components/Add'
import FAQ from '../Components/FAQ'
import Role from '../Components/Role'
import Footer from '../Components/Footer'
import Reviews from '../Components/Review'

const Home = () => {
  return (
    <div className='bg-white  font-display'>

      <Navbar/> 
      <Hero/>
      <Stats/>
      <Courses/>
      <Add/>
      <Reviews/>
      <FAQ/>
      <Role/>
      <Footer/>
      
    </div>
  )
}

export default Home