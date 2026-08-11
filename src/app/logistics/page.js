import React from 'react'
import style from './logistics.module.css'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Efficient Logistics & ODC Cargo Solutions - PECPL",
  description:
    "PECPL offers expert logistics solutions via road & sea, specializing in ODC shipments, safe transport & timely deliveries with seamless global coordination.",
  path: "/logistics",
});

export default function page() {
  return (
   <>
   
     {/* hero section  */}

    <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
            <div className={style.content}>
            <h1 className='heading'>Logistics</h1>
            <p>Moving heavy, moving smart. From road to sea, our logistics operations are built on precision, handling ODC, coordinating shipments, and ensuring safe, timely deliveries across the globe. Every movement is monitored with meticulous care because timelines matter. So does trust.</p>
        </div>
        </div>
    </section>


    {/* Software */}
    <section className={`${style.softwareSection} ${style.splitSection}`}>
          <div className={`container ${style.splitContainer}`}>

<div className={style.content}>
    <h2 className='heading common_heading' data-aos="fade-up">Road</h2>
<p data-aos="fade-up" data-aos-delay="100">Our facility is strategically located along a major National Highway, ensuring seamless road access to key industrial hubs across India. The route is free from flyover or bridge restrictions, enabling hassle-free movement of extra-long or over-height equipment.</p>
<div className={style.pointsCard}>
    <div className={style.card} data-aos="fade-up" data-aos-delay="200">
        <p>No flyover or bridge restrictions for tall cargo</p>
    </div>
    <div className={style.card} data-aos="fade-up" data-aos-delay="250">
       <p>Direct highway access to major industrial corridors</p>
    </div>
</div>
</div>

<div className={style.image} data-aos="fade-left" data-aos-delay="0">
    <Image src="/assets/images/logistic-side-img.webp" width={720} height={480} alt='Road transport of heavy equipment'/>
</div>

          </div>
    </section>
   

      {/* Software Cards */}
    <section className={`${style.softwareCardsSection} gray_section `}>
          <div className={`container section_container ${style.softwareCardsContainer}`}>

  <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up" data-aos-delay="0">Sea</h2>
          <p data-aos="fade-up" data-aos-delay="100">Located approximately 45 km from the Chennai Sea Port, the facility is well connected by highway. Depending on the equipment’s weight and size, shipments are transported using either mechanical or multi-axle hydraulic trailers.</p>
        </div>

   <div className={style.seaCards}>
    <div className={style.card} data-aos="fade-right" data-aos-delay="0">
        <Image src="/assets/images/sea-img-1.webp" width={700} height={642} alt='Sea freight shipment 1' />
    </div>
    <div className={style.card} data-aos="fade-left" data-aos-delay="0">
        <Image src="/assets/images/sea-img-2.webp" width={700} height={642} alt='Sea freight shipment 2' />
    </div>
   </div>
          </div>
    </section>



    {/* two cards section  */}

     <section className={`${style.twoCardsSection} `}>
          <div className={`container ${style.twoCardsContainer}`}>

<div className={style.card}>
    <h2 className='common_heading heading' data-aos="fade-up" data-aos-delay="0">ODC Shipments</h2>
    <p data-aos="fade-up" data-aos-delay="100">With extensive experience in handling Over-Dimensional Cargo (ODC), the company has a dedicated logistics team that collaborates with reputed service providers. The team ensures smooth execution by selecting the right mode of transport, conducting route surveys, and escorting equipment to its final destination.</p>
    <Image data-aos="fade-up" data-aos-delay="200" src="/assets/images/odc-img.webp" width={700} height={466} alt='Over-Dimensional Cargo (ODC) shipment'/>
</div>

<div className={style.card}>
    <h2 data-aos="fade-up" data-aos-delay="0" className='common_heading heading'>Shipping Coordination</h2>
    <p data-aos="fade-up" data-aos-delay="100">Custom transportation drawings are prepared and submitted to the customer for approval, detailing packing and lashing requirements. On request, weekly traffic updates are provided until the cargo reaches its destination.</p>
    <Image data-aos="fade-up" data-aos-delay="200" src="/assets/images/shipping-img.webp" width={700} height={466} alt='Shipping coordination and transport planning'/>
</div>


          </div>
    </section>
   
   </>
  )
}
