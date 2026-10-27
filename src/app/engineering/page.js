import React from 'react'
import style from './engineering.module.css'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Engineering Expertise in Heat Exchangers & Design - PECPL",
  description:
    "Precision Equipment offers advanced engineering, thermal design & custom heat exchangers built to global standards for efficient, reliable industrial solutions.",
  path: "/engineering",
});

// software cards data 

const softwareCardsData = [
    {
        title:"Mechanical Design:",
        list:[
            {
                image:"/assets/images/pvelite.png",
                content:"PV Elite - ASME VIII Div. 1 & 2"
            },
            {
                image:"/assets/images/asme-img.png",
                content:"PD 5500, EN 13445"
            },
            {
                image:"/assets/images/aspen-img.png",
                content:"Aspen Tech - ASME VIII Div. 1 & 2"
            },
        ]
    },
      {
        title:"Analysis:",
        list:[
            {
                image:"/assets/images/ansys-img.png",
                content:"ANSYS Workbench"
            },
            {
                image:"/assets/images/np.png",
                content:"Nozzle-PRO"
            }
        ]
    },
      {
        title:"Mechanical Design:",
        list:[
            {
                image:"/assets/images/autocad.png",
                content:"AutoDesk"
            },
            {
                image:"/assets/images/auto-img.png",
                content:"AutoCad"
            }
        ]
    },
]

// materials data
export const materialData = [
  {
    title: "Carbon Steel - CS",
    list: [
      "Fine-grain Steel / Normalized",
      "High Strength - CS (QH)",
    ],
  },
  {
    title: "Cr - Mo Alloys",
    list: [
      "0.5 Mo",
      "1 Cr - 0.5 Mo",
      "1.25 Cr - 0.5 Mo",
      "2.25 Cr - 1 Mo",
      "5 Cr - 0.5 Mo",
      "9 Cr - 1 Mo",
      "9 Cr - 1 Mo - V",
    ],
  },
  {
    title: "Ni - Alloyed Steel",
    list: [
      "0.5 Ni",
      "3.5 Ni",
      "9.0 Ni",
    ],
  },
  {
    title: "Stainless Steel",
    list: [
      "Ferritic & Martensitic Steels",
      "Austenitic Steel",
      "Super Austenitic Steel",
      "Duplex / Super Duplex / Hyper Duplex",
      "Urea Grade Steel",
    ],
  },
  {
    title: "Non Ferr. Materials",
    list: [
      "Ti - Gr. I / Gr. II",
      "Inconel 600 / 625 / 800",
      "Monel 400 (Ni-Cu Alloy)",
      "Hastelloy C-276",
      "Cu-Ni 90/10; 70/30",
      "Admirality / Naval Brass",
      "Aluminium-Nickel-Bronze",
    ],
  },
];

