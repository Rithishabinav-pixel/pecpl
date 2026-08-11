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


// industrialExcellenceData

const industrialExcellenceData = [
  {
    image: "/assets/images/products/plate-frame-heat-exchanger/ie1.png",
    title: "Modern",
    content: "Tailored for today’s industry."
  },
  {
    image: "/assets/images/products/plate-frame-heat-exchanger/ie2.png",
    title: "Efficient",
    content: "Best-in-class heat transfer."
  },
  {
    image: "/assets/images/products/plate-frame-heat-exchanger/ie3.png",
    title: "Reliable",
    content: "Consistent uptime with reduced fouling."
  },
  {
    image: "/assets/images/products/plate-frame-heat-exchanger/ie4.png",
    title: "Serviceable",
    content: "Fast cleaning and maintenance."
  },
  {
    image: "/assets/images/products/plate-frame-heat-exchanger/ie5.png",
    title: "Expandable",
    content: "Add or remove plates anytime."
  },
];




const productsData = [
    {
  "heroImage":"/assets/images/products/plate-frame-heat-exchanger/plate-frame-heat-exchanger-banner2.webp",
  "pageTitle": "Plate & Frame Heat Exchanger",
  "overview":"",
  "products": [
    {
      "title": "",
      "subTitle": "Performance Layered in Every Plate",
      "images": [
        {
          "image": "/assets/images/products/plate-frame-heat-exchanger/plate-frame-heat-exchanger.webp",
          "text": "Plate & Frame Heat Exchanger"
        },
      ],
      "content": [
        "The system consists of a series of precision-pressed corrugated plates arranged in a frame, creating highly turbulent flow paths that maximize heat transfer while minimizing fouling.",
        "The chevron plate pattern ensures uniform flow distribution and enhanced heat transfer coefficients, allowing efficient operation even with small temperature approaches. The modular plate design enables easy expansion or capacity modification by simply adding or removing plates, making it a future-ready solution for evolving process requirements.",
        "Designed for demanding industrial environments, Precision PHEs support a wide range of plate materials (SS 304, SS 316, SMO 254, Hastelloy C-276, Titanium Gr 1 / Gr 11) and gasket materials (NBR, EPDM, Viton), ensuring compatibility with corrosive and high-purity fluids. Units are capable of operating up to 180 °C and 30 bar(g)."
      ],
    },
    
  ],
  "technicalChart":"/assets/images/products/plate-frame-heat-exchanger/phe-brochure-technical-spec1.webp",
  "technicalImage":"/assets/images/products/plate-frame-heat-exchanger/phe-brochure-technical-spec.webp",
  "phe": [
  {
    "title": "Exploded View of PHE",
    "image":"/assets/images/products/plate-frame-heat-exchanger/phe-brochure-view1.webp",
    "listTitle":"Technical Parameters",
   listContent: [
  {
    title: "Port Sizes",
    value: "50 mm - 500 mm"
  },
  {
    title: "Plate Materials",
    value: "SS 304, SS 316, SMO 254, Hastelloy C-276, Titanium Gr 1 / Gr 11"
  },
  {
    title: "Gasket Materials",
    value: "NBR, EPDM, Viton"
  },
  {
    title: "Maximum Operating Parameters",
    value: "180°C, 30 bar(g)"
  }
]
  }
],
"industrialExcellenceTitle": "Precision PHE — Built for Industrial Excellence"

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
  <div className={style.additionalText} data-aos="fade-up">
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


{/* Technical Specification */}

<section className={`${style.technicalSection} gray_section`}>
  <div className={`container ${style.container}`}>

    <h2 className='heading common_heading' data-aos="fade-up">Technical Specification</h2>

    <div className={style.technicalChart} data-aos="fade-right">
      <Image src={productsData?.[0]?.technicalChart} width={1721} height={1466} alt='Plate & Frame Heat Exchanger technical specification chart'/>
    </div>
    <div className={style.technicalImage} data-aos="fade-left">
      <Image src={productsData?.[0]?.technicalImage} width={1721} height={1466} alt='Plate & Frame Heat Exchanger technical drawing'/>
    </div>

  </div>
</section>


{/* Exploded view of PHE */}

<section className={`${style.pheSection}`}>
  <div className={`container ${style.container}`}>

    <h2 className='heading common_heading' data-aos="fade-up">Exploded view of PHE</h2>

    <div className={style.pheContainer} data-aos="fade-up">
      <div className={style.image} >
        <Image src={productsData?.[0]?.phe?.[0]?.image} width={761} height={536} alt="Exploded view of Plate & Frame Heat Exchanger" />
      </div>
      <div className={`curve_lines_bg ${style.content}`} >
        <h3 className='heading common_heading'>{productsData?.[0]?.phe?.[0]?.listTitle}</h3>
        <ul>
          {productsData?.[0]?.phe?.[0]?.listContent.map((item,index)=>(
            <li key={index}> <strong>{item.title}: </strong>{item.value} </li>
          ))}
        </ul>
      </div>
    </div>


  </div>
</section>

    {/* why choose section  */}
 <section className={`${style.industrialExcellence} gray_section`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up">{productsData?.[0]?.industrialExcellenceTitle}</h2>
        </div>

     <div className={style.industrialExcellenceCards}>
      {industrialExcellenceData && industrialExcellenceData.map((item,index)=>(
        <div className={style.card} key={index} data-aos="fade-up" data-aos-delay={index*200}>
        <Image src={item.image} width={64} height={64} alt=""/>
        <h3 className="heading">{item.title}</h3>
        <p>{item.content}</p>
        </div>
      ))}      
     </div>


      </div>

    </section>

{popup &&
<RequestQuote setpopup={setPopup} popupEnquiry="Plate & Frame Heat Exchanger"/>
}
    </>
  )
}
