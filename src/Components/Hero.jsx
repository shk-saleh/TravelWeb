import React from 'react'
import { MoveUpRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
   <div>
     
      <div className="overflow-x-hidden" id='hero'>
        <div className="hero min-h-[40vh] w-screen bg-linear-to-b from-white to-orange-100">
          <div className="hero-content flex-col lg:flex-row-reverse justify-between items-center w-screen gap-12 pt-40">

            <main className='w-[450px] h-[450px]'>
              <Spline scene="https://prod.spline.design/DVPVV4EnkryQrO8d/scene.splinecode" />
            </main>


            <div className="w-full max-w-2xl relative">
              <button className='bg-orange-500 rounded-full px-2 py-1 -top-8 absolute text-[12px] font-light left-0 -rotate-8'>Travel with ease</button>
              <h1 className="text-5xl font-bold leading-tight text-gray-900">
              Discover new places <br /> escape the ordinary <span className="text-orange-500"> <br /> -Travel Mate</span>
              </h1>
              <p className="py-6 text-gray-600 text-sm">
              Welcome to your ultimate travel companion—where travel mate meets convenience. Whether you're dreaming of serene beaches, bustling cities, or hidden gems, our platform helps you discover, plan, and book unforgettable adventures. With curated guides, seamless booking tools, and inspiration at every turn, every journey begins right here.
              </p>
              <button className="btn rounded-full bg-emerald-600 px-4 py-4 border-0">Browse Packages <MoveUpRight className='w-5 h-5' /></button>
            </div>

          </div>
        </div>
      </div>

   </div>
  )
}

export default Hero