import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Container from "../../../Component/Container/Container";
import useAuth from "../../../Component/Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  // console.log(user);
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleLogOut = () => {
    logOut();
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
    // Add search logic here
  };
  const activeLink =
    "rounded transition-colors px-3 py-1 duration-500 bg-pink-600";
  return (
    <Container>
      <div className="w-full">
      <div className="md:fixed  z-10 px-3 lg:w-[1280px] mx-auto bg-white">
        <div className="flex z-50 bg-white justify-between items-center text-white">
          <Link to="/">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          </Link>
          <div className="hidden md:flex gap-4 items-center  text-black  font-medium p-4">
            
            <NavLink 
            to='/'
            className={({ isActive }) => (isActive ? activeLink : "")}>
              Home
            </NavLink>
            <NavLink
              to="/college"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Colleges
            </NavLink>
            <NavLink
              to="/admission"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Admission
            </NavLink>
            <NavLink
              to="/s"
              className={({ isActive }) => (isActive ? activeLink : "")}
            >
              Admission
            </NavLink>
            {user ? (
              <>
                <div className="relative">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                   
                  >
                    <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                  </button>

                  {isOpen && (
                    <div
                      className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10"
                      onMouseLeave={() => setIsOpen(false)}
                    >
                      <Link
                        to='/profile'
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white"
                      >
                        View Profile
                      </Link>
                      <Link
                        href="#"
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white"
                      >
                        Edit Profile
                      </Link>
                      <Link
                       onClick={handleLogOut}
                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-600 hover:text-white"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
                {/* <NavLink onClick={handleLogOut}>Logout</NavLink> */}
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={({ isActive }) => (isActive ? activeLink : "")}
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
          {/* <ul className="hidden md:flex text-black ">
            <li>sfa</li>
          </ul> */}
          <div onClick={handleNav} className="block  md:hidden">
            {nav ? (
              <AiOutlineClose size={20} className="text-black" />
            ) : (
              <div className="flex items-center gap-2 font-semibold">
                <AiOutlineMenu size={20} className="text-black" />
              </div>
            )}
          </div>
          <div
            className={
              nav
                ? "fixed  left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out duration-500 fixed left-[-100%]"
            }
          >
            <div className="">
              <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
                REACT.
              </h1>
              <NavLink
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Colleges
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Admission
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Admission
              </NavLink>
              <NavLink
                to="/s"
                className={({ isActive }) => (isActive ? activeLink : "")}
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Navbar;
