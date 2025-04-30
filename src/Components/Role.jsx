import React from 'react'
import { MapPin, Briefcase } from 'lucide-react';

const Role = () => {
  return (
    <div>
      <div className="text-center py-16 px-4" id='mentors'>

        <h2 className="text-4xl font-bold mb-4 text-gray-800">What Are You Looking For?</h2>
        <p className="mb-10 text-gray-600 pb-8">
          Travel Mate connects you with the right opportunities—whether you're planning your next trip or offering unforgettable travel experiences.
        </p>

        {/* Cards in Flex Row */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6">

          {/* Traveler Card */}
          <div className="card bg-white w-96 shadow-md p-4">
            <MapPin className='w-14 h-14 text-orange-500' />
            <div className="card-body text-left text-gray-700 p-4">
              <h2 className="card-title text-left">Are you a Traveler?</h2>
              <p className='pb-4'>Explore, book, and manage your dream vacations all in one place—customized just for you.</p>
              <div className="card-actions justify-start">
                <button className="btn rounded-full bg-gray-800 px-4 py-4 border-0 text-white">Start Exploring</button>
              </div>
            </div>
          </div>

          {/* Travel Agent Card */}
          <div className="card bg-orange-500 w-96 shadow-md p-4">
            <Briefcase className='w-14 h-14 text-white' />
            <div className="card-body text-left text-white p-4">
              <h2 className="card-title text-left">Are you a Travel Agent?</h2>
              <p className='pb-4'>Join our platform to connect with travelers, showcase your packages, and grow your travel business.</p>
              <div className="card-actions justify-start">
                <button className="btn rounded-full bg-white px-4 py-4 border-0 text-gray-700">Join Now</button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Role
