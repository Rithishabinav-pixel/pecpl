import React from 'react'
import style from "./mainProduct.module.css"
import Image from 'next/image';
import LinkBtn from '../components/ui/LinkBtn';


const productData = [
  {
    "heroImage": "/assets/images/products/product-bnr-new.webp",
    "title": "Products",
    "overview": [
      "Evolving the Future with Heat Transfer Technology with Precision Heat Exchangers. Our mission is to provide advanced solutions in heat transfer technology through high-performance heat transfer equipment and continuous innovation in thermal energy systems. We focus on accelerating energy exchange at every atom and molecule across industries.",
      "Energy is predictable with Precision Equipments. With strong engineering capability, effective performance, and reliable supply, we have established our footprints across all major sectors undergoing industrial and energy transition."
    ],
    "products": [
      {
        "name": "Shell and Tube Heat Exchangers",
        "content": "Our Shell & Tube Heat Exchangers are widely used in refineries, petrochemical plants, fertilizer units, chemical plants, and a broad range of process industries worldwide. Designed for parallel flow, counterflow, and crossflow arrangements, these exchangers are engineered to perform reliably under critical operating conditions.",
        "image": "/assets/images/products/shell-tube-heat-exchange-img.webp",
        "slug": "/products/shell-and-tube-heat-exchangers"
      },
      {
        "name": "Plate and Shell Heat Exchangers",
        "content": "Our Plate & Shell Heat Exchangers are designed for critical process applications requiring high thermal efficiency under extreme operating conditions. Engineered to withstand high pressures and temperatures",
        "image": "/assets/images/products/plate-shell-img.webp",
        "slug": "/products/plate-and-shell-heat-exchangers"
      },
      {
        "name": "Plate & Frame Heat Exchanger",
        "content": "The system consists of a series of precision-pressed corrugated plates arranged in a frame, creating highly turbulent flow paths that maximize heat transfer while minimizing fouling.",
        "image": "/assets/images/products/plate-frame-heat-exchanger.webp",
        "slug": "/products/plate-frame-heat-exchanger"
      },
      {
        "name": "Air Fin Cooler / Air Cooled Heat Exchangers",
        "content": "Our Air Fin Coolers / Air Cooled Heat Exchangers are available in both standard and customized configurations to suit a wide range of industrial applications.",
        "image": "/assets/images/products/air-fin-cooler-img.webp",
        "slug": "/products/air-fin-cooler-air-cooled-heat-exchangers"
      },
      {
        "name": "Hairpin Heat Exchangers",
        "content": "Hairpin Heat Exchangers are engineered for high efficiency and compact design, featuring U-shaped tubes enclosed within a shell.",
        "image": "/assets/images/products/Hair-Pin-Exchangers-img.webp",
        "slug": "/products/hairpin-heat-exchangers"
      },
      {
        "name": "Double Pipe Heat Exchangers",
        "content": "Precision-engineered for flexibility and ease of maintenance, our Double Pipe Heat Exchangers are ideally suited for small-capacity duties and applications involving high temperature differentials.",
        "image": "/assets/images/products/double-pipe-img.webp",
        "slug": "/products/double-pipe-heat-exchangers"
      },
      {
        "name": "Pressure Vessels",
        "content": "At Precision Equipments, we design and manufacture pressure vessels in compliance with stringent international safety and design codes. Our vessels are engineered to safely withstand internal and external pressures and are typically constructed in cylindrical or spherical configurations to ensure structural integrity under demanding operating conditions.",
        "image": "/assets/images/products/pressure-vessels-img-nw.webp",
        "slug": "/products/pressure-vessels"
      },
      {
        "name": "Columns & Reactors",
        "content": "Our precision-manufactured Columns and Reactors are engineered to handle complex chemical processes with high accuracy, reliability, and long-term endurance. Designed by our experienced technical team, these equipment facilitate critical process conversions involving different process media and operating conditions.",
        "image": "/assets/images/products/Oxidation-Reactor-img.webp",
        "slug": "/products/columns-reactors"
      },
      {
        "name": "Process Skid",
        "content": "Our fully integrated process skids are compact, modular systems engineered for plug-and-play functionality. Built on a robust steel skid base, each unit supports all integrated equipment, including pumps, compressors, vessels, heat exchangers, filters, and interconnecting piping.",
        "image": "/assets/images/products/process-skid-img.webp",
        "slug": "/products/process-skid"
      }
    ]
  }
];

export default function page() {

const data = productData?.[0]

  return (
   <>
   
   {/* hero section  */}

    <section className={style.hero_section} style={{backgroundImage:`url(${data.heroImage})`}}>
        <div className={`container ${style.heroContainer}`}>
            <h1 className="common_heading heading">{data.title}</h1>
           {data.overview.map((item,index)=>(
            <p key={index}>{item}</p>
           ))}
        </div>
    </section>


    {/* all products grid  */}
    <section className={style.products_section}>
      <div className={`container ${style.productsContainer}`}>

{data.products && data.products.map((item,index)=>(
  <div className={style.card} key={index}>
    <div className={style.productImage}>
    <Image  src={item.image} width={1000} height={600} alt={item.name} />
    </div>
    <h3 className='heading'>{item.name}</h3>
    <p>{item.content}</p>
    <LinkBtn href={item.slug} classname="blue_btn" text="Read More" />
  </div>
))}

      </div>

    </section>

   </>
  )
}
