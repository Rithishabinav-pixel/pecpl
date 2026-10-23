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
            <p>	From shop floor to sea, road, and air, our logistics operations are built around precision, coordination, and reliability. We manage Over-Dimensional Cargo (ODC), coordinate multimodal transportation, and ensure the safe and timely movement of equipment across the globe. Every shipment is planned and monitored with meticulous attention to detail, from dispatch and route coordination to final delivery. Because when it comes to critical equipment, timelines matter. With a strong focus on logistics planning, shipment tracking, and delivery coordination, we ensure on-time delivery to every corner of the world—safely, efficiently, and reliably.</p>
        </div>
        </div>
    </section>


    {/* Software */}
    <section className={`${style.softwareSection} ${style.splitSection}`}>
          <div className={`container ${style.splitContainer}`}>

<div className={style.content}>
    <h2 className='heading common_heading' data-aos="fade-up">Road</h2>
    <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">Our facility is strategically located along a major National Highway, providing seamless road connectivity to key industrial hubs across India. The route offers excellent accessibility for the transportation of extra-long, over-height, and Over-Dimensional Cargo (ODC), with minimal route restrictions and no major flyover or bridge limitations. Before every major equipment dispatch, a comprehensive route and road study is conducted to assess clearances, road conditions, bridge and flyover limitations, turning radii, overhead obstructions, and other transportation challenges. This proactive approach enables us to identify potential risks and develop the most suitable logistics plan well in advance. From the factory to the client’s site, every movement is carefully planned to ensure safe, smooth, and timely delivery. Our route-study-driven logistics approach strengthens our ability to handle complex transportation requirements and deliver critical equipment reliably across India and beyond.</p>
    {/* <div className={style.pointsCard}>
        <div className={style.card} data-aos="fade-up" data-aos-delay="200">
            <p>No flyover or bridge restrictions for tall cargo</p>
        </div>
        <div className={style.card} data-aos="fade-up" data-aos-delay="250">
          <p>Direct highway access to major industrial corridors</p>
        </div>
    </div> */}
</div>

<div className={style.image} data-aos="fade-left" data-aos-delay="0">
    <Image src="/assets/images/road-img.webp" width={1000} height={662} alt='Road transport of heavy equipment'/>
</div>

          </div>
    </section>
   

      {/* Software Cards */}
    <section className={`${style.softwareCardsSection} gray_section `}>
          <div className={`container section_container ${style.softwareCardsContainer}`}>

  <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up" data-aos-delay="0">Sea</h2>
          <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">Located approximately 45 km from Chennai Sea Port, our facility benefits from excellent highway connectivity, enabling efficient and reliable transportation of heavy and oversized equipment to the port. Depending on the weight, dimensions, and transportation requirements of each equipment, we deploy suitable logistics solutions, including mechanical trailers and multi-axle hydraulic trailers, ensuring safe and controlled movement. For export shipments, sailing schedules and vessel coordination are critical to meeting delivery commitments. To manage these requirements effectively, we have a dedicated export logistics team responsible for shipment planning, port coordination, documentation, vessel scheduling, cargo handling, and continuous tracking.</p>
        </div>

   <div className={style.seaCards}>
    <div className={style.card} data-aos="fade-up" data-aos-delay="0">
        <Image src="/assets/images/sea-img.webp" width={1078} height={626} alt='Sea freight shipment 1' />
    </div>
    {/* <div className={style.card} data-aos="fade-left" data-aos-delay="0">
        <Image src="/assets/images/sea-img-2.webp" width={700} height={642} alt='Sea freight shipment 2' />
    </div> */}
   </div>
          </div>
    </section>





    {/* two cards section  */}

     {/* <section className={`${style.twoCardsSection} `}>
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
    </section> */}

    {/* Air */}
    <section className={`${style.softwareSection} ${style.splitSection}`}>

          <div className={`container ${style.splitContainer}`}>

            <div className={style.image} data-aos="fade-right" data-aos-delay="0">
              <Image src="/assets/images/air-img.webp" width={916} height={576} alt='Air'/> 
             </div>

            <div className={style.content}>
                <h2 className='heading common_heading' data-aos="fade-up">Air</h2>
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">When project schedules demand speed, we also provide air freight solutions for critical and time-sensitive equipment. Based on customer requirements, we have successfully executed air shipments, including the transportation of complete heat exchanger assemblies and tube bundles to international destinations. With an international airport located approximately 25 km from our facility, we are strategically positioned to support rapid air cargo movements. Our experienced logistics team manages the complete process, including shipment planning, cargo handling, documentation, coordination with freight forwarders, and airport operations. Our proven experience in air freight enables us to respond quickly to urgent project requirements, helping customers minimize transportation lead times and maintain production schedules.</p>
            </div>

          </div>

    </section>
   
   </>
  )
}
