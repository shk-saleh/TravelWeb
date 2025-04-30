import {useState, useEffect, React} from 'react'
import Reviews from './Review';
import Register from './Login';
import { Link } from 'react-router-dom';
import { Sun, Compass } from 'lucide-react';


const Navbar = () => {


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div>
          <div className={`navbar fixed left-0 w-full z-50 lg:px-16 py-4 transition-all duration-300 ${ scrolled ? 'bg-white/20 backdrop-blur-md py-4 shadow-md border-white/30 text-gray-900': 'bg-transparent text-gray-700'}`}>
            <div className="flex navbar-start gap-2">
              <Compass className="h-6 w-6 text-gray-500" />
              <a className="text-xl text-orange-500 font-bold"> TraveMate</a>
            </div>
    
            {/* 🔹 Center: Menu (Desktop) */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 space-x-4">
                <li><a href="#hero" className='hover:text-orange-500'>Home</a></li>
                <li><a href="#courses" className='hover:text-orange-500'>Packages</a></li>
                <li><a href="#mentors" className='hover:text-orange-500'>Features</a></li>
                <li><a href="#reviews" className='hover:text-orange-500'>Reviews</a></li>
                <li><a href="#faq" className='hover:text-orange-500'>FAQ</a></li>
              </ul>
            </div>
    
            {/* 🔹 Right: Button */}
            <div className="navbar-end">
              <Link to='/Login' className="btn rounded-full">Get Started</Link>
            </div>
    
            {/* 🔹 Mobile: Dropdown Menu */}
            <div className="lg:hidden navbar-end">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                  <li><a>Home</a></li>
                  <li><a>Our Courses</a></li>
                  <li><a>Mentors</a></li>
                  <li><a>Blog</a></li>
                </ul>
              </div>
            </div>
    
          </div>
        </div>
      )
}

export default Navbar