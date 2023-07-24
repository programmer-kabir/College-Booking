import React from 'react';
import useCollege from '../../Component/Hooks/useCollege';
import { Link } from 'react-router-dom';
import Container from '../../Component/Container/Container';

const College = () => {
    const [colleges] = useCollege();
    const collegesToDisplay = colleges.slice(2, 8);
    return (
        <Container>
      <div className="grid md:grid-cols-3 mx-auto items-center grid-cols-1 gap-6 pt-20">
        {collegesToDisplay.map((college) => (
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
                <div className="pt-2 px-5 space-y-3">
                  <h2 className="text-xl font-semibold">{college.name}</h2>
                  <div className="font-medium">
                  <h5>Admission Star {college.admission_process?.application_star}</h5>
                  <h5>{college?.events?.[0]?.name} <span>{college?.events?.[0]?.date}</span></h5>
                    <h6>Research history:{college?.research?.[0].title}</h6>
                    <h6>sports:{college?.sports[0]?.category}</h6>
                  </div>


                  <div className="text-end pt-5">
                <Link to={`/details/${college._id}`}>  <button className='bg-pink-600  text-base font-semibold px-3 py-1 rounded-md hover:text-white hover:bg-pink-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-xl' >Details</button></Link>
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

export default College;