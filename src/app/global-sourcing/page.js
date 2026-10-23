import React from 'react'
import style from './globalsourcing.module.css'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Engineering Expertise in Heat Exchangers & Design - PECPL",
  description:
    "Precision Equipment offers advanced engineering, thermal design & custom heat exchangers built to global standards for efficient, reliable industrial solutions.",
  path: "/engineering",
});


export default function page() {
  return (


    <>
    {/* hero section  */}

    <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
            <div className={style.content}>
            <h1 className='heading'>Global Sourcing</h1>
            <p>Capability is not just about what we do - it is about how we think, engineer, and deliver. With in-depth design expertise, advanced engineering tools, and strict adherence to global standards, we design and manufacture process equipment that delivers reliable performance, long service life, and exceptional quality across industries worldwide. Our engineering expertise enables us to design and deliver a wide range of critical and complex equipment for diverse industries, meeting stringent technical, operational, and project requirements.</p>
        </div>
        </div>
    </section>

    <section className="gray_section">

      <div className="container">

        <p className={style.text_justify}>At PECPL, strategic sourcing is the foundation of every critical process equipment we manufacture. Engineering excellence and advanced manufacturing technologies can deliver their full potential only when they are supported by the right materials, sourced to the highest standards. We believe that quality materials create quality equipment. Our dedicated and experienced procurement team works closely with engineering, quality, and project teams to ensure that every material is selected and sourced in accordance with customer specifications, project requirements, applicable codes, and quality standards. Our global sourcing network enables us to procure specialized materials and components from qualified suppliers across the world, ensuring access to the right materials, competitive sourcing, reliable quality, and timely availability. From material identification and supplier evaluation to procurement, inspection, documentation, and delivery, every stage is carefully managed. This integrated sourcing approach provides a strong foundation for manufacturing safe, reliable, and high-performance critical process equipment.</p>

      </div>

    </section>


    {/* Thermal Design */}

    {/* <section className={`${style.thermalSection}`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up">Thermal Design</h2>
          <p data-aos="fade-up" data-aos-delay="100">At Precision, we are strongly committed to supporting our customers from the very early phase of the projects. Our design engineers are actively involved in the thermal design of heat-exchanging equipment. With deep process knowledge and expertise in process simulation, we are able to select the right technology for each application and custom-design every piece of equipment. This enables us to deliver the most efficient and cost-effective configurations. Our thermal team supports all the technologies in our portfolio.</p>
        </div>

        <div className={style.productSection}>
            <div className={`${style.content} curve_lines_bg dark_section`} data-aos="fade-right">
                <h3 className='heading'>Products</h3>
                <p>Our heat transfer specialists are equipped to design and rate:</p>
                <ul>
                    <li>Any conventional TEMA-type Shell & Tube Heat Exchangers</li>
                    <li>High-pressure Heat Exchangers</li>
                    <li>Hairpin-type Heat Exchangers</li>
                    <li>Pressure Vessels & Reactors</li>
                </ul>
                <p>We also have expertise in manufacturing Helical Baffle and Rod Baffle Heat Exchangers.

</p>
            </div>

<div className={style.image} data-aos="fade-left">
    <Image src="/assets/images/thermal-design-img-n.webp" width={687} height={462} alt='Thermal design engineering'/>
</div>

        </div>


      </div>

    </section> */}

   <section className={style.aboutSection} >
        <div className={`container ${style.thermalContainer}`}>
            <div className={style.content} data-aos="fade-right" data-aos-delay="0">
                <h2 className='heading common_heading'>Tubes</h2>
                <p className={style.text_justify}>Tubes are one of the most critical components of heat exchangers and process equipment, directly influencing thermal performance, reliability, and service life. At PECPL, tube sourcing is therefore managed as a strategic and highly controlled process. We source tubes from reputed suppliers across the globe based on customer requirements, material specifications, applicable international standards, and project-specific expectations. Our sourcing decisions are supported by previous supply records, supplier performance history, technical evaluation, and detailed inspections carried out by our dedicated team.</p>
                <p className={style.text_justify}>To ensure quality, sustainability, and performance, inspections and testing are conducted at the tube manufacturing facility, while mock-up and verification activities are also carried out at our facility wherever required. PECPL has extensive experience in handling a wide range of tube types and materials, including seamless, high-fin, low-fin, stainless steel, titanium, zirconium, tantalum, coated, and other specialized tubes.</p>
                <p className={style.text_justify}> We have successfully manufactured equipment using various Materials of Construction (MOC), sourced from leading and reputed tube manufacturers worldwide. All tubes are procured in accordance with applicable international standards, project specifications, and required certifications, ensuring quality, traceability, and reliable performance. Our global tube-sourcing network and rigorous inspection practices enable us to select the right tube from the right source, supporting the delivery of high-quality, high-performance equipment for demanding applications worldwide.</p>
            </div>
            <div className={style.image} data-aos="fade-left" data-aos-delay="0">
                <Image src="/assets/images/tube-img.jpg" width={600} height={446} alt='Tubes'/>
            </div>
        </div>
    </section>


    {/* Software */}
    <section className={`${style.softwareSection} ${style.splitSection} gray_section`}>
        <div className={`container ${style.splitContainer} ${style.flexColumn}`}>
            <div className={style.image} data-aos="fade-right" data-aos-delay="0">
                <Image src="/assets/images/plate-picture-img.jpg" width={574} height={316} alt='Plates & Forgings'/>
            </div>
            <div className={style.content}>
                <h2 className='heading common_heading' data-aos="fade-up">Plates & Forgings</h2>
          
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">At PECPL, our global sourcing network provides access to plates across a wide range of MOC, specifications, and grades, enabling us to meet the diverse requirements of critical process equipment. Materials are sourced directly from approved mills as well as established dealers, depending on project specifications, availability, and customer requirements. Plates are procured in compliance with applicable international standards and specifications, including ISO, ASTM, TUV, ABS, EN, BIS, DIN, and other project-specific requirements. Before material purchase and acceptance, the required inspection, testing, and witnessing activities are carried out to verify compliance with technical and quality requirements. For specialized components such as forgings, we have established sourcing capabilities across The USA, Europe, South Korea, China, and India. The sourcing location is selected based on material requirements, technical specifications, lead time, availability, and customer expectations.</p>
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="200"> All materials are procured through customer-approved vendor lists (AVL) wherever specified, ensuring traceability, supplier compliance, and adherence to project quality requirements. Through this controlled and globally connected supply chain, PECPL ensures that every material entering our manufacturing process meets the required quality, specification, certification, and performance standards.</p>

            </div>
        </div>
    </section>



      {/* Mechanical */}
    <section className={`${style.mechanicalSection} ${style.splitSection} `}>
          <div className={`container ${style.splitContainer}`}>

<div className={style.content}>
    <h2 className='heading common_heading' data-aos="fade-up" data-aos-delay="0">Consumables and miscellaneous</h2>
    <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">Welding consumables are critical to achieving consistent welding quality, and welding quality is fundamental to the reliability and performance of critical equipment. At PECPL, welding consumables are sourced directly from reputed manufacturers and approved dealers, ensuring compliance with applicable international standards and project-specific requirements. Our global sourcing network enables us to procure a comprehensive range of welding consumables from suppliers across the world, based on customer specifications, material requirements, and applicable codes and standards. Consumables are supplied with valid certifications and, wherever required, are subjected to inspection and testing at the manufacturer’s facility as well as verification by our quality team and laboratory before use. </p>
    <p className={style.text_justify} data-aos="fade-up" data-aos-delay="200">This rigorous approach ensures that only approved and verified consumables enter the manufacturing process. We also maintain controlled storage conditions to preserve the quality and integrity of consumables throughout their shelf life. Beyond welding consumables, all critical procurement items—including machinery, paints, tools, and other production materials—are evaluated for quality, applicable standards, certifications, and test documentation before purchase and acceptance. Through this controlled sourcing and inspection process, PECPL ensures that every material and supporting resource contributes to safe, reliable, and high-quality equipment for our customers.</p>
</div>

<div className={`${style.borderstyle} ${style.image}`} data-aos="fade-left" data-aos-delay="0">
    <Image src="/assets/images/consumables-img.jpg" width={593} height={335} alt='Consumables and miscellaneous'/>
</div>

          </div>
    </section>
 

    </>
  )
}
