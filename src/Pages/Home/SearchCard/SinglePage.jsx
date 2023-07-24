import React from "react";
import { useParams } from "react-router-dom";
import useCollege from "../../../Component/Hooks/useCollege";
import Container from "../../../Component/Container/Container";

const SinglePage = () => {
  const [colleges] = useCollege();
  const { id } = useParams();
  //   console.log(id);
  const collegeData = colleges.find((college) => college._id === id);
//   console.log(collegeData);
  return (
    <Container>
      <div className="pt-20 ">
        <h2 className="text-3xl mb-6 font-bold text-center">
          College Information
        </h2>
        <div>
          <img
            className="h-[500px] w-full rounded-md"
            src={collegeData.image}
            alt=""
          />
          <div className="space-y-3 pt-3">
            <h2 className="text-4xl font-semibold">{collegeData.name}</h2>
            <div className="flex justify-between px-5 font-medium">
              <h5>
                Admission Star {collegeData.admission_process?.application_star}
              </h5>
              <h5>
                Admission End {collegeData.admission_process?.application_end}
              </h5>
            </div>
            <h2 className="text-2xl font-semibold">College Event</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20">
              <div className=" px-2 py-1 border-2 border-pink-600 rounded-md">
                <h5>
                  <span className="font-medium">Event:</span>
                  {collegeData?.events?.[0]?.name}{" "}
                  <span>{collegeData?.events?.[0]?.date}</span>
                </h5>
                <p>
                  <span className="font-medium">Description:</span>{" "}
                  {collegeData?.events?.[0]?.description}
                </p>
              </div>
              <div className="px-2 py-1 border-2 border-pink-600 rounded-md">
                <h5>
                  <span className="font-medium">Event:</span>
                  {collegeData?.events?.[1]?.name}{" "}
                  <span>{collegeData?.events?.[1]?.date}</span>
                </h5>
                <p>
                  <span className="font-medium">Description:</span>{" "}
                  {collegeData?.events?.[1]?.description}
                </p>
              </div>
            </div>
            {/* College Reach Work */}
            <h2 className="text-2xl font-semibold">College Research Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20">
              <div className=" px-2 py-1 border-2 border-pink-600 rounded-md">
                <h5>
                  <span className="font-medium">Research works:</span>
                  {collegeData?.research?.[0].title}
                </h5>
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {collegeData?.research?.[0].lead_professor}
                </p>
                <p>
                  <span className="font-medium">Description:</span>{" "}
                  {collegeData?.research?.[0].description}
                </p>
                <p>
                  <span className="font-medium">Publish Date:</span>{" "}
                  {collegeData?.research?.[0].published_date}
                </p>
              </div>
            </div>
            {/* Sports Category */}
            <h2 className="text-2xl font-semibold">Sports Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-20">
              <div className=" px-2 py-1 border-2 border-pink-600 rounded-md">
                <h5>
                  <span className="font-medium">Category:</span>
                  {collegeData?.sports?.[0].category}
                </h5>
                <p>
                  <span className="font-medium">Coach Name:</span>{" "}
                  {collegeData?.sports?.[0].coach}
                </p>
                <p>
                  <span className="font-medium">Season:</span>{" "}
                  {collegeData?.sports?.[0].season}
                </p>
              </div>
              <div className=" px-2 py-1 border-2 border-pink-600 rounded-md">
                <h5>
                  <span className="font-medium">Category:</span>
                  {collegeData?.sports?.[1].category}
                </h5>
                <p>
                  <span className="font-medium">Coach Name:</span>{" "}
                  {collegeData?.sports?.[1].coach}
                </p>
                <p>
                  <span className="font-medium">Season:</span>{" "}
                  {collegeData?.sports?.[1].season}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
