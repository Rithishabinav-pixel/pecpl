"use client"
import React, { useState } from "react";
import style from "./clients.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Clients from "../data/clients";
import { labelFromImagePath } from "@/lib/imageLabel";




export default function Page() {

  const endUserClients = Clients['end-user-clients'];
  const epcClients = Clients['epc-clients'];


  const [activeClients,setActiveClients] = useState(endUserClients);

  return (
    <>
      {/* Hero Section */}
      <section className={style.hero_section}>
        <div className={`container ${style.heroContainer}`}>
          <h1 className="common_heading heading">Clients</h1>
          <p>Our reputation for engineering excellence has been built through long-standing partnerships with leading industry pioneers across the globe. Precision Equipments specializes in designing and manufacturing bespoke heat exchangers and pressure equipment that support critical industrial operations.​</p>
          <p>Our solutions are engineered to deliver high-performance heat transfer, reliability, durability, and operational efficiency, even in the most demanding environments. With decades of industry experience and a proven track record in delivering complex equipment, we have earned the trust and confidence of our customers worldwide.​</p>
        </div>
      </section>


      {/* clients section  */}
   <section className={style.client_section}>
        <div className={`container section_container ${style.clientContainer}`}>

           <div className={`top_content center ${style.top_content}`}>
          <button className={activeClients===endUserClients?style.active:""} onClick={()=>setActiveClients(endUserClients)}>End User Clients</button>
          <hr/>
          <button className={activeClients===epcClients?style.active:""} onClick={()=>setActiveClients(epcClients)}>EPC Clients</button>
        </div>

        <div className={style.clients}>

          {activeClients && activeClients.map((item,index)=>(
            <div className={style.logo} key={index} data-aos="zoom-in" data-aos-delay={index*20} >
              <Image src={item} alt={labelFromImagePath(item, "Client logo")} width={150}  height={82} />
               </div>
          ))}

        </div>

        </div>
      </section>


    </>
  );
}