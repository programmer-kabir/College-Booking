import React, { useState } from "react";
import useAuth from "../../Component/Hooks/useAuth";
import useBookingData from "../../Component/Hooks/useBookingData";
import Container from "../../Component/Container/Container";
import { toast } from "react-hot-toast";
const MyCollege = () => {
  const { user } = useAuth();
  const [Bookings] = useBookingData();
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  //   console.log(Bookings);
  //   console.log(Bookings);
  //   const handleData = (event) =>{
  //     event.preventDefault();

  //     const comment = event.target.elements.comment.value;
  //     const data = {comment}
  //     console.log(data);
  //   }
  const handleData = (booking) => (event) => {
    event.preventDefault();

    const comment = event.target.elements.comment.value;

    const data = {
      comment,
      collegeName: booking.collegeInformation.name,
      email: booking.email,
      name: booking.name,
      photo: user?.photoURL,
    };

    fetch(`${import.meta.env.VITE_LOCALHOST_KEY}/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          // reset()
          setReviewSubmitted(true);
          toast.success("review successfully");
        }
      });
  };

  return (
    <Container>
      <div className="pt-20">
        {Bookings.map((booking, index) => (
          <div key={booking._id}>
            <div className="border-pink-600 border-2 rounded-md">
              <div className="px-2 py-3 ">
                <img
                  className="h-60 w-full rounded-md"
                  src={booking.collegeInformation.image}
                  alt=""
                />
                <h2 className="pt-2">
                  <span className="font-semibold"> College Name:</span>
                  {booking.collegeInformation.name}
                </h2>
                <h2 className="pt-2">
                  <span className="font-semibold"> Email:</span>
                  {booking.email}
                </h2>
                <form onSubmit={handleData(booking)}>
                  <textarea
                    rows="4"
                    className="border-black border-2 rounded-md px-2 py-1"
                    placeholder="Your Review"
                    cols="50"
                    name="comment"
                    disabled={reviewSubmitted}
                  ></textarea>
                  <button disabled={reviewSubmitted} className="bg-pink-600 rounded-md px-2 py-1 ml-5">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyCollege;
