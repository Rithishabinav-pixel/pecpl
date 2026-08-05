"use client"

import React, { useState } from 'react'
import style from './about.module.css'
import Image from 'next/image'
import LinkBtn from '../components/ui/LinkBtn'
import LeadershipPopup from '../components/LeadershipPopup'



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

// leadership data 

const leadershipData = [
    {
    image:"/assets/images/balasubramanian-img.jpg",
    name:"K. Balasubramanian",
    position:"Founder and Chairman",
    tag:"(Precision Group of Companies)",
    content:"With over four decades of experience in the engineering industry, Mr. K. Balasubramanian is a visionary institution builder. Under his strategic leadership, Precision Equipments has grown steadily, navigating challenges with sound financial judgment and decisive management. His legacy continues to shape the company’s enduring strength and resilience."
    },
     {
    image:"/assets/images/Easwaramurthy-img.jpg",
    name:"P.K. Easwaramurthy",
    position:"Chairman",
    tag:"(Precision Equipments)",
    content:"Mr. Easwaramurthy has been the driving force behind Precision Equipments since its inception. His resolute dedication and leadership have transformed the company from a modest beginning into a steady medium-scale enterprise. His continued mentorship inspires consistent growth and operational excellence."
    },
    {
    image:"/assets/images/Prabhu-img.jpg",
    name:"B. Prabhu",
    position:"Managing Director",
    tag:"(Precision Equipments)",
    content:"A Postgraduate Mechanical Engineer (specialisation in Heat & Mass Transfer) from RIT, New York, Mr. Prabhu leads the Business Development function at Precision Equipments. Before joining the company, he worked as a Design Engineer at MIT Micro Fuel Cell, New York, and has authored two research papers published in the ASME International Journal of Heat and Mass Transfer"
    },
    {
    image:"/assets/images/arun-img.jpg",
    name:"E. Arun Mugilan",
    position:"Director",
    tag:"(Precision Equipments)",
    content:"Mr. Arun holds an MSc in Entrepreneurship from NTU, Singapore, and a B.Tech in Production Engineering from NIT Trichy. He oversees Operations Management, focusing on continual improvements in welding technology and production efficiency, driving the company’s pursuit of operational innovation."
    },
]


// map data 
const mapData=[
  {
    "id": 1,
    "name": "Mr. Vijay Chakravarthy",
    "address": "99 Kingsview Rd., Williamsville, NY 14221, USA.",
    "phone": "+(716) 208-4420",
    "email": "vijayc@pecpl.com"
  },
  {
    "id": 2,
    "name": "Mr. Renato Delfina",
    "address": "Pizza D’Avra 7, 6968 Sonvico, Switzerland CH",
    "phone": "+39 3475025794",
    "email": "irukasa@gmail.com"
  },
  {
    "id": 3,
    "name": "Mousa A Bahman EST",
    "address": "Canada Dry Street, Near Hadidco, Shuwaikh, P.O. Box 24218, Safat 13103, Kuwait",
    "phone": "+965 24835468",
    "email": "sales@pecpl.com"
  },
  {
    "id": 4,
    "name": "Industrial Expertise",
    "address": "Al-Faiha Central Commercial Area Street 31, Building 13, Office #3, Al-Jubail Industrial City, Saudi Arabia",
    "phone": "+966 5337 79087",
    "email": "alhazemi@industrialexp.com"
  },
  {
    "id": 5,
    "name": "Alwazan Trading",
    "address": "P.O. Box: 3994, Corniche Road, Abu Dhabi, United Arab Emirates",
    "phone": "+971-2-6223200/400, +971-50-4456986",
    "email": "sales@pecpl.com"
  },
  {
    "id": 6,
    "name": "Pesrovision International LLC",
    "address": "P.O. Box: 391, Postal Code: 320, Barka, Sultanate of Oman.",
    "phone": "+968 24482137",
    "email": "sales@pecpl.com"
  },
  {
    "id": 7,
    "name": "Registered Office",
    "address": "B-70/1, SIPCOT Industrial Park, Thandalam, Irungattukottai, Chennai-602105, India.",
    "phone": "+91 9884850117",
    "email": "mktg@pecpl.com"
  },
  {
    "id": 8,
    "name": "Plasma Pacific Sdn Bhd",
    "address": "No. 19, Jalan SBC 6, Taman Sri Batu Caves, 68100 Batu Caves, Selangor, Malaysia",
    "phone": "+60 176112556",
    "email": "sales@pecpl.com"
  }
]

