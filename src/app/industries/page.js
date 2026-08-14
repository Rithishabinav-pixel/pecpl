import React from 'react'
import style from './industries.module.css'
import industriesData from '@/app/data/industries';
import Image from 'next/image';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "Engineering Solutions for Oil, Gas, LNG Vaporizer & Energy",
  description:
    "Delivering specialized process equipment for Oil & Gas, LNG Vaporizer, Fertilizers, Petrochemicals, FPSO, FSRU & Renewable Energy with reliability & precision.",
  path: "/industries",
  keywords: [
    "oil and gas equipment",
    "LNG heat exchangers",
    "petrochemical industry equipment",
    "renewable energy heat exchangers",
    "FPSO FSRU equipment",
  ],
});

export default function page() {

  const pageData = industriesData[0];

  return (
    <>

    {/* hero section  */}
    <section className={style.hero_section} style={{backgroundImage:`url(${pageData.heroImage})`}}>
        <div className={`container ${style.heroContainer}`}>
            <h1 className="common_heading heading">
                {pageData.pageTitle}
                </h1>
                 {pageData.overview.map((item,index)=>(
                <p key={index}>{item}</p>
            ))}
        </div>
    </section>



    {/* industries section  */}
   {pageData.industries?.map((industry, index) => (
  <section
    id={industry.slug}
    className={`${style.products_section} ${index % 2 !== 0 ? style.reverse : ""}`}
    key={industry.slug}
  >
    <div className={`container ${style.container}`}>

      {/* Image  */}

      <div className={style.image} data-aos={index % 2 !== 0 ?"fade-left":"fade-right"}>
        <Image src={industry.image} width={690} height={600} alt={industry.title}/>
      </div>

      {/* Content */}
      <div className={`${style.content}`} data-aos={index % 2 !== 0 ?"fade-right":"fade-left"}>
        {industry.title && (
          <h2 className="common_heading heading">
            {industry.title}
          </h2>
        )}

        {industry.subTitle && (
          <h3 className="common_heading heading">
            {industry.subTitle}
          </h3>
        )}

        {industry.content?.length > 0 &&
          industry.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}  

      </div>

        {industry.additionalText?.length > 0 && (
  <div className={style.additionalText}>
    {industry.additionalText.map((text, i) => (
      <p key={`additional-${i}`}>{text}</p>
    ))}
   
  </div>
)}


    </div>
  </section>
))}


    </>
  )
}
