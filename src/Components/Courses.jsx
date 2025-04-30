import React from 'react'
import { Star } from 'lucide-react';


const Courses = () => {
  return (
    <div>

        <div className="px-12 py-10 relative" id='courses'>
            <button className='bg-orange-500 rounded-full px-2 py-1 top-5 absolute text-[12px] font-light left-16 -rotate-8'>Wander with us</button>
            <h2 className="text-3xl font-bold px-4 py-2 inline-block mb-10 text-center mx-auto text-gray-800">Explore new places</h2>

            <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap mb-10">

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFyaXN8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Paris,France</h2>
                    <p className='pb-8'>
                    Known for the Eiffel Tower, art museums like the Louvre, and romantic ambiance.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>$2,500</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D"
                    alt=""
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Tokyo,Japan</h2>
                    <p className='pb-8'>
                    A mix of futuristic tech, traditional temples, and world-renowned cuisine.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>$2,800</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFsaXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Bali,Indonesia</h2>
                    <p className='pb-8'>
                    Famous for its scenic beaches, spiritual retreats, and affordable luxury stays.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>$1,500</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>


            </div>

            {/* Second Row of Cards */}
            <div className="flex flex-col lg:flex-row justify-center gap-8 flex-wrap">
                {/* App Development */}
                
                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">New York City,USA</h2>
                    <p className='pb-8'>
                    Attracts visitors with iconic landmarks like Times Square, Broadway, and Central Park.  
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>$2,700 </span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                {/* Cyber Security */}

                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Rome,Italy</h2>
                    <p className='pb-8'>
                    Rich in ancient history, from the Colosseum to the Vatican, paired with amazing food.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>$2,300</span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

                {/* Digital Marketing */}

            
                <div className="card bg-white text-gray-800 w-96 shadow-md">
                <figure>
                    <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RHViYWl8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    />
                </figure>
                <div className="card-body">
                    <div className='flex gap-1'>
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                        <Star className='w-4 text-yellow-600' />
                    </div>
                    <h2 className="card-title">Dubai,UAE</h2>
                    <p className='pb-8'>
                    Offers ultra-modern skyscrapers, luxury shopping, desert safaris, and cultural experiences.
                    </p>
                    <div className="card-actions flex items-center justify-between font-bold">
                    <span className='text-orange-500 text-xl'>$2,600 </span>
                    <button className="btn bg-emerald-600 rounded-full border-0 px-8">Buy Now</button>
                    </div>
                </div>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Courses