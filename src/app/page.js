"use client";

import React, { useRef } from "react";
import Image from "next/image";
import style from './page.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay,EffectFade, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "./components/ui/button";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Link from "next/link";
import LinkBtn from "./components/ui/LinkBtn";
import FooterCTA from "./components/ui/FooterCTA";

// Hero banner data
const heroBannerData = [
  {
    title: "Delivering Advanced Heat Transfer Solutions for Industry-leading Performance",
    link: "/",
    image: "/assets/images/hero-banner.webp",
  },
  {
    title: "Powering High-Efficiency Shell Tube Heat Exchangers with Cutting-Edge Technology",
    link: "/",
    image: "/assets/images/hero-banner.webp",
  },
  {
    title: "Powering Industries with Precision Heat Transfer Solutions.",
    link: "/",
    image: "/assets/images/hero-banner.webp",
  },
];

// product datas 
const productData = [
  {
    name:"Rod Baffle Exchangers",
    content:"Our rod baffle heat exchangers offer enhanced heat transfer with reduced pressure drop by using rod baffles instead of conventional segmental ones. Designed and manufactured with precision, they’re ideal for high-fouling fluids, offering consistent performance, easy maintenance, and long-term reliability across various industrial sectors.",
    link:"/",
    image:"/assets/images/rod-baffle-heat-exchangers.jpg"
  },
    {
    name:"Helical Baffle Heat Exchangers",
    content:"Our helical baffle heat exchangers are designed to reduce pressure drop and flow-induced vibration while enhancing heat transfer efficiency. With improved fouling resistance and extended service life, they’re a preferred solution for high-performance applications in the petrochemical and process industries.",
    link:"/",
    image:"/assets/images/helixchange.jpg"
  },
    {
    name:"Shell and Tube Heat Exchangers",
    content:"Engineered for efficiency and durability, our shell and tube heat exchangers deliver optimal thermal performance across diverse industrial applications. Designed to handle high pressures and temperatures, they ensure reliable heat transfer in demanding process conditions.",
    link:"/",
    image:"/assets/images/shell.jpg"
  },
]

// industries slider data 
const industrySliderData=[
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
  "/assets/images/industry-slide-img.jpg",
]

// solutions data 
const solutionsData = [
  {
    image:"/assets/images/engineering.svg",
    name:"Engineering",
    content:"Capability-Engineering Capability is not just what we do. It’s how we think. With in-depth design expertise, advanced engineering tools, and strict adherence to global standards.",
link:""
  },
  {
    image:"/assets/images/manufacture-img.svg",
    name:"Manufacturing",
    content:"Equipped for excellence, our facilities combine advanced machinery, skilled craftsmanship, and streamlined processes to produce complex, large-scale heat exchangers and process equipment.",
link:""
  },
  {
    image:"/assets/images/logistic-img.svg",
    name:"Logistics",
    content:"Moving heavy, moving smart. From road to sea, our logistics operations are built on precision, handling ODC, coordinating shipments, and ensuring safe, timely deliveries across the globe.",
link:""
  },
]


// why choose content 

const whyChooseData = [
  {
    title:"40+ Years of Engineering Excellence",
    content:"Decades of proven expertise and commitment to precision have made us a trusted name in delivering advanced process equipment worldwide."
  },
    {
    title:"Innovative Designs for Reliable Performance ",
    content:"Our engineering is led by insight and innovation, ensuring every solution delivers consistent, reliable performance under demanding process conditions."
  },
    {
    title:"Robust Infrastructure for Scalable Production",
    content:"Backed by cutting-edge facilities and skilled teams, we scale production without compromising quality, precision, or delivery timelines."
  },
    {
    title:"Seamless Logistics for Fast Deliveries",
    content:"From planning to dispatch, our streamlined logistics ensure your equipment reaches you safely, on time, and ready to perform."
  },
]