// certification content 

const certificationData = [
  {
    title:"ISO 9001:2015",
    pdf:"/assets/pdf/cert1.pdf",
    icon:"/assets/images/cert1.svg",
    content:"ISO 9001:2015 is the global standard for quality management systems (QMS). It sets out criteria for ensuring organizations meet customer expectations, maintain consistent product quality, and drive continual improvement."
  },
    {
    title:"ISO 45001:2018",
     pdf:"/assets/pdf/cert2.pdf",
    icon:"/assets/images/cert2.svg",
    content:"ISO 45001:2018 is the standard for occupational health and safety management systems (OHSMS). It focuses on improving employee safety, reducing workplace risks, and creating safer working environments."
  },
    {
    title:"ISO 14001:2015",
     pdf:"/assets/pdf/cert3.pdf",
    icon:"",
    content:"ISO 14001:2015 is an international standard for environmental management systems (EMS). It helps organizations manage their environmental responsibilities in a systematic way, reduce environmental impact, and ensure compliance with regulations."
  },
    {
    title:"ASME - U | U2 | NB",
     pdf:"/assets/pdf/cert4.pdf",
    icon:"/assets/images/cert4.svg",
    content:"Governs the design, construction, and operation of boilers in India, ensuring they meet safety standards to prevent accidents and failures. It mandates inspections, certifications, and adherence to strict guidelines for safe boiler operation."
  },
  {
    title:"S STAMP",
     pdf:"/assets/pdf/cert4.pdf",
    icon:"/assets/images/cert5.png",
    content:"The named company is authorized by The American Society of Mechanical Engineers (ASME) for the scope of activity shown below in accordance with the applicable rules of the ASME Boiler and Pressure Vessel"
  },
  {
    title:"Indian Boiler Regulations (IBR) Act",
     pdf:"/assets/pdf/cert6.pdf",
    icon:"",
    content:"Governs the design, construction, and operation of boilers in India, ensuring they meet safety standards to prevent accidents and failures. It mandates inspections, certifications, and adherence to strict guidelines for safe boiler operation."
  },
  {
    title:"RECOGNITION FOR BV MODE II SCHEME",
     pdf:"/assets/pdf/cert7.pdf",
    icon:"",
    content:"Regulates the manufacture, storage, and handling of explosives within India. It enforces safety measures to prevent mishaps and accidents associated with explosive materials, ensuring that only licensed entities are involved in their production and handling."
  },
  {
    title:"DIN EN ISO 3834 - 2",
     pdf:"/assets/pdf/cert8.pdf",
    icon:"",
    content:"The company applies a quality assurance system and has appropriately suitable operational equipment, qualified personnel and joining procedures. The scope of the certification and the details of the assessment can be found in the scope of the certificate and in the report."
  },
]

// enlishment data 
const enlishmentData = [
  "Engineers India Ltd",
  "British Petroleum",
  "Kuwait National Petroleum",
  "Haldor Topsoe",
  "Urea Casale",
  "SABIC",
  "ADNOC",
  "ExxonMobil",
  "Hindustam Petroleum",
  "Bharat Petroleum",
  "Indian Oil Corporation",
  "PDO",
  "JSRS",
  "QAPCO"
];

// membership logos data 

const membershipLogos=[
    "/assets/images/htri-logo.png",
    "/assets/images/ahk-logo.png",
    "/assets/images/mcci-logo.png",
    "/assets/images/ppmai-logo.png",
    "/assets/images/iacc-logo.png",
    "/assets/images/eepcindia-logo.png",
    "/assets/images/iimm-logo.png",
    "/assets/images/cii-logo.png",
]

