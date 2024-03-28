'use client'

import { useState } from 'react';

/* eslint-disable-next-line */
export interface ImageSliderProps {
  slides: any[]
}

export function ImageSlider(props: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const length = props?.slides?.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(props?.slides) || props?.slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {
        props?.slides?.length &&
        <>
          <h1 className='left-arrow'>
            <i className='bi bi-arrow-left-circle' onClick={prevSlide}></i>
          </h1>
          <h1 className='right-arrow'>
            <i className='bi bi-arrow-right-circle' onClick={nextSlide}></i>
          </h1>
        </>
      }
      <div className='card bg-white border-gray flex-row' style={{ width: '60rem', height: 'auto' }}>
        <div className='card-body p-0'>
          {
            props?.slides?.map((slide: any, index: number) => {
              return (
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                  {index === current && (
                    <>
                      <div className='d-flex justify-content-between align-items-center flex-column flex-xl-row' key={index}>
                        {slide?.content?.map((data: any, index: number) => (
                          <div key={index}>
                            <div className='py-10 px-8'>
                              <h1>{data?.h1}</h1>
                              <p className='fs-5'>
                                {data?.para}
                              </p>
                              <a href='/stories' target='_blank'>Read More »</a>
                            </div>
                          </div>
                        ))}
                        <img src={slide.image} alt='travel image' className='img-fluid' width={550} height={478} />
                      </div>
                    </>
                  )}
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;