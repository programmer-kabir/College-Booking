import React from "react";
import Container from "../../../Component/Container/Container";

const Banner = () => {
  return (
    <Container>
      <div className="pt-20 grid md:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="space-y-7">
          <h2 className="text-3xl font-semibold ">College Admission</h2>
          <p className="text-justify">
            College admissions prioritize academic performance, extracurricular
            involvement, and compelling personal essays. Together, these
            elements illustrate an applicant's aptitude, character, and
            potential contribution to the university community.
          </p>
          <div className="">
            <div className=" xl:w-64">
              <div className="input-group relative flex  items-stretch w-full">
                <input
                  type="search"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-pink-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn absolute right-0 inline-block px-3 py-[9px] bg-pink-600 z-50  text-white font-medium text-xs leading-tight uppercase rounded-r shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out  items-center"
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
        </div>
        <div className="">
          <img
            className="rounded-md"
            src="https://i.ibb.co/Wg1bqvb/pngtree-graduation-season-simple-gradient-banner-background-picture-image-263527-c-SPQQs-Na-E-transf.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
