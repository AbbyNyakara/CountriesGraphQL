import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import Filter from './Filter';

const Navbar = () => {

  return (
    <div className="flex py-4 px-10 justify-between shadow-md sticky top-0 bg-gray-100">
      <Link className='font-bold text-xl' to="/">Countries of the World</Link>
      <Filter />
      {/* <Search /> */}
    </div>
  )
}

export default Navbar;
