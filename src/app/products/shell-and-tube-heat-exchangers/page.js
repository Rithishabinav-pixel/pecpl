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
  "heroImage":"/assets/images/products/shell-and-tube-heat-exchangers/hero_img.webp",
  "pageTitle": "Shell and Tube Heat Exchangers",
  "overview": [
    "Our Shell & Tube Heat Exchangers are widely used in refineries, petrochemical plants, fertilizer units, chemical plants, and a broad range of process industries worldwide. Designed for parallel flow, counterflow, and crossflow arrangements, these exchangers are engineered to perform reliably under critical operating conditions.",
    "Since our Shell & Tube Heat Exchangers are designed and manufactured with precision, they have been operating successfully at various sites worldwide without issues related to performance, operation, or maintenance.",
    "We specialize in advanced configurations such as Helical Baffle, Rod Baffle, and Low-Fin designs. With complete in-house capabilities to design and manufacture all TEMA types, we provide both standard and highly critical Shell & Tube Heat Exchangers customized to meet specific process requirements."
  ],
  "products": [
    {
      "slug": "conventional-heat",
      "title": "Conventional Heat Exchangers",
      "subTitle": "Trusted Heat Exchange Solutions",
      "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "Engineered for efficiency and durability, our conventional shell and tube heat exchangers deliver optimal thermal performance across a wide range of industrial applications. Designed to operate under high pressures and temperatures, they ensure reliable and efficient heat transfer even in the most demanding process conditions.",
        "We have the capability and capacity to design and manufacture all TEMA types and flow configurations, tailored to meet specific process requirements. Our solutions are built to comply with international standards, ensuring performance reliability, structural integrity, and long service life across refinery, petrochemical, chemical, power, and other critical industries.",
      ],
    },
    {
      "slug": "helixchanger",
      "title": "Helixchanger®",
      "subTitle": "Turn Up the Efficiency",
      "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "Shell-and-tube heat exchangers (STHXs) play a vital role in refinery and process applications; however, conventional segmental baffle designs often face challenges such as high shell-side pressure drop, flow-induced fouling, vibration issues, and reduced thermal efficiency. These limitations can impact operational performance and increase maintenance requirements.",
        "In helical baffle heat exchangers, the baffles are arranged at an inclined angle along the shell length, creating a continuous spiral flow path across the tube bundle. Designed in accordance with Lummus technology principles, this configuration promotes uniform fluid distribution, reduces dead zones, minimizes fouling, and enhances overall heat transfer performance. Our helical baffle heat exchangers are engineered to significantly reduce pressure drop and mitigate flow-induced vibration while improving thermal efficiency. With superior fouling resistance, optimized flow characteristics, and extended service life, they are a preferred solution for high-performance applications in petrochemical, refinery, and process industries"
      ],
    },
    {
      "slug": "rod",
      "title": "Rod Baffle Heat Exchangers",
      "subTitle": "Stable Design Superior Heat Transfer for gas-to-gas applications in PP or PE plants",
     "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "A rod baffle heat exchanger is a specialized type of shell-and-tube heat exchanger in which conventional solid plate baffles are replaced with a system of longitudinal rod grids extending along the entire shell length. This innovative configuration significantly reduces shell-side pressure drop while minimizing stagnant or dead-flow zones within the tube bundle. The rod grids are arranged in an alternating pattern to provide uniform tube support, ensuring effective flow distribution and superior resistance to flow-induced vibration.",
        "Rod baffle heat exchangers designed in accordance with Novolen technology are widely used in polymer, petrochemical, and chemical processing industries, where high reliability, low fouling, and optimized thermal performance are critical."
      ],
    },
    {
      "slug": "cryogenic",
      "title": "Cryogenic Heat Exchangers",
      "subTitle": "Where Extreme Cold Meets Smart Engineering",
      "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "Our cryogenic heat exchangers are specifically designed to meet the extreme demands of cryogenic processing at temperatures as low as –163°C. They provide precise and efficient thermal control for liquefied gases, ensuring stable operation under severe low-temperature conditions. Engineered for structural integrity, thermal stability, and robust performance, these exchangers play a critical role in LNG, gas separation, and air liquefaction plants.",
        "Our solutions are developed to withstand harsh cryogenic and offshore environments, supporting efficient LNG transfer, heating, and regasification processes, particularly onboard LNG & FSRUs. We have extensive experience in supplying exchangers manufactured from special materials of construction, like stainless steel including Alloy 825 and other superior grades, to ensure superior corrosion resistance, mechanical strength, and long-term reliability in demanding applications."
      ],
    },
    {
      "slug": "high-pressure",
      "title": "High Pressure Heat Exchangers",
      "subTitle": "Strength in Pressure, Precision in Heat Transfer",
         "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        " A high‑pressure D‑type heat exchanger is a specialized shell‑and‑tube heat exchanger designed to handle elevated operating pressures and temperatures. The “D‑type” designation refers to a divided‑flow shell configuration defined by TEMA standards. This design improves heat transfer efficiency by directing fluid flow in a way that reduces bypassing and enhances turbulence, which increases thermal performance. Because it is built for high‑pressure service, the exchanger typically incorporates reinforced tube sheets, thicker shells, and closures such as breech‑lock systems to withstand demanding conditions. Materials of construction often include alloy steels, duplex stainless steels, or nickel alloys, chosen for their strength and corrosion resistance. These exchangers are widely used in petrochemical plants, fertilizer units, gas processing facilities, and power generation, where reliable performance under severe operating conditions is critical."
      ]
    },
    {
      "slug": "low-fin",
      "title": "Low Fin Heat Exchangers",
      "subTitle": "Finned for Better Performance",
       "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "A low‑fin tube heat exchanger is a shell‑and‑tube type exchanger that uses tubes with small, integrally rolled fins on their outer surface. These fins increase the external surface area of the tubes, which enhances heat transfer efficiency, especially when one of the fluids has a low heat transfer coefficient such as gases. Because the fins are part of the tube wall itself, they are mechanically strong, resistant to vibration, and durable under high‑pressure and high‑temperature conditions. This design allows for compact equipment that delivers better thermal performance compared to plain tubes, making it ideal for applications like petrochemical plants, refrigeration systems, power generation condensers, and chemical process cooling. In short, low‑fin tube heat exchangers provide a reliable and efficient solution where improved heat transfer and reduced equipment size are critical."
      ],
    },
    {
      "slug": "high-flux",
      "title": "High Flux Heat Exchangers",
      "subTitle": "Maximum Heat Transfer, Maximum Performance",
     "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "A high‑flux tube heat exchanger is a specialized type of shell‑and‑tube exchanger that uses tubes with an enhanced surface treatment or coating to significantly improve heat transfer performance. The “high‑flux” tubes are typically manufactured by bonding a porous metallic layer or sintered surface onto the tube wall, which increases the effective surface area and promotes better boiling or condensation of fluids. This design is especially useful in applications where one side of the exchanger involves phase change (like boiling or condensing) and where maximizing thermal efficiency is critical. Because of their superior heat transfer capability, high‑flux tube exchangers allow for more compact equipment, reduced weight, and lower operating costs compared to conventional exchangers. They are widely used in industries such as petrochemicals, power generation, refrigeration, and LNG processing, where reliable performance under demanding thermal loads is essential."
      ],
    },
    {
      "slug": "condensers",
      "title": "Condensers",
      "subTitle": "Advanced Condenser Design for Optimized heat transfer",
     "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
        "A condenser is designed specifically to condense a vapor into liquid by transferring heat to a cooling medium. It consists of a cylindrical shell containing a bundle of tubes, with one fluid flowing inside the tubes and another fluid flowing outside them within the shell. In condenser duty, the vapor (such as steam, hydrocarbon vapours, or refrigerants) typically flows on the shell side, while cooling water or another coolant flows through the tubes. As the vapor loses heat to the coolant, it condenses into liquid, which is then collected and removed.",
        "At Precision, we design and manufacture high-performance condensers engineered to meet the most demanding industrial applications. Our expertise includes RG Condensers, Surface Condensers, Sulphur Condensers, Overhead Condensers, Steam Condensers, and other custom-engineered condenser solutions designed to meet specific customer and process requirements."
      ],
      "additionalText": [
        "These exchangers are widely used in power plants (steam turbine exhaust condensers), petrochemical and chemical plants (hydrocarbon vapor condensation), and refrigeration systems. Their advantages include high reliability, the ability to handle large heat loads, and flexibility in design for different pressure and temperature conditions. Materials of construction are chosen based on the fluids involved, often including carbon steel, stainless steel, or copper alloys for excellent thermal conductivity and corrosion resistance."
      ]
    },
    {
      "slug": "feed-water-heaters",
      "title": "Feed Water Heaters",
      "subTitle": "Powering Efficient Steam Generation",
     "images": [
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-1.jpg",
          "text": "Conventional Heat Exchanger"
        },
        {
          "image": "/assets/images/products/shell-and-tube-heat-exchangers/conventional-heat-exchangers-2.jpg",
          "text": "Conventional Heat Exchanger"
        },
      ],
      "content": [
    "Precision Equipments is a leading manufacturer of high-performance Feed Water Heaters (FWH) designed to improve the efficiency, reliability, and performance of thermal power plants. A feed water heater is a critical shell and tube heat exchanger used to preheat boiler feed water by utilizing extraction steam from the turbine before it enters the Steam Generator. This process significantly reduces the energy required for steam generation, minimizes thermodynamic losses, improves overall cycle efficiency, lowers fuel consumption, and enhances plant performance.",
    "Our feed water heaters are engineered and manufactured in accordance with stringent international design standards, ensuring safe, reliable, and long-lasting operation in demanding environments."    
    ],
      "additionalText":[
        "Precision Equipments offers a comprehensive range of configurations, including High Pressure (HP) and Low Pressure (LP) Feed Water Heaters, horizontal and vertical designs, one-zone, two-zone, three-zone, duplex, and custom-engineered combinations tailored to specific plant requirements and Comes in various Material of Construction Combination.",
        "Manufactured using advanced fabrication techniques, qualified welding procedures, and rigorous quality control processes, our feed water heaters provide excellent thermal performance, high reliability, and ease of maintenance. With a strong commitment to engineering excellence, innovation, and quality, Precision Equipments delivers efficient and dependable feed water heating solutions that maximize plant efficiency and ensure long-term operational reliability."
      ]
    }
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

    <section className={style.overviewSection}>
        <div className={`container ${style.container}`}>
            {productsData && 
            
            productsData[0].overview.map((item,index)=>(
                <p key={index}>{item}</p>
            ))
            }
           </div>
    </section>


    {/* products section  */}
   {productsData?.[0]?.products?.map((product, index) => (
  <section className={`${style.products_section} ${index % 2 !== 0 ? style.reverse : ""}`} key={index} id={product.slug} >
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
