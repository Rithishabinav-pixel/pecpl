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
  "heroImage":"/assets/images/products/pressure-vessels/pressure-vessels-bnr.webp",
  "pageTitle": "Pressure Vessels",
  "overview":"",
  "products": [
    {
      "title": "",
      "subTitle": "Reliable storage for critical pressure and temperature conditions",
      "images": [
        {
          "image": "/assets/images/products/pressure-vessels/pressure-vessels-img-nw.webp",
          "text": "Jetty Head  Air Drum"
        },
      ],
      "content": [
        "At Precision Equipments, we design and manufacture pressure vessels in compliance with stringent international safety and design codes. Our vessels are engineered to safely withstand internal and external pressures and are typically constructed in cylindrical or spherical configurations to ensure structural integrity under demanding operating conditions.",
        "Depending on process requirements (fluid properties, pressure, temperature, and corrosion resistance etc.), vessels are fabricated using carbon steel, stainless steel, or specialized alloy materials selected based on fluid properties, pressure, temperature, and corrosion resistance. Each design carefully considers critical factors such as stress analysis, fatigue life, corrosion allowance, and thermal expansion to ensure long-term reliability and safe operation.",
        "Our pressure vessels are widely used across multiple industries, including Oil & Gas for separators, scrubbers, and LPG storage tanks; Chemical and Petrochemical for reactors, distillation columns, and absorbers; Power Generation for boilers, steam drums, and reactor vessels; Pharmaceuticals for sterile reactors and storage systems; Food & Beverage for fermentation and pasteurization vessels; and Aerospace & Defence for rocket fuel tanks and high-pressure gas storage applications."
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
        <div className={style.image} data-aos={index % 2 !== 0 ?"fade-left":"fade-right"}>
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
      <div className={style.content} data-aos={index % 2 !== 0 ?"fade-right":"fade-left"}>
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
<RequestQuote setpopup={setPopup} popupEnquiry="Pressure Vessels"/>
}
    </>
  )
}
