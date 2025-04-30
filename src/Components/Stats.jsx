import React from 'react'

const Stats = () => {
  return (
    <div>
        <div className="bg-white py-14">

            <div className="para para-block w-full px-4 py-6 md:px-8 lg:px-16 mt-2 mb-2 mx-auto">
                <p className="text-2xl para mb-2 text-center text-gray-600"> <span className="font-bold text-2xl text-gray-800">With a trusted network of travel agents </span> and smart planning tools, Wander Ease connects you to unforgettable experiences. Customize trips, chat with agents, and travel without hassle.</p> 
            </div>

            <div className="flex items-center justify-center gap-20 stats stats-block stats-vertical lg:stats-horizontal w-full mb-2 px-20 text-gray-800 ">

                <div className="stats stat-block">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                    
                        </div>
                    <div className="stat-value">50+</div>
                    <div className="stat-desc text-gray-500 font-medium">
                        Trusted Agents  
                        </div>
                    </div>
                </div>

                <div className="stats stat-block">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                    
                        </div>
                    <div className="stat-value">10,000+</div>
                    <div className="stat-desc text-gray-500 font-medium">
                    Successful Bookings </div>

                    </div>
                </div>

                <div className="stats stat-block">
                    <div className="stat flex items-center">
                        <div className="stat-figure text-secondary">
                    
                        </div>
                    <div className="stat-value">100+</div>
                    <div className="stat-desc text-gray-500 font-medium">
                        Destinations Worldwide
                        </div>

                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Stats