export default function page() {

    const [leaderPopup,setLeaderPopup] = useState(false);
    const [leaderData,setLeaderData] = useState();

    const OpenLeadershipPopup = (data) =>{
setLeaderData(data);
setLeaderPopup(true)
    }

  return (
    
    <>

    {/* hero section  */}

    <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
            <div className={style.content}>
            <h1 className='heading'>More than a name, Precision is How We Think, Build, and Engineer Possibilities</h1>
<p>Built on decades of dedication, Precision Equipments blends innovation with purpose, engineering high-performance solutions that power industries worldwide. With every project, we move closer to being a trusted global force in process technology.</p>
        </div>
        </div>
    </section>

    {/* about section  */}
    <section className={style.aboutSection}>
        <div className={`container ${style.aboutContainer}`}>
            <div className={style.image}>
                <Image src="/assets/images/heater-img.webp" width={750} height={700} alt=''/>
            </div>
            <div className={style.content}>
                <h2 className='heading common_heading'>Pioneers in Heat Exchanger Manufacturing Since 1981</h2>
                <p>Precision Equipments has been a leading manufacturer and supplier of Shell and Tube Heat Exchangers and process equipment since 1981, serving key sectors such as Oil & Gas, Petrochemicals, Fertilizers, Power Plants, LNG and Nuclear Energy. With a strong workforce of over 500 employees, the company has successfully delivered more than 5,500 + process equipment units to both Indian and international markets. Our manufacturing facility, strategically located just 45 km from the shipping port, is capable of handling equipment up to 300 MT, ensuring smooth logistics and timely delivery. We strictly adhere to international standards such as ASME, TEMA, EN, PED and API, and our experienced engineering team works closely with EPC contractors to meet stringent technical and project requirements while maintaining high quality and cost efficiency through effective manufacturing practices and strong project management.</p>
                <p>We have extensive experience in supplying critical and proprietary equipment across various industries, particularly in special materials of construction such as Titanium, Alloy 825, Austenitic stainless steel , and other non-ferrous materials. Our decades of industry experience, technical expertise, and commitment to excellence have positioned us as a trusted and innovative manufacturer, contributing significantly to the advancement of heat exchanger technology in the process industry.</p>
            </div>
        </div>
    </section>

    {/* mission vision section  */}
    <section className={`${style.misvisSection} no_padding_top`}>
        <div className={`container ${style.misvisContainer}`}>
<div className={`${style.card} curve_lines_bg dark_section`}>
    <h3 className='heading'>Vision</h3>
    <p>To be a globally respected high-performance organisation providing technology products for the process industry.</p>
</div>
<div className={`${style.card} curve_lines_bg dark_section`}>
    <h3 className='heading'>Mission</h3>
    <p>To be innovative and advanced in the engineering and manufacture of critical process equipment.</p>
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
        <Image className={style.icon} src="/assets/images/why_choose_icon.svg" width={40} height={40} alt=""/>
        <h3 className="heading">{item.title}</h3>
        <p>{item.content}</p>
        </div>
      ))}      
     </div>


      </div>

    </section>


    {/* leadership section  */}
