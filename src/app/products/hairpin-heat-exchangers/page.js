"use client"

import React from 'react'
import style from '../products.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import Button from '@/app/components/ui/button';


const productsData = [
    {
  "heroImage":"/assets/images/products/hairpin-heat-exchangers/hairpin-bnr.webp",
  "pageTitle": "Hairpin Heat Exchangers",
  "overview":"",
  "products": [
    {
      "title": "",
      "subTitle": "Precision on Every Bend",
      "images": [
        {
          "image": "/assets/images/products/hairpin-heat-exchangers/Hair-Pin-Exchangers-img.webp",
          "text": ""
        },
      ],
      "content": [
        "Hairpin Heat Exchangers are engineered for high efficiency and compact design, featuring U-shaped tubes enclosed within a shell.",
        "This configuration naturally accommodates thermal expansion without the need for expansion joints, resulting in a mechanically robust and reliable design. Due to their construction, hairpin exchangers are capable of handling very high pressures and temperatures, making them ideal for demanding process conditions.",
        "The U-tube arrangement allows one end of the tubes to remain free, enabling easier cleaning, inspection, and maintenance. Tube bundles can be removed without dismantling the entire unit, reducing downtime and simplifying servicing. Hairpin heat exchangers can be configured for single-phase and two-phase duties, including condensing, boiling, and gas cooling.",
        "Custom-designed to meet critical process requirements, they are widely used across chemical, oil & gas, refining, petrochemical, power, and refrigeration industries."
      ],
    },
    
  ]
}
]

export default function page() {
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
        <Button
          href="/contact"
          classname="light_blue"
          text="Request a Quote"/>
        
        }

        
      </div>


  {product.additionalText?.length > 0 && (
  <div className={style.additionalText}>
    {product.additionalText.map((text, i) => (
      <p key={`additional-${i}`}>{text}</p>
    ))}
    <Button
          href="/contact"
          classname="light_blue"
          text="Request a Quote"/>
  </div>
)}

    </div>
  </section>
))}

    
    </>
  )
}
