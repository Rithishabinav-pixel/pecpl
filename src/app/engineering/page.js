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
            <p>Capability is not just what we do. It’s how we think. With in-depth design expertise, advanced engineering tools, and strict adherence to global standards, we build process equipment that performs, lasts, and leads across industries.</p>
        </div>
        </div>
    </section>


    {/* Thermal Design */}
    <section className={`${style.thermalSection}`}>

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

    </section>


    {/* Software */}
    <section className={`${style.softwareSection} ${style.splitSection} gray_section`}>
          <div className={`container ${style.splitContainer}`}>

<div className={style.content}>
    <h2 className='heading common_heading' data-aos="fade-up">Software</h2>
    <p className={style.subHeading} data-aos="fade-up" data-aos-delay="100">At Precision, we use widely recognised software:</p>
    <p data-aos="fade-up" data-aos-delay="200">We use globally recognised and industry-standard software to ensure precision in every stage of thermal and mechanical design. These tools help us simulate, analyse, and optimise equipment performance, allowing for efficient, reliable, and cost-effective engineering solutions customised to process requirements. This digital integration ensures consistency, accuracy, and agility across every phase of our design workflow.</p>
<div className={style.pointsCard} data-aos="fade-up" data-aos-delay="300">
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
</div>
</div>

<div className={style.image} data-aos="fade-left" data-aos-delay="0">
    <Image src="/assets/images/software-img.webp" width={700} height={458} alt='Engineering design software'/>
</div>

          </div>
    </section>



      {/* Mechanical */}
    <section className={`${style.mechanicalSection} ${style.splitSection} `}>
          <div className={`container ${style.splitContainer}`}>

<div className={style.content}>
    <h2 className='heading common_heading' data-aos="fade-up" data-aos-delay="0">Mechanical</h2>
    <p data-aos="fade-up" data-aos-delay="100">We have in-house capability for mechanical design & preparation of detailed fabrication drawings. Over a period of 40 years, the company has also developed many in-house tools for designing certain aspects which are not covered in commercially available software. The output is a clear and detailed fabrication drawing which captures all the customer’s requirements, including their specific quality requirements.</p>
    <p data-aos="fade-up" data-aos-delay="200">The design department also works closely with all the other departments so that if there are any post-order changes, the same gets captured and communicated through the system without any loss of information.</p>
</div>

<div className={style.image} data-aos="fade-left" data-aos-delay="0">
    <Image src="/assets/images/mech-img.webp" width={570} height={513} alt='Mechanical design engineering'/>
</div>

          </div>
    </section>

      {/* Software Cards */}
    <section className={`${style.softwareCardsSection} no_padding_top`}>
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
    </section>


     {/* Materials Cards */}
    <section className={`${style.materialsCardsSection} no_padding_top`}>
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