<section className={`${style.leadershipSection}`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Leadership</h2>
        </div>

     <div className={style.leadershipCards}>
      {leadershipData && leadershipData.map((item,index)=>(
        <div className={style.card} key={index}>
        <Image className={style.leadershipImage} src={item.image} width={330} height={322} alt={item.name}/>
        <h3 className="heading">{item.name}</h3>
        <div>
            <p>{item.position}</p>
            <span>{item.tag}</span>
        </div>
        <button onClick={()=>OpenLeadershipPopup(item)} className="lightblue_btn link_btn">View Profile
            <Image className="arrow" src="/assets/images/link-arrow-lightblue.svg" width={24} height={24} alt=""/>
        </button>
        </div>
      ))}      
     </div>


      </div>

    </section>



      {/* map section  */}
<section className={`${style.mapSection} dark_section`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Engineering Excellence with a Worldwide Footprint</h2>
          <p>With a growing presence across India, Malaysia, the USA, Saudi Arabia, Oman, Qatar, Kuwait, and the UAE, we bring world-class engineering solutions closer to clients. Our global footprint reflects our commitment to timely delivery, reliable partnerships, and building trust beyond borders. Each location is a testament to our precision-driven growth and client-first approach.</p>
        </div>

    <div className={style.mapArea}>
<Image className={style.mapImg} src="/assets/images/map.svg" width={1170} height={640} alt='' />
{mapData.map((item,index)=>(
    <div className={`${style.pin} ${style[`index${index}`]}`} key={index}>
        <button> <Image src="/assets/images/map-pin.svg" width={19} height={26} alt=''/> </button>
        <div className={style.content}>
            <div>
                <span className={style.icon}><Image src="/assets/images/pin-icon.svg" width={20} height={20} alt=''/></span>
                <p><strong>{item.name}</strong><br/>{item.address}</p>
                </div>
                <div>
                <span className={style.icon}><Image src="/assets/images/call-icon.svg" width={20} height={20} alt=''/></span>
<p>{item.phone}</p>
                </div>
                 <div>
                <span className={style.icon}><Image src="/assets/images/mail-icon.svg" width={20} height={20} alt=''/></span>
<p>{item.email}</p>
                </div>
        </div>
    </div>
))}
    </div>


      </div>

    </section>



    {/* Certificates section  */}
 <section className={`${style.whyChooseSection} ${style.certificatesSection}`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Accreditations & Certificates</h2>
          <p>Every certificate is a mark of our dedicated commitment to brilliance. With globally recognised accreditations including ASME U & U2 Stamps, ISO standards, and PED approval, we meet the most stringent industry requirements, ensuring trust, safety, and performance in every product we deliver. These certifications reinforce our dedication to quality, compliance, and continuous improvement.</p>
        </div>

     <div className={style.whyChooseCards}>
      {certificationData && certificationData.map((item,index)=>(
        <div className={style.card} key={index}>
            {item.icon?
            <Image className={style.icon} src={item.icon} width={70} height={71} alt=""/>
            :
            <Image className={style.icon} src="/assets/images/why_choose_icon.svg" width={70} height={71} alt=""/>
            }
        
        <h3 className="heading">{item.title}</h3>
        <p>{item.content}</p>
        <LinkBtn href={item.pdf} downloadable classname="download_btn" text="Download" />
        </div>
      ))}      
     </div>


      </div>

    </section>

    {/* Enlistments section  */}
<section className={`${style.enlistmentsSection} no_padding_top`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Enlistments</h2>
          <p>Over the years, Precision Equipments has earned approvals and enlistments from top global consultants, EPCs, and end users. These recognitions validate our technical expertise, manufacturing capabilities, and commitment to delivering performance-driven process equipment that meets international expectations. They reflect the trust built through decades of reliable partnerships.</p>
        </div>

<div className={style.enlistmentsPoints}>
    <ul>
       {enlishmentData.map((item,index)=>(
        <li key={index}>{item}</li>
       ))}
    </ul>
</div>

      </div>

    </section>


     {/* Memberships section  */}
<section className={`${style.membershipSection} gray_section`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Memberships</h2>
          <p>Precision is an active member of reputed industry bodies and technical associations that promote innovation, standardisation, and global collaboration. These memberships reflect our commitment to staying informed, connected, and ahead in delivering exceptional process equipment solutions.</p>
        </div>

<div className={style.membershipLogos}>
    
       {membershipLogos.map((item,index)=>(
        <div className={style.logo} key={index}>
            <Image src={item} height={250} width={100} alt=''/>
        </div>
       ))}
   
</div>

      </div>

    </section>

    {leaderPopup && 

    <LeadershipPopup data={leaderData} setLeaderPopup={setLeaderPopup} />
    }

    </>
  )
}
