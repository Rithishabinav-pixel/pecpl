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
            <p>Equipped for excellence, our facilities combine advanced machinery, skilled craftsmanship, and streamlined processes to produce complex, large-scale heat exchangers and process equipment with uncompromised precision and quality.</p>
        </div>
        </div>
    </section>

     {/* Facilities */}
    <section className={`${style.FacilitiesSection} ${style.splitSection} gray_section`}>
          <div className={`container ${style.splitContainer}`}>

            <div className={style.image}>
    <Image src="/assets/images/manufacturing-img.webp" width={700} height={542} alt='Precision Equipments manufacturing facility'/>
</div>

<div className={style.content}>
    <h2 className='heading common_heading'>Facilities</h2>
    <p className={style.subHeading}>Total Area: 20,000 sq.MT</p>
    <p>The company operates a well-laid-out facility equipped with a full range of machinery and tools required to manufacture high-quality products within committed delivery timelines. The plant includes an in-house radiography enclosure, heat treatment furnace, grit blasting setup, and a paint booth.</p>
    <p>The in-house machine shop not only supports our machining requirements but also caters to subcontracting needs for valve industries, automotive, power plants, earthmoving equipment, and forging units</p>
<div className={style.pointsCard}>
    <h4 className='heading'>Fabrication Capability</h4>
    <div className={style.card}>
        <h5 className='heading'>5M</h5>
        <p>Diameter</p>
    </div>
    <div className={style.card}>
        <h5 className='heading'>30M</h5>
        <p>Length</p>
    </div>
    <div className={style.card}>
        <h5 className='heading'>300MT</h5>
        <p>Single Shipment Weight</p>
    </div>
</div>
</div>

          </div>
    </section>
    

     {/* Machineries  */}
 <section className={`${style.machinerieSection} gray_section no_padding_top`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Machineries</h2>
          <p>Our production is supported by a wide range of modern machinery that makes quality fabrication simple and consistent. We use equipment, from CNC cutting, bending, and drilling machines to specialised welding, heat treatment furnaces, and finishing booths, that helps us precisely manufacture every component. This balanced mix of technology ensures our processes run smoothly while meeting the required standards for reliable and efficient process equipment.</p>
        </div>

     <div className={style.machinerieCards}>
      {machinerie && machinerie.map((item,index)=>(
        <div className={style.card} key={index}>
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
