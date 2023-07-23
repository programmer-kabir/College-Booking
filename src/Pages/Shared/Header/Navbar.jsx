import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import Container from "../../../Component/Container/Container";
import useAuth from "../../../Component/Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState("");
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
      <div className="md:fixed z-10 px-3 lg:w-[1280px] mx-auto bg-white">
        <div className="flex z-50 bg-white justify-between items-center text-white">
          <Link to="/">
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          </Link>
          <div className="hidden md:flex gap-4 items-center  text-black  font-medium p-4">
            {/*  */}
            <div className="flex justify-center">
              <div className=" xl:w-64">
                <div className="input-group relative flex  items-stretch w-full">
                  <input
                    type="search"
                    className="form-control relative flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn absolute right-0 inline-block px-3 py-[9px] bg-blue-600 z-50  text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  items-center"
                    type="button"
                    id="button-addon2"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      className="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <NavLink className={({ isActive }) => (isActive ? activeLink : "")}>
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
            {user ? (
              <>
                <NavLink onClick={handleLogOut}>Logout</NavLink>
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
    </Container>
  );
};

export default Navbar;
