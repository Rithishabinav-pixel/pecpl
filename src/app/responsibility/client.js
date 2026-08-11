"use client"
import React from "react";
import style from "./responsibility.module.css";
import Image from "next/image";
import responsibilityData from "../data/responsibility";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Precision Industrial Training School data

const whyChooseData = [
  {
    title:"Hands-on Training Excellence",
    content:"We operate a dedicated in-house training school focused on the core fundamentals of fabrication and machining. Every worker undergoes structured, practical training as part of their orientation, ensuring strong technical foundations and consistent workmanship standards.​",
    image:"/assets/images/camera-icn.svg"
  },
    {
    title:"Comprehensive Welding Manuals",
    content:"Our training manuals are thoughtfully prepared in the local language, covering critical skills such as welding, fitting, and grinding—essential disciplines for manufacturing high- quality process equipment.​",
    image:"/assets/images/training-icn.svg"
 
  },
    {
    title:"Visual Learning Approach",
    content:"To enhance understanding, common workmanship defects are clearly illustrated with photographs. This practical visual method enables operators to easily identify issues, understand root causes, and implement effective corrective actions with confidence.​",
    image:"/assets/images/equipment-icn.svg"
  }
]



export default function Page() {
  const pageData = responsibilityData[0];

  return (
    <>
      {/* Hero Section */}
      <section
        className={style.hero_section}
        style={{ backgroundImage: `url(${pageData.heroImage})` }}
      >
        <div className={`container ${style.heroContainer}`}>
          <h1 className="common_heading heading">{pageData.pageTitle}</h1>

          {pageData.overview.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </section>

      {/* Responsibility Sections */}
      {pageData.responsibility?.map((responsibility, index) => (
        <section 
          key={responsibility.slug}
          className={`${style.responsibility_section} ${
            index % 2 === 0 ? style.reverse : ""
          } ${responsibility.title==='Sustainability'?style.sustainability:""}`}
        >
          <div className={`container ${style.container}`}>
            {/* Images */}
            {responsibility.images?.length > 0 && (
              <div className={style.image} data-aos={index % 2 === 0 ?"fade-left":"fade-right"}>
                <Swiper
                  modules={[Autoplay]}
                  speed={500}
                  slidesPerView={1}
                  spaceBetween={10}
                  loop={responsibility.images.length > 1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 40000,
                    disableOnInteraction: false,
                  }}
                >
                  {responsibility.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className={style.imageSlide}>
                        <Image
                          src={image}
                          width={1000}
                          height={600}
                          alt={image.text || `${responsibility.title} ${imgIndex + 1}`}
                        />

                        {image.text && (
                          <p className={style.imageDataName}>{image.text}</p>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}

            {/* Content */}
            <div className={style.content} data-aos={index % 2 === 0 ?"fade-right":"fade-left"}>
              {responsibility.title && (
                <h2 className="common_heading heading">
                  {responsibility.title}
                </h2>
              )}          
             

              {responsibility.content?.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

 {responsibility.content.length>0 &&  (
                 <h3 className="common_heading heading">
                  Key Highlights
                </h3>
                     )}

              {/* Highlights */}
              {responsibility.highlights?.length > 0 && (
                <div className={style.highlights}>
                  {responsibility.highlights.map((highlight, i) => (
                    <div key={i} className={style.highlight}>
                      <p> <strong>{highlight.title}:</strong> {highlight.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}


        {/* why choose section  */}
 <section className={`${style.whyChooseSection}`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up" data-aos-delay="0">Precision Industrial Training School</h2>
        </div>

     <div className={style.whyChooseCards}>
      {whyChooseData && whyChooseData.map((item,index)=>(
        <div className={style.card} key={index} data-aos="fade-up" data-aos-delay={index*200}>
        <Image src={item.image} width={80} height={80} alt=""/>
        <h3 className="heading">{item.title}</h3>
        <p>{item.content}</p>
        </div>
      ))}      
     </div>


      </div>

    </section>


    </>
  );
}