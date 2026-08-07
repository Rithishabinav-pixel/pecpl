"use client"

import React, { useState } from 'react'
import style from '../products.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import Button from '@/app/components/ui/button';
import RequestQuote from '@/app/components/request-quote/RequestQuote';


const productsData = [
    {
  "heroImage":"/assets/images/products/process-skid/process-bnr.webp",
  "pageTitle": "Process Skid",
  "overview":"",
  "products": [
    {
      "title": "",
      "subTitle": "Compact design, complete solution",
      "images": [
        {
          "image": "/assets/images/products/process-skid/process-skid-img-1.jpg",
          "text": "Process Skid"
        },
      ],
      "content": [
        "Our fully integrated process skids are compact, modular systems engineered for plug-and-play functionality. Built on a robust steel skid base, each unit supports all integrated equipment, including pumps, compressors, vessels, heat exchangers, filters, and interconnecting piping.",
        "Comprehensive stress analysis is performed to ensure piping systems and equipment can safely withstand vibration, thermal expansion, and operating loads. Prior to fabrication, flow arrangements, pressure drops, and heat and mass transfer parameters are thoroughly evaluated and optimized to ensure efficient and reliable operation.",
        "The seamless integration of mechanical, electrical, and control systems within a single skid results in a self-contained and transportable process unit. This approach significantly reduces site installation time, enhances quality control, and ensures full compliance with applicable safety and industry standards."
      ],
    },
    
  ]
}
]

export default function page() {
  const [popup, setPopup] = useState(false);
  return (
    <>
    

    {/* hero section  */}
    <section className={style.hero_section} style={{backgroundImage:`url(${productsData[0].heroImage})`}}>
        <div className={`container ${style.heroContainer}`}>
            <h1 className="common_heading heading">
                {productsData && productsData[0].pageTitle}
                </h1>
        </div>
    </section>


    {/* overview content  */}

{ productsData[0].overview && 
    <section className={style.overviewSection}>
        <div className={`container ${style.container}`}>
            {productsData && 
            
            productsData[0].overview.map((item,index)=>(
                <p key={index}>{item}</p>
            ))
            }
           </div>
    </section>
    }


    {/* products section  */}
   {productsData?.[0]?.products?.map((product, index) => (
<section className={`${style.products_section} ${index % 2 !== 0 ? style.reverse : ""}`} key={index}>
  <div className={`container ${style.container}`}>
      {/* Images */}
      {product.images?.length > 0 && (
        <div className={style.image}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            speed={500}
            slidesPerView={1}
            spaceBetween={10}
            loop={product.images.length > 1}
          >
            {product.images.map((item, imgIndex) => (
              <SwiperSlide key={imgIndex}>
                <div className={style.imageSlide}>
                  <Image
                    src={item.image}
                    width={1000}
                    height={600}
                    alt={item.text || product.title}
                  />

                  {item.text && (
                    <p className={style.imageDataName}>{item.text}</p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Content */}
      <div className={style.content}>
        {product.title && (
          <h2 className="common_heading heading">
            {product.title}
          </h2>
        )}

        {product.subTitle && (
          <h3 className="common_heading heading">
            {product.subTitle}
          </h3>
        )}

        {product.content?.length > 0 &&
          product.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

        {!product.additionalText  &&
        <Button setpopup={setPopup}
          href="#"
          classname="light_blue"
          text="Request a Quote"/>

        }

        
      </div>


  {product.additionalText?.length > 0 && (
  <div className={style.additionalText}>
    {product.additionalText.map((text, i) => (
      <p key={`additional-${i}`}>{text}</p>
    ))}
    <Button setpopup={setPopup}
          href="#"
          classname="light_blue"
          text="Request a Quote"/>
  </div>
)}

    </div>
  </section>
))}

{popup &&
<RequestQuote setpopup={setPopup} popupEnquiry="Process Skid"/>
}
    </>
  )
}
