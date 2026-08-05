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
  "heroImage":"/assets/images/products/plate-and-shell-heat-exchangers/plate-shell-bnr.webp",
  "pageTitle": "Plate and Shell Heat Exchangers",
  "overview":"",
  "products": [
    {
      "title": "",
      "subTitle": "Compact Design, Maximum Efficiency",
      "images": [
        {
          "image": "/assets/images/products/plate-and-shell-heat-exchangers/plate-shell-img-1.webp",
          "text": "Plate and Shell Heat Exchangers"
        },
        {
          "image": "/assets/images/products/plate-and-shell-heat-exchangers/plate-shell-img-2.webp",
          "text": "Plate and Shell Heat Exchangers"
        },
        {
          "image": "/assets/images/products/plate-and-shell-heat-exchangers/plate-shell-img-3.webp",
          "text": "Plate and Shell Heat Exchangers"
        },
      ],
      "content": [
      "Our Plate & Shell Heat Exchangers are designed for critical process applications requiring high thermal efficiency under extreme operating conditions. Engineered to withstand high pressures and temperatures, these",
      "Heat exchangers are developed and manufactured in strategic alliance with Gesmex, Germany, who supports us with high-performance welded plate packs that ensure reliability and long service life for our customers. They are ideally suited for demanding applications across the chemical, energy, mining, and marine industries."  
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
