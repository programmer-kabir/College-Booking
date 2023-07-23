import React from "react";
import useCollege from "../../../Component/Hooks/useCollege";
import Container from "../../../Component/Container/Container";

const SearchCard = () => {
  const [colleges] = useCollege();
  console.log(colleges);
  return (
    <Container>
      <div className="grid md:grid-cols-3 mx-auto items-center grid-cols-1 gap-6 pt-20">
        {colleges.map((college) => (
          <div key={college._id}>
            <section className="mx-auto transform border-2 border-pink-300 rounded-lg duration-500">
              <article className="mx-auto relative px-3 py-2 group cursor-pointer">
                <div className="overflow-hidden hover:rounded-md">
                  <img
                    className="w-[390px] rounded-md h-[262px]  transform hover:scale-110  duration-200"
                    src={college.image}
                    alt=""
                  />
                </div>
                <div className="pt-2 px-5">
                  <h2 className="text-xl font-semibold">{college.name}</h2>
                  <h5>{college.admissionDates}</h5>
                  <h5>{college.events}</h5>
                  <div className="flex justify-between">
                    <h6>{college.researchHistory}</h6>
                    <h6>{college.sports}</h6>
                  </div>
                  <div className="text-end pt-5">
                  <button className='bg-pink-600  text-base font-semibold px-3 py-1 rounded-md hover:text-white hover:bg-pink-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-xl' >Details</button>
                  </div>
                </div>
              </article>
            </section>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default SearchCard;
