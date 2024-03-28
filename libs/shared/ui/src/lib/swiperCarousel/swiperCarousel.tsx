"use client"
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const SwiperCarousel = ({ images, autoplayDelay = 2500, clickablePagination = true }: any) => {
  
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {
        images?.map((data: any, index: any) => {
          // Check if the item is a video or an image based on the 'type' property
          if (data?.type === 'video') {
            return (
              <SwiperSlide key={index}>
                <video controls className='w-100 h-auto'>
                  <source src={data?.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </SwiperSlide>
            );
          } else if (data?.type === 'image') {
            return (
              <SwiperSlide key={index}>
                <img src={data?.url} alt="Product Gallery" />            
              </SwiperSlide>
            );
          }
          return null; // Return null if the type is neither video nor image
        })
      }

    </Swiper>
  )
}

export default SwiperCarousel