export default function Page() {

  const half = Math.ceil(industrySliderData.length / 2);

const topSlider = industrySliderData.slice(0, half);
const bottomSlider = industrySliderData.slice(half);

 const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const counters = [
    { value: 500, suffix: "+", label: "Workforce" },
    { value: 1000, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Representations Worldwide" },
    { value: 5500, suffix: "+", label: "Equipment" },
  ];

  return (
<>
    {/* hero section  */}
    <section className={style.heroSection}>
      <Swiper
         modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect={"fade"}
         fadeEffect={{
      crossFade: true,
    }} 
        speed={500}
        slidesPerView={1}
        loop
         navigation={{
    prevEl: ".custom_prev",
    nextEl: ".custom_next",
  }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {heroBannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`${style.heroSlide}`} style={{backgroundImage: `url(${item.image})`}}>

              <div className="container">
             
              <div className={style.heroContent}>
                 {index === 0 ? (
        <h1 className={`heading ${style.sliderHeading}`}>{item.title}</h1>
      ) : (
        <h2 className={`heading ${style.sliderHeading}`}>{item.title}</h2>
      )}

                {item.link && (
                  <Button href={item.link} classname={`white`} text={"Explore More"}/>
                )}
              </div>

              </div>

            </div>
          </SwiperSlide>

          
        ))}
      </Swiper>
<div className={style.heroSlide_navigation}>
      <button className={`custom_prev ${style.prev}`}>
        <Image src="/assets/images/arrow-left.svg" width={24} height={24} alt=""/>
      </button>
<button className={`custom_next ${style.next}`}>
  <Image src="/assets/images/arrow-right.svg" width={24} height={24} alt=""/>
</button>
</div>

    </section>

    {/* about section  */}
    <section className={style.aboutSection}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">
            Transforming Industries Worldwide with Precision Since 1981
          </h2>
          <p>Precision Equipments is a leading manufacturer of Shell & Tube Heat Exchangers and process equipment, serving critical industries for over three decades. Backed by strong engineering, global standards, and a commitment to quality, we deliver performance-driven solutions that power industrial operations across sectors, including oil & gas, power, petrochemicals, and fertilisers.</p>
          <Button href={"#"} classname={`light_blue`} text={"Know more"}/>
        </div>

        <div ref={ref} className={style.counterCards}>
      {counters.map((item, index) => (
        <div key={index} className={style.card}>
          <h3 className="heading common_heading">
            {inView ? (
              <CountUp
                end={item.value}
                duration={2.5}
                separator=","
                suffix={item.suffix}
              />
            ) : (
              `0${item.suffix}`
            )}
          </h3>
          <p>{item.label}</p>
        </div>
      ))}
    </div>


      </div>

    </section>


{/* products section  */}
<section className={`${style.productsSection} dark_section curve_lines_bg`}>
   <div className="container section_container">
   <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">
            High-Performance Products for Peak Industrial Efficiency
          </h2>
          <p>Designed for reliability and engineered for performance, our product lineup from a leading heat exchanger manufacturer meets the evolving needs of process-intensive industries. From standard to custom-built heat exchangers and pressure equipment, every unit is crafted with precision to deliver consistent efficiency, enhanced safety, and long-term durability across a wide range of industrial applications.</p>
          <Button href={"#"} classname={`white`} text={"Know more"}/>
        </div>

        <div className={style.productCards}>
          
          {
            productData && productData.map((item,index)=>(
             <div key={index} className={style.card}>

  <Image src={item.image} width={650} height={519} alt={item.name}/>
  <h3 className="heading">{item.name}</h3>
  <p>{item.content}</p>
  <LinkBtn href="#" text="Know More"/>
</div>
           
))
          }

        </div>

        </div>
</section>


 {/* Industry  section  */}
    <section className={style.industrySection}>

      <div className="container section_container full_width">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Engineering Success for Industry Titans</h2>
          <p>Our reputation for engineering success is built upon long-standing partnerships with leading industry titans. Our bespoke heat exchangers and pressure equipment empower their critical operations, delivering reliable and efficient <strong>heat transfer solutions</strong> designed for lasting performance.</p>
          <Button href={"#"} classname={`light_blue`} text={"Know more"}/>
        </div>

        {/* industries slider  */}

        <div className={style.industries_slider}>


 {/* Top Slider */}
<Swiper
  className={style.industrySwiper}
 modules={[Autoplay, FreeMode]}
  freeMode={{
    enabled: true,
    momentum: false,
  }}
  slidesPerView={9}
  spaceBetween={20}
  loop
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    320: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 9,
    },
  }}
>
  {topSlider.map((item, index) => (
    <SwiperSlide key={index}>
      <div className={style.industrySlide_card}>
        <Image
          src={item}
          width={150}
          height={82}
          alt=""
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

{/* Bottom Slider */}
<Swiper
  className={style.industrySwiper}
  modules={[Autoplay, FreeMode]}
  freeMode={{
    enabled: true,
    momentum: false,
  }}
  dir="rtl"
  slidesPerView={9}
  spaceBetween={20}
  loop
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    320: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1024: {
      slidesPerView: 7,
    },
    1400: {
      slidesPerView: 9,
    },
  }}
>
  {bottomSlider.map((item, index) => (
    <SwiperSlide key={index}>
      <div className={style.industrySlide_card}>
        <Image
          src={item}
          width={150}
          height={82}
          alt=""
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>


        </div>



      </div>

    </section>


 {/* solution  section  */}
   <section className={`${style.solutionsSection} no_padding_top`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">
            Driving Solutions Backed by Strong Capabilities
          </h2>
          <p>At PECPL, our capabilities go beyond manufacturing. They reflect decades of experience, technical expertise, and a commitment to quality. With strong design proficiency, robust engineering systems, and modern production facilities, we are equipped to deliver precise, reliable solutions customised to the unique demands of global industrial clients.</p>
        </div>

     <div className={style.solutionsCards}>
      {solutionsData && solutionsData.map((item,index)=>(
        <div className={style.card} key={index}>
          <Image className={style.image} src={item.image} width={384} height={386} alt=""/>
          <h3 className="heading">{item.name}</h3>
          <p>{item.content}</p>
          <LinkBtn href={item.link} text="Know more"/>
        </div>
      ))}
     </div>


      </div>

    </section>

    {/* why choose section  */}
 <section className={`${style.whyChooseSection} gray_section`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Why Choose Us</h2>
        </div>

     <div className={style.whyChooseCards}>
      {whyChooseData && whyChooseData.map((item,index)=>(
        <div className={style.card} key={index}>
        <Image src="/assets/images/why_choose_icon.svg" width={40} height={40} alt=""/>
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
