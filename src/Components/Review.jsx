import React from 'react'

const Reviews = () => {
  return (
    <div>
      <div className="py-20 px-4 bg-orange-200 relative" id='reviews'>
        <h2 className="text-4xl font-bold text-center mb-12 text-black">What Our Travelers Say!</h2>
        <div className="flex flex-wrap justify-center gap-8">

          {[
            {
              course: 'Honeymoon Planning',
              name: 'Areeba & Danish, Lahore',
              rating: 5,
              text: 'Wander Ease made our honeymoon absolutely stress-free! We just selected a package, and everything else was taken care of—from hotel bookings to day tours. Highly recommended!',
            },
            {
              course: 'Solo Backpacking Adventure',
              name: 'Usman R., Islamabad',
              rating: 4,
              text: 'As a solo traveler, I loved the ability to connect with agents directly through chat. I felt safe, guided, and had the freedom to tweak my itinerary. Awesome platform!',
            },
            {
              course: 'Budget Family Vacation',
              name: 'Mariam S., Karachi',
              rating: 5,
              text: 'Finding a good trip within budget was tough until I found Wander Ease. I compared multiple packages, filtered by cost, and booked within minutes. My kids had a blast!',
            },
            {
              course: 'Corporate Retreat Organization',
              name: 'Tariq Iqbal, HR Manager, TechSphere',
              rating: 4,
              text: 'We needed a quick setup for a 3-day corporate retreat, and Wander Ease delivered perfectly. Clear communication, quick booking, and everything went smoothly.',
            },
            {
              course: 'Surprise Birthday Trip',
              name: 'Nimra K., Rawalpindi',
              rating: 5,
              text: 'I secretly planned a birthday trip for my fiancé, and Wander Ease helped me pull it off. The agent even arranged a cake at the hotel—super thoughtful service!',
            },
            {
              course: 'Group Travel for University Friends',
              name: 'Ali M., Student at NUST',
              rating: 5,
              text: 'Planning for 6 people with different preferences is a headache, but Wander Ease helped us find a balanced, all-inclusive package. It was the best trip of our lives!',
            },
          ].map((review, index) => (
            <div
              key={index}
              className="card w-96 bg-white text-black shadow-md border border-gray-200 rounded-xl transition duration-300 hover:shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title text-xl font-semibold">{review.course}</h2>
                <p className="text-base">"{review.text}"</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-yellow-400"
                        checked={i < review.rating}
                        readOnly
                      />
                    ))}
                  </div>
                  <span className="font-medium italic">- {review.name}</span>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Reviews
