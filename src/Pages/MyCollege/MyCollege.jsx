import React from "react";
import useAuth from "../../Component/Hooks/useAuth";
import useBookingData from "../../Component/Hooks/useBookingData";
import Container from "../../Component/Container/Container";
const MyCollege = () => {
  const { user } = useAuth();
  const [Bookings] = useBookingData();
//   console.log(Bookings);
//   console.log(Bookings);
  return (
    <Container>
      <div className="pt-20">
        {Bookings.map((booking) => (
          <div key={booking._id}>
            <div className="h-[265px] border-pink-600 border-2 rounded-md">
              <div className="px-2 py-3 ">
                <img
                  className="h-40 w-full rounded-md"
                  src={booking.image}
                  alt=""
                />
                <h2 className="pt-2">
                  <span className="font-semibold"> College Name:</span>
                  {booking.name}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default MyCollege;
