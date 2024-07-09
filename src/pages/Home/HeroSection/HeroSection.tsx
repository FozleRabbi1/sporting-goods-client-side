import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSection = () => {
  return (
    <div className="mb-14 rounded-2xl overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={1500}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-[300px] md:h-[85vh] xl:[30vh]"
              src="https://i.pinimg.com/originals/b4/b3/15/b4b315f9de16a8e0671f685d73a3488a.png"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black w-[100%] h-[100%] opacity-50 text-white"></div>
            <div className="absolute top-0 left-0  w-[100%] h-[100%]  text-white flex flex-col justify-center items-center ">
              <h2
                data-aos="fade-right"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -ml-32 md:-ml-52 "
              >
                {" "}
                Sports{" "}
              </h2>
              <h2
                data-aos="fade-left"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -mr-32 md:-mr-52"
              >
                {" "}
                Store{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-[300px] md:h-[85vh] xl:[30vh]"
              src="https://t4.ftcdn.net/jpg/03/32/35/55/360_F_332355543_ALHNVl8imzELwnGKkYDcbN2yecJBqGnr.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black w-[100%] h-[100%] opacity-50 text-white"></div>
            <div className="absolute top-0 left-0  w-[100%] h-[100%]  text-white flex flex-col justify-center items-center ">
              <h2
                data-aos="fade-right"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -ml-32 md:-ml-52 "
              >
                {" "}
                Sports{" "}
              </h2>
              <h2
                data-aos="fade-left"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -mr-32 md:-mr-52"
              >
                {" "}
                Store{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-[300px] md:h-[85vh] xl:[30vh]"
              src="https://i.pinimg.com/originals/b4/b3/15/b4b315f9de16a8e0671f685d73a3488a.png"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black w-[100%] h-[100%] opacity-50 text-white"></div>
            <div className="absolute top-0 left-0  w-[100%] h-[100%]  text-white flex flex-col justify-center items-center ">
              <h2
                data-aos="fade-right"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -ml-32 md:-ml-52 "
              >
                {" "}
                Sports{" "}
              </h2>
              <h2
                data-aos="fade-left"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -mr-32 md:-mr-52"
              >
                {" "}
                Store{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              className="w-full h-[300px] md:h-[85vh] xl:[30vh]"
              src="https://t4.ftcdn.net/jpg/03/32/35/55/360_F_332355543_ALHNVl8imzELwnGKkYDcbN2yecJBqGnr.jpg"
              alt=""
            />
            <div className="absolute top-0 left-0 bg-black w-[100%] h-[100%] opacity-50 text-white"></div>
            <div className="absolute top-0 left-0  w-[100%] h-[100%]  text-white flex flex-col justify-center items-center ">
              <h2
                data-aos="fade-right"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -ml-32 md:-ml-52 "
              >
                {" "}
                Sports{" "}
              </h2>
              <h2
                data-aos="fade-left"
                data-aos-delay="650"
                data-aos-duration="1000"
                className="text-6xl md:text-8xl right-3 -mr-32 md:-mr-52"
              >
                {" "}
                Store{" "}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;

// https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/background-2.jpg
