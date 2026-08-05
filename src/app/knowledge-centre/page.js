"use client"

import React, { useState } from 'react'
import style from "./knowledge.module.css"
import newsLetterData from '../data/newsletter'
import Image from 'next/image'

// faq data 
const faqs = [
  {
    id: "item-1",
    question: "What is PCC 1 and is it mandatory?",
    answer: `ASME PCC-1 has guidelines for pressure boundary bolted flange joints which cover the assembly elements that are essential in ensuring a high level of leak-tightness integrity of properly designed and constructed bolted flange joint assemblies (BFJAs).

Specifically, this standard defines BFJAs as those applied to pressure-boundary flange joints with ring-type gaskets that are entirely within the circle enclosed by the bolt holes and have no contact outside this circle.

ASME PCC-1 is not mandatory as per ASME Sec. VIII Div.1 code and is generally considered an additional project-specific requirement insisted by the client.`,
  },
  {
    id: "item-2",
    question:
      "What are the maximum temperature limits for Super Duplex Stainless Steel (SDSS), Stainless Steel (SS), Carbon Steel (CS), Titanium, and Inconel?",
    answer: `The maximum temperature limits for the materials are as follows:

• Super Duplex Stainless Steel (SDSS): 300–350°C (572–662°F)

• Stainless Steel (SS): 800–900°C (1472–1652°F)

• Carbon Steel (CS): 400–600°C (752–1112°F)

• Titanium: 600°C (1112°F)

• Inconel: 1000°C (1832°F)

These limits vary depending on the specific alloy and operating conditions.`,
  },
];

export default function page() {

    const [accActive,setAccActive] = useState(0);

  return (
   <>
   
     {/* hero section  */}
    <section className={style.hero_section}>
        <div className={`container ${style.heroContainer}`}>
            <h1 className="common_heading heading">Knowledge Centre</h1>
                
                <p>Our knowledge centre is your go-to source for engineering knowledge. Dive into expert articles, project highlights, and industry trends that reflect our commitment to continuous learning and innovation in process equipment.</p>
        </div>
    </section>
   

   {/* newsletter section  */}
   <section className={style.newsLetterSection}>
    <div className={`container ${style.heroContainer} section_container`}>
          <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Newsletter</h2>
        </div>

<div className={style.newscards}>
    {newsLetterData.length>0 && newsLetterData.map((item,index)=>(

<div className={style.card} key={index}>
    <div className={style.image}>
        <Image className={style.featureImage} src={item.image} width={271} height={301} alt=''/>
        <date className={style.date}>{item.date}</date>
        <a target='_blank' className={style.downloadPdf} href={item.pdf}> <Image  src="/assets/images/download_icon.svg" width={24} height={24} alt=''/> </a>
    </div>
    <div className={style.content}>
        <h3 className='heading'>{item.title}</h3>
        <audio controls>
  <source src={item.audio} />
  Your browser does not support the audio element.
</audio>
    </div>
</div>

    ))}
</div>

    </div>
   </section>

   {/* faq section  */}

   <section className={`${style.whyChooseSection} gray_section`}>

      <div className="container section_container">

        <div className={`top_content center ${style.top_content}`}>
          <h2 className="common_heading heading">Frequently Asked Questions</h2>
          <p>Find answers to commonly asked questions about our products, processes, capabilities, and services. Whether you’re a customer or collaborator, our FAQs aim to provide clarity and assist your decision-making.</p>
        </div>

<div className={style.accordionContainer}>
  {faqs.map((item,index) => (
    <div className={style.accordionTab} key={item.id}>
      <div className={style.accordionHeader} onClick={()=>setAccActive(index)} >
        <h3 className='heading'>{item.question}</h3>
      </div>

      <div className={`${style.accordionBody} ${accActive===index?style.active:""}`}>
        <div>
        {item.answer.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        </div>
      </div>
    </div>
  ))}
</div>



      </div>

    </section>




   </>
  )
}
