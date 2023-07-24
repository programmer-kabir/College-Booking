import React from "react";
import Container from "../../../Component/Container/Container";

const CollegeGallery = () => {
  return (
    <Container>
      <div className="pt-20">
        <h4 className="text-3xl font-medium pb-5">
          we hold the Best Graduation Ceremony
        </h4>
        <div>
          <img
            className="rounded-md"
            src="https://i.ibb.co/2KJYtWb/Rectangle-21.png"
            alt=""
          />
        </div>
        <h5 className="text-xl py-3">Lorem College Graduation Ceremony</h5>
        <h5 className="py-3">
          Saving World with Good Designs. Because your satisfaction is
          everything. Check out our <br /> latest design of website and see how
          it is.
        </h5>
        <div className="md:flex gap-10 ">
          <div className="space-y-3 ">
            <img src="https://i.ibb.co/0MMnTyC/Rectangle-22.png" alt="" />
            <h3 className="text-xl font-semibold">Our Students graduating</h3>
            <p className="text-gray-500">
              Saving World with Good Designs. Because <br /> your satisfaction
              is everything.
            </p>
          </div>
          <div className="space-y-3">
            <img src="https://i.ibb.co/LpzY5g5/Rectangle-23.png" alt="" />
            <h3 className="text-xl font-semibold">Our Students graduating</h3>
            <p className="text-gray-500">
              Saving World with Good Designs. Because <br /> your satisfaction
              is everything.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CollegeGallery;