export default function page() {
  return (


    <>
    {/* hero section  */}

    <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
            <div className={style.content}>
            <h1 className='heading'>Engineering</h1>
            <p>Capability is not just about what we do - it is about how we think, engineer, and deliver. With in-depth design expertise, advanced engineering tools, and strict adherence to global standards, we design and manufacture process equipment that delivers reliable performance, long service life, and exceptional quality across industries worldwide. Our engineering expertise enables us to design and deliver a wide range of critical and complex equipment for diverse industries, meeting stringent technical, operational, and project requirements.</p>
        </div>
        </div>
    </section>

    <section className="gray_section">

      <div className="container">

        <p className={style.text_justify}>Our engineering capability is built on sound design expertise, advanced engineering tools, and a strong commitment to internationally recognized codes and standards. We design and manufacture shell-and-tube heat exchangers and pressure vessels engineered for reliable performance, operational safety, long service life, and demanding process conditions across diverse industries. Our multidisciplinary engineering team handles the complete design and engineering cycle—from thermal design through mechanical design, material selection, fabrication engineering, welding, inspection, testing, and final documentation. For proprietary equipment such as LNG vaporizers, heaters, boilers, and other critical process equipment, the complete equipment design is also carried out in-house, based on specific client requirements, supported by our strong engineering capabilities. Every design is developed with careful consideration of process conditions, pressure and temperature requirements, material compatibility, corrosion allowance, mechanical integrity, fabrication requirements, and applicable client specifications.<br></br>
           Our engineering approach integrates thermal, mechanical, materials, welding, and inspection considerations to ensure that each heat exchanger and process equipment is designed for its intended operating environment. Through rigorous engineering practices, technical review, and quality control, we deliver equipment that combines design integrity, manufacturing precision, dependable operation, and long-term service performance.This standards-driven approach enables us to support critical applications across oil & gas, petrochemical, chemical, pharmaceutical, power, food processing, and other process industries, delivering engineered equipment that meets demanding technical and operational requirements in both domestic and international markets.</p>

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
                <h2 className='heading common_heading'>Thermal Design</h2>
                <p className={style.text_justify}>	At Precision, our engineering expertise begins with understanding each customer’s process and operating requirements. Our experienced engineers combine process knowledge, thermal and mechanical design expertise, and advanced engineering tools to develop optimized Any conventional TEMA-type shell-and-tube heat exchangers, High-pressure heat exchangers, Hairpin-type heat exchangers, and pressure vessels, we also expertise in manufacturing Helical baffle heat exchangers, ​Rod baffle heat exchangers.</p>
                <p className={style.text_justify}>	Each solution is custom-engineered for thermal performance, mechanical integrity, reliability, safety, and cost efficiency, in accordance with applicable international codes and project specifications. From concept and design through fabrication and delivery, we ensure every piece of equipment is engineered for dependable, long-term performance.</p>
            </div>
            <div className={style.image} data-aos="fade-left" data-aos-delay="0">
                <Image src="/assets/images/thermal-design-img-n.webp" width={687} height={462} alt='Thermal design engineering'/>
            </div>
        </div>
    </section>





      {/* Mechanical */}
    <section className={`${style.mechanicalSection} ${style.splitSection} gray_section`}>
          <div className={`container ${style.splitContainer}`}>

          <div className={style.image} data-aos="fade-right" data-aos-delay="0">
    <Image src="/assets/images/mech-img.webp" width={570} height={513} alt='Mechanical design engineering'/>
</div>

<div className={style.content}>
    <h2 className='heading common_heading' data-aos="fade-up" data-aos-delay="0">Mechanical</h2>
    <p className={style.text_justify} data-aos="fade-up" data-aos-delay="100">	With over 45 years of engineering experience, Precision has strong in-house capabilities in mechanical design and detailed fabrication engineering for shell-and-tube heat exchangers and pressure vessels. Our engineers use advanced design tools and in-house engineering solutions to address complex and specialized design requirements. Detailed fabrication drawings incorporate customer specifications, project requirements, applicable codes, and quality standards to ensure accurate and efficient shop-floor execution. Our design team works closely with engineering, procurement, production, quality, and inspection teams to effectively manage design changes, maintain complete information flow, and ensure seamless execution from design through fabrication and final delivery.</p>
    {/* <p data-aos="fade-up" data-aos-delay="200">The design department also works closely with all the other departments so that if there are any post-order changes, the same gets captured and communicated through the system without any loss of information.</p> */}
</div>



          </div>
    </section>




   {/* Applicable Codes */}
   <section className={`${style.softwareSection} ${style.splitSection}`}>
        <div className={`container ${style.splitContainer} ${style.flexColumn}`}>
            
            <div className={style.content}>
                <h2 className='heading common_heading' data-aos="fade-up">Applicable Codes & Standards</h2>
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="200">Depending on equipment type, design conditions, materials, service, and project requirements, our engineering activities can be carried out in accordance with applicable editions of:</p>
                <div data-aos="fade-up" data-aos-delay="200">
                  <ul className={style.customizeList}>
                    <li>ASME BPVC Section VIII, Division 1 & Division 2 - Design and construction of pressure vessels</li>
                    <li>ASME BPVC Section II - Materials</li>
                    <li>ASME BPVC Section V - Non-destructive Examination (NDE)</li>
                    <li>ASME BPVC Section IX - Welding and Brazing Qualifications</li>
                    <li>TEMA Standards - Design and construction of shell-and-tube heat exchangers</li>
                    <li>API 660 - Shell-and-Tube Heat Exchangers for General Refinery Services</li>
                    <li>API 661 - Air-Cooled Heat Exchangers, where applicable</li>
                    <li>API 510 - In-service inspection of pressure vessels, where applicable to the scope</li>
                    <li>ASTM Standards - Material specifications and testing requirements</li>
                    <li>AWS Standards - Welding and fabrication requirements, where applicable</li>
                    <li>EN 13445 - Unfired Pressure Vessels, for applicable European projects</li>
                    <li>PED 2014/68/EU - Pressure Equipment Directive, where applicable</li>
                    <li>ISO Standards - Applicable quality, manufacturing, inspection, and engineering requirements</li>
                    <li>NACE / AMPP Standards - Corrosion and sour-service requirements, where applicable</li>
                    <li>Applicable IS / BIS Standards - Indian codes and standards where specified</li>
                    <li>Client and Project Specifications - Customer-specific design, material, inspection, testing, and documentation requirements</li>
                  </ul>
                </div>
            </div>
            <div className={style.image} data-aos="fade-left" data-aos-delay="0">
                <Image src="/assets/images/applicable_code_img.jpg" width={504} height={337} alt='Applicable Code'/>
            </div>
        </div>
    </section>


    {/* Software */}
    <section className={`${style.softwareSection} ${style.splitSection} gray_section`}>
        <div className={`container ${style.splitContainer} ${style.flexColumn}`}>
            <div className={style.image} data-aos="fade-right" data-aos-delay="0">
                <Image src="/assets/images/software-img.webp" width={700} height={458} alt='Engineering design software'/>
            </div>
            <div className={style.content}>
                <h2 className='heading common_heading' data-aos="fade-up">Software</h2>
                {/* <p className={style.subHeading} data-aos="fade-up" data-aos-delay="100">At Precision, we use widely recognised software:</p> */}
                <p className={style.text_justify} data-aos="fade-up" data-aos-delay="200">At Precision, we use globally recognized engineering software to support the thermal, mechanical, and structural design of shell-and-tube heat exchangers and pressure vessels. Our digital engineering capabilities enable us to model, analyse, validate, and optimize equipment designs for performance, safety, and reliability. Our engineering toolkit includes HTRI, Aspen, PV Elite, ANSYS, and Autodesk, enabling accurate thermal calculations, Shell and tube heat exchanger & pressure-vessel design, process analysis, finite element analysis, and detailed 3D modelling and fabrication drawings. By integrating advanced software with our engineering expertise, we deliver optimized, code-compliant, and cost-effective equipment designed for reliable performance under demanding operating conditions.</p>
              {/* <div className={style.pointsCard} data-aos="fade-up" data-aos-delay="300">
                  <div className={style.card}>
                      <h3 className='heading'>Thermal Calculations</h3>
                      <ul>
                          <li>Xchanger Suite Package powered by HTRI</li>
                          <li>Aspen Shell & Tube Exchanger</li>
                      </ul>
                  </div>
                  <div className={style.card}>
                      <h3 className='heading'>CFD Analysis</h3>
                      <ul>
                          <li>ANSYS</li>
                      </ul>
                  </div>
              </div> */}
            </div>
        </div>
    </section>




      {/* Software Cards */}
    {/* <section className={`${style.softwareCardsSection} no_padding_tops`}>
          <div className={`container section_container ${style.softwareCardsContainer}`}>

  <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up" data-aos-delay="0">Software</h2>
        </div>

      <div className={style.softwareCards}>
  {softwareCardsData.map((card, index) => (
    <div className={style.card} key={index} data-aos="fade-up" data-aos-delay={index*200}>
      <h3 className="heading">{card.title}</h3>

      {card.list.map((item, idx) => (
        <div key={idx}>
          <div className={style.icon}>
            <Image
              src={item.image}
              width={80}
              height={37}
              alt={item.content}
            />
          </div>

          <p>{item.content}</p>
        </div>
      ))}
    </div>
  ))}
</div>


          </div>
    </section> */}


     {/* Materials Cards */}
    <section className={`${style.materialsCardsSection} no_padding_tops`}>
          <div className={`container section_container ${style.materialsCardsContainer}`}>

  <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading" data-aos="fade-up" data-aos-delay="0">Materials</h2>
        </div>

      <div className={style.materialsCards}>
  {materialData.map((card, index) => (
    <div className={style.card} key={index} data-aos="fade-up" data-aos-delay={index*200}>
      <h3 className="heading">{card.title}</h3>

<ul>
      {card.list.map((item, idx) => (
        <div key={idx}>

          <li>{item}</li>
        </div>
      ))}
      </ul>
    </div>
  ))}
</div>


          </div>
    </section>

    </>
  )
}
