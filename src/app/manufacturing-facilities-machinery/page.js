import React from 'react'
import style from './manufacturing.module.css'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Manufacturing Facilities & Machinery - Precision Equipment",
  description:
    "Precision Equipment 15,000 sq.m manufacturing facility features advanced machinery, skilled teams & large-scale fabrication for precision process equipment.",
  path: "/manufacturing-facilities-machinery",
});

const machinerie = [
{
    image:"/assets/images/manuf-crd-1-img.png",
    title:"CNC Profile Cutting Machine"
},
{
    image:"/assets/images/plate-bending-machine-img.png",
    title:"Plate Bending Machine"
},
{
    image:"/assets/images/saw-welding-img.png",
    title:"Saw Welding Machine"
},
{
    image:"/assets/images/cnc-bta-img.png",
    title:"CNC BTA Drilling Machine"
},
{
    image:"/assets/images/hydro-pro-img.jpg",
    title:"Hydro Pro Expansion Machine"
},
{
    image:"/assets/images/manuf-crd-2-img.png",
    title:"CNC Floor Boring Machine"
},
{
    image:"/assets/images/double-column-img.png",
    title:"Double Column Double Pallet VMC"
},
{
    image:"/assets/images/cnc-vertical-img.png",
    title:"CNC Vertical Boring Machine"
},
{
    image:"/assets/images/orbital-welding-img.png",
    title:"Orbital Welding Machine for Tube to tube sheet welding"
},
{
    image:"/assets/images/furance-img.jpg",
    title:"Furnace (Modular HAT Type)"
},
]

export default function page() {
  return (

    <>
    
    {/* hero section  */}

    <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
            <div className={style.content}>
            <h1 className='heading'>Manufacturing</h1>
            <p>Our facilities combine advanced machinery, skilled craftsmanship, and streamlined manufacturing processes to deliver complex, large-scale heat exchangers and process equipment with uncompromised precision and quality. Equipped with a comprehensive range of welding machines, machining systems, and specialized equipment, our facility supports every critical stage of heat exchanger manufacturing—from fabrication and welding to machining, assembly, inspection, and final testing.</p>
        </div>
        </div>
    </section>

     {/* Facilities */}
    <section className={`${style.FacilitiesSection} ${style.splitSection} gray_section`}>
          <div className={`container ${style.splitContainer}`}>

            <div className={style.image} data-aos="fade-right" data-aos-delay="0">
                <Image src="/assets/images/manufacturing-img.webp" width={700} height={542} alt='Precision Equipments manufacturing facility'/>
            </div>

            <div className={style.content}>
                <h2 className='heading common_heading' data-aos="fade-up" data-aos-delay="0">Facilities</h2>
                {/* <p className={style.subHeading} data-aos="fade-up" data-aos-delay="100">Total Area: 20,000 sq.MT</p> */}
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="200">	The company operates a well-organized manufacturing facility equipped with a comprehensive range of advanced machinery and tools, enabling the production of high-quality products while meeting committed delivery schedules. The facility features an in-house radiography enclosure, heat treatment furnace, grit blasting system, and dedicated paint booth, ensuring greater control over critical manufacturing and finishing processes.</p>
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="300">	The in-house machine shop supports the company’s machining requirements and also provides subcontracting services to diverse industries, including valve manufacturing, automotive, power generation, earthmoving equipment, and forging. This integrated machining capability enhances manufacturing flexibility, quality control, and overall delivery efficiency.</p>
                <div className={style.pointsCard}>
                    <h4 className='heading' data-aos="fade-up" data-aos-delay="500">Fabrication Capability</h4>
                    <div className={style.card} data-aos="fade-up" data-aos-delay="600">
                        <h5 className='heading'>5M</h5>
                        <p>Diameter</p>
                    </div>
                    <div className={style.card} data-aos="fade-up" data-aos-delay="650">
                        <h5 className='heading'>30M</h5>
                        <p>Length</p>
                    </div>
                    <div className={style.card} data-aos="fade-up" data-aos-delay="700">
                        <h5 className='heading'>300MT</h5>
                        <p>Single Shipment Weight</p>
                    </div>
                </div>
            </div>

          </div>
    </section>


    {/* Welding */}
    <section className={`${style.FacilitiesSection} ${style.splitSection} gray_section`}>
          <div className={`container ${style.splitContainer}`}>

            <div className={style.content}>
                <h2 className='heading common_heading' data-aos="fade-up" data-aos-delay="0">Welding</h2>
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="200">The strength of a critical equipment manufacturer is defined by the quality, capability, and consistency of its welding performance. At PECPL, we have developed advanced in-house welding capabilities to manufacture highly critical equipment across a wide range of materials and demanding applications. Our welding expertise covers Carbon Steel (CS), Stainless Steel (SS), Low-Temperature Carbon Steel (LTCS), Duplex Stainless Steel (DSS), Super Duplex Stainless Steel (SDSS), Titanium (Ti), Alloy 625, Alloy 825, and other specialized non-ferrous materials. Our qualified welders are also experienced in challenging and specialized materials such as Zirconium, Inconel, and Hastelloy, enabling us to undertake complex and critical welding applications. </p>
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="300">With 400+ welding qualifications and experience in executing specialized and rare welding techniques, our facility is equipped to meet stringent project and industry requirements. More than 80% of our welding operations are automated, combining advanced technology with skilled workmanship to achieve consistent quality, productivity, and repeatability. Our welding and manufacturing processes are supported by internationally recognized ISO and ASME standards, while our advanced material testing laboratory is NABL recognized, strengthening our commitment to rigorous quality assurance and verification.</p>
            </div>

            <div className={style.image} data-aos="fade-left" data-aos-delay="0">
                <Image src="/assets/images/welding-img.webp" width={969} height={641} alt='Welding'/>
            </div>

          </div>
    </section>
    
 
     {/* Machineries  */}
 <section className={`${style.machinerieSection} gray_section no_padding_top`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up" data-aos-delay="0">Machineries</h2>
          <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">Our production is supported by a wide range of modern machinery that makes quality fabrication simple and consistent. We use equipment, from CNC cutting, bending, and drilling machines to specialised welding, heat treatment furnaces, and finishing booths, that helps us precisely manufacture every component. This balanced mix of technology ensures our processes run smoothly while meeting the required standards for reliable and efficient process equipment.</p>
        </div>

     <div className={style.machinerieCards}>
      {machinerie && machinerie.map((item,index)=>(
        <div className={style.card} key={index} data-aos="fade-up" data-aos-delay={index*100}>
            <div className={style.image}>
        <Image src={item.image} width={700} height={887} alt={item.title}/>
        </div>
        <h3 className="heading">{item.title}</h3>
        </div>
      ))}      
     </div>


      </div>

    </section>


    </>

  )
}
