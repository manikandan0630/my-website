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
      <nav className="sm:w-11/12 w-full flex justify-between items-center  bg-slate-700 py-3 m-auto relative z-10">
        <div className="heading w-2/4 sm:mx-10 mx-2">
          <h1 className="text-white font-bold">Manikandan</h1>
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

        <ul
          className={`${
            click ? "block" : "hidden"}sm:flex sm:flex-row sm:w-2/4 items-center justify-evenly   sm:bg-transparent sm:relative absolute top-full left-0 sm:top-0 py-4  sm:py-0 sm:auto bg-slate-700 w-full text-white  text-center transition-all duration-300 ease-in-out  `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <button className="bg-white text-slate-600 rounded-sm py-2 px-4 mt-3 sm:mt-0">
              Hire me
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
