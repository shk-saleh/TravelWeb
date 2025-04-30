import React from 'react'

const FAQ = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row w-full px-16 py-14 mt-2 mb-2 gap-8" id='faq'>

            <div className="w-full lg:w-1/2 flex items-center">
                <div className='relative'>
                    <button className='bg-orange-500 rounded-full px-2 py-1 -top-8 absolute text-[12px] font-light left-0 -rotate-8'>You need to know</button>      
                    <h1 className="text-5xl mb-4 font-bold text-left text-gray-800">Frequently Asked Questions</h1>
                    <p className="text-base md:text-sm text-gray-700 text-left">
                    Discover how Travel Mate works and get answers to your common travel planning questions.
                    </p>
                </div>
            </div>

            <div className="join join-vertical w-full lg:w-1/2 max-w-2xl mx-auto text-gray-700">
                
                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="faq-accordion" defaultChecked />
                    <div className="collapse-title font-semibold">
                    How do I book a travel package on Travel Mate?
                    </div>
                    <div className="collapse-content text-sm">
                    You can explore packages on the homepage or through the search filters. Once you find the one that fits, simply click “Book Now” and follow the prompts to confirm your trip.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                    Can I talk to a travel agent before booking?
                    </div>
                    <div className="collapse-content text-sm">
                    Absolutely! You can chat with our verified travel agents in real-time to ask questions, customize plans, or request changes before confirming.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                    Is my payment secure on this platform?
                    </div>
                    <div className="collapse-content text-sm">
                    Yes, all payments are processed through encrypted gateways and we offer buyer protection for all confirmed bookings.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                    Can I cancel or reschedule my trip?
                    </div>
                    <div className="collapse-content text-sm">
                    Yes, cancellation and rescheduling options depend on the package terms. Be sure to check the refund policy listed with each package before confirming.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                    Do you offer budget-friendly travel packages?
                    </div>
                    <div className="collapse-content text-sm">
                    We have a wide range of packages, including budget, luxury, and custom options. Use the price filter to find one that suits your needs.
                    </div>
                </div>

                <div className="collapse collapse-arrow join-item border-t border-b rounded-none border-base-300">
                    <input type="radio" name="faq-accordion" />
                    <div className="collapse-title font-semibold">
                    Can I plan a group or corporate trip through Wander Ease?
                    </div>
                    <div className="collapse-content text-sm">
                    Yes, we offer group and corporate travel solutions. Just select the “Group Travel” tab or contact an agent to create a custom plan.
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default FAQ
