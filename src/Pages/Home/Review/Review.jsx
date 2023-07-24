import React from "react";
import Container from "../../../Component/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useReview from "../../../Component/Hooks/useReview";
const Review = () => {
  const [reviews] = useReview();
  console.log(reviews);
  return (
    <Container>
      <div className="pt-20">
        <h2 className="text-4xl font-semibold">
          What Out Students <br />
          Say About Us
        </h2>
        <div className="pt-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <div key={review._idd}>
                <SwiperSlide>
                  <div className="px-4  py-4 border-2 border-pink-500 rounded-md">
                    <h6>{review.comment}</h6>
                    <div className="flex gap-5 pt-5 items-center">
                      <img
                        className="w-16 h-16 rounded-full"
                        src={review.photo}
                        alt=""
                      />
                      <div>
                        <h2 className="font-medium">Email:{review.email}</h2>
                        <h2>Name:{review.name}</h2>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Review;
