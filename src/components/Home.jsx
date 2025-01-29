import React from 'react';
import random1 from '../assets/random1.jpg';
import random2 from '../assets/random2.jpg';
import random4 from '../assets/random4.jpg';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="h-full w-full  bg-gray-100">
      <nav className='bg-red-400 flex gap-10 '>
        {/* <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link> */}
      </nav>
      <div className="h-full w-full border rounded-lg  shadow-lg flex items-center">
      
        <img
        
          src={random1}
          alt="restaurant image"
          className="w-full h-full object-cover "
        />
        <img
            src={random2}
            alt="restaurant image"
            className="w-full h-full object-cover "
          />
           <img
          src={random4}
          alt="restaurant image"
          className="w-full h-full object-cover   "
        />
        
       
      </div>
    </div>
  );
};

export default Home;
