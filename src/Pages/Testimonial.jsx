import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; // Import pagination styles
import { Navigation, Pagination } from "swiper/modules";
const Testimonial = () => {
  const allClient = [
    {
      name: "John Smith",
      review:
        "Working with this team was a fantastic experience. They delivered everything on time and exceeded my expectations!",
      image: "https://akash-biswas2.netlify.app/images/client5.jpg",
      role: "CEO, Tech Solutions",
    },
    {
      name: "Emily Johnson",
      review:
        "Their attention to detail and dedication to the project was outstanding. I highly recommend their services.",
      image: "https://akash-biswas2.netlify.app/images/client4.jpg",
      role: "Marketing Director, Creative Agency",
    },
    {
      name: "Michael Brown",
      review:
        "Excellent communication throughout the project. The end product was exactly what we needed.",
      image: "https://akash-biswas2.netlify.app/images/client9.jpg",
      role: "Product Manager, StartUp Inc.",
    },
    {
      name: "Sophia Davis",
      review:
        "They went above and beyond to ensure that everything was perfect. Truly exceptional service!",
      image: "https://akash-biswas2.netlify.app/images/client1.jpg",
      role: "Founder, Sophia's Boutique",
    },
    {
      name: "David Wilson",
      review:
        "Their expertise helped us launch our new website smoothly and efficiently. I am very pleased with the results.",
      image: "https://akash-biswas2.netlify.app/images/client3.jpg",
      role: "CTO, E-Commerce Hub",
    },
  ];

  return (
    <div className="mb-[10rem] mt-[5rem] cc">
      <div className="container md:mx-auto md:px-4">
        <h2 className="md:text-4xl text-3xl text-blue font-semibold text-center mb-10">
          What my clients are saying?
        </h2>
        <Swiper
          navigation={true}
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper mt-10 md:p-2"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {allClient.map((client, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center h-[28rem] w-full md:w-auto flex-col rounded-3xl overflow-hidden bg-slate-100"
            >
              <div className="h-1/2 bg-[#ff4424] w-full cc testimonial_up rounded-bl-3xl">
                <div className="bg-white p-[.2rem] overflow-hidden rounded-full cc">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-[6rem] h-[6rem] rounded-full border-[.15rem] border-[#ff4424] object-cover "
                  />
                </div>
              </div>
              <div className="h-1/2 w-full">
                <h3 className="text-lg cc font-bold mt-3">{client.name}</h3>
                <p className="mt-2 cc px-4 text-lg text-center font-medium">
                  {client.review}
                </p>
                <div className="cc">
                  <button className="px-2 py-1 border-0 outline-none bg-[#ff4424] rounded-md text-lg font-medium text-white mt-5 duration-150 hover:scale-105">View More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
