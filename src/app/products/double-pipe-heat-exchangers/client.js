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
  "heroImage":"/assets/images/products/double-pipe-heat-exchangers/double-pine-bnr.webp",
  "pageTitle": "Double Pipe Heat Exchangers",
  "overview":"",
  "products": [
    {
      "title": "",
      "subTitle": "Two pipes. One efficient solution",
      "images": [
        {
          "image": "/assets/images/products/double-pipe-heat-exchangers/double-pipe-img.webp",
          "text": "Double Pipe Heat Exchangers"
        },
      ],
      "content": [
        "Precision-engineered for flexibility and ease of maintenance, our Double Pipe Heat Exchangers are ideally suited for small-capacity duties and applications involving high temperature differentials. Their modular design allows simple installation, inspection, and maintenance while ensuring reliable and efficient heat transfer performance.",
        "These exchangers are commonly used for small-scale duties, pilot plants, and processes requiring precise temperature control. Due to their simplicity, durability, and operational reliability, they are widely applied across the Chemical, Food & Beverage, Pharmaceutical, Power, HVAC & Refrigeration, and Educational & Research industries."
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
<RequestQuote setpopup={setPopup} popupEnquiry="Double Pipe Heat Exchangers"/>
}
    </>
  )
}
