import React from 'react'

const Add = () => {
  return (
    <div>

        <div className="w-full py-20">
            <div className="hero min-h-screen w-full">
                <div className="hero-content flex-col lg:flex-row gap-24">
                {/* Image Section - same height as content */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                    src="https://plus.unsplash.com/premium_photo-1683880731020-83b984105a72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwbWFuJTIwd2l0aCUyMGElMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                    className="h-full w-full max-w-md object-cover rounded-lg shadow-2xl"
                    alt="Learning Illustration"
                    />
                </div>

                {/* Text Section */}
                <div className="flex flex-col gap-5 justify-center max-w-xl relative">
                     <h1 className="text-4xl font-bold leading-tight text-gray-800">
                    Grow Skills with <br /> <span className="text-orange-500">DEVSKILL Academy</span><br />
                    and Accelerate Toward a Better Future
                    </h1>

                    <p className="text-sm text-gray-600">
                    Join thousands of learners and professionals advancing their careers through hands-on learning, expert-led sessions,
                    and real-world projects. It's time to unlock your true potential with our cutting-edge courses.
                    </p>

                    <div>
                        <button className="btn rounded-full bg-emerald-600 px-4 py-4 border-0">Browse Course</button>            
                    </div>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Add