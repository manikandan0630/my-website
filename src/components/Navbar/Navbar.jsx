import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <nav className="sm:w-11/12 flex justify-between items-center bg-slate-700 relative py-4 m-auto z-10">
        <div className="heading w-full  sm:w-2/4 sm:mx-10 mx-2">
          <h1 className="text-white font-bold text-3xl">Manikandan</h1>
        </div>

        {/*icons */}
        <div
          className="menu-icon sm:hidden  sm:mx-10 mx-2"
          onClick={handleClick}
        >
          {click ? (
            <IoClose className="text-white text-3xl" />
          ) : (
            <IoMenu className="text-white text-3xl" />
          )}
        </div>


          {/*nav links */}
        <ul
          className={`${
            click ? "block" : "hidden"
          } w-full sm:w-2/4 flex-col sm:flex sm:flex-row items-center justify-evenly    absolute sm:relative top-full  bg-slate-700 text-white font-semibold transition-all duration-300 ease-in-out text-center `}
        >
          <li className="py-3 sm:py-0">
            <Link to="/" className="px-2 py-1 hover:bg-white hover:text-slate-700 rounded-sm  ">Home</Link>
          </li>
          <li className="py-3 sm:py-0">
            <Link to="/about" className="px-2 py-1 hover:bg-white hover:text-slate-700 rounded-sm  ">About</Link>
          </li>
          <li className="py-3 sm:py-0">
            <Link to="/contact" className="px-2 py-1 hover:bg-white hover:text-slate-700 rounded-sm ">Contact</Link>
          </li>
          <li className="py-3 sm:py-0  ">
            <Link className="px-2 py-1  hover:bg-white  hover:text-slate-700 rounded-sm" to="/projects">Projects</Link>
          </li>
          <li className="py-3 sm:py-3">
            <button className="font-semibold text-white hover:bg-white hover:text-slate-600 border border-white rounded-sm py-2 px-4 ">
              Hire me
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
