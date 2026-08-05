import React from 'react'
import style from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

// footer certification data 

const certification = [
"/assets/images/foot-c1.svg",
"/assets/images/foot-c2.svg",
"/assets/images/foot-c3.svg",
"/assets/images/foot-c4.svg",
"/assets/images/foot-c5.svg",
"/assets/images/foot-c6.svg",
"/assets/images/foot-c7.png",
"/assets/images/foot-c8.png",
"/assets/images/foot-c9.png",
"/assets/images/foot-c10.png",
"/assets/images/foot-c11.png",
"/assets/images/foot-c12.png",
]

const year = new Date().getFullYear();


export default function Footer() {
  return (
    <footer id={`${style.footer}`} className='dark_section'>
        <div className='container'>


        <div className={style.footerCertification}>
            {certification && certification.map((item,index)=>(
 <div key={index}>
<Image src={item} width={86} height={77} alt=''/>
            </div>
            ))}
        </div>


        <div className={style.allMenu}>

            <div className={style.siteDetails}>
                <Image className={style.siteLogo} src="/assets/images/footer-logo.png" width={400} height={105} alt=''/>
                <ul className={style.socialLinks}>
                    <li> <a href="#"> <Image src="/assets/images/fb-icon.svg" width={24} height={24} alt=''/> </a> </li>
                    <li> <a href="#"> <Image src="/assets/images/linkedin.svg" width={24} height={24} alt=''/> </a> </li>
                </ul>
                <ul className={style.contactDetails}>
                    <li> <a href="tel:+91444710 0603"> <Image src="/assets/images/call.svg" width={24} height={24} alt=''/>+91 44 - 4710 0603 </a>  </li>
                    <li> <a href="mailto:sales@pecpl.com"> <Image src="/assets/images/sms.svg" width={24} height={24} alt=''/>sales@pecpl.com</a>  </li>
                    <li> <a href="javascript:void(0)"> <Image src="/assets/images/location.svg" width={24} height={24} alt=''/>Unit-1: B-70/1,<br/>
SIPCOT Industrial Park,<br/>
Thandalam, Irungattukottai,<br/>
Chennai-602 105, India.</a>  </li>
                    <li> <a href="javascript:void(0)"> <Image src="/assets/images/location.svg" width={24} height={24} alt=''/>Unit-2: No.126, S.No.1364/2A,<br/>
Perambakkam Main Road,<br/>
Usain Nagar, Mappedu,<br/>
Tiruvallur- 631 402, Tamilnadu, India.</a>  </li>

                </ul>
            </div>


            <div className={style.menuColumn}>
                <h3>Quick links</h3>
                <ul>
  <li><Link href="/">Home</Link></li>
  <li><Link href="/about-us">About PECPL</Link></li>
  {/* TODO: missing route - no "Clients" page/section exists in the project yet */}
  <li><Link href="#">Clients</Link></li>
  <li><Link href="/knowledge-centre">Knowledge Centre</Link></li>
  {/* TODO: missing route - no "Career" page exists in the project yet */}
  <li><Link href="#">Career</Link></li>
  <li><Link href="/contact-us">Contact Us</Link></li>
  {/* TODO: missing route - no "Capability" page/section exists in the project yet */}
  <li><Link href="#">Capability</Link></li>
  {/* TODO: missing route - no "Engineering" page/section exists in the project yet */}
  <li><Link href="#">Engineering</Link></li>
  {/* TODO: missing route - no "Manufacturing" page/section exists in the project yet */}
  <li><Link href="#">Manufacturing</Link></li>
  {/* TODO: missing route - no "Logistics" page/section exists in the project yet */}
  <li><Link href="#">Logistics</Link></li>
</ul>
            </div>

            <div className={style.menuColumn}>
                <h3>Products</h3>
                <ul>
  <li><Link href="/products/shell-and-tube-heat-exchangers">Shell and Tube Heat Exchangers</Link></li>
  <li><Link href="/products/shell-and-tube-heat-exchangers#rod">Rod Baffle Exchangers</Link></li>
  <li><Link href="/products/shell-and-tube-heat-exchangers#helixchanger">Helical Baffle Heat Exchangers</Link></li>
  <li><Link href="/products/double-pipe-heat-exchangers">Double Pipe Heat Exchangers</Link></li>
  <li><Link href="/products/hairpin-heat-exchangers">Hairpin Heat Exchangers</Link></li>
  <li><Link href="/products/pressure-vessels">Pressure Vessels</Link></li>
  <li><Link href="/products/columns-reactors">Columns &amp; Reactors</Link></li>
  <li><Link href="/products/process-skid">Process Skid</Link></li>
  <li><Link href="/products/plate-and-shell-heat-exchangers">Plate and Shell Heat Exchangers</Link></li>
  <li><Link href="/products/shell-and-tube-heat-exchangers#cryogenic">Cryogenic Heat Exchangers</Link></li>
  <li><Link href="/products/plate-frame-heat-exchanger">Plate &amp; Frame Heat Exchanger</Link></li>
</ul>
            </div>

            <div className={style.menuColumn}>
                <h3>Industries</h3>
               <ul>
  <li><Link href="/industries#oil-and-gas">Oil and Gas</Link></li>
  <li><Link href="/industries#petrochemicals">Petrochemicals</Link></li>
  <li><Link href="/industries#fertilizers">Fertilizers</Link></li>
  <li><Link href="/industries#chemicals">Chemical</Link></li>
  <li><Link href="/industries#liquefied-natural-gas">LNG</Link></li>
  <li><Link href="/industries#floating-storage-and-regasification-units">FSRU</Link></li>
  <li><Link href="/industries#floating-production-storage-offloading">FPSO</Link></li>
  <li><Link href="/industries#renewable-energy">Renewable Energy</Link></li>
  <li><Link href="/industries#data-centre-cooling">Data Centre Cooling</Link></li>
</ul>
            </div>


             <div className={style.newsLetterColumn}>
                <h3>Subscribe to our newsletter</h3>
               <p>Get the latest insights, news, and exclusive updates delivered straight to your inbox.</p>
               <form>
                <input type='email' placeholder='Enter your email address'></input>
                <button className='common_btn white' type='submit'>Submit</button>
               </form>
            </div>

        </div>


        </div>

<div className={style.copyrights}>
    <div className='container'>
        Copyrights © {year} Precision Equipments (Chennai) Pvt Ltd. All Rights Reserved. Powered by <a href='#' target='_blank'>Pixel Studios.</a>
    </div>
</div>

    </footer>
  )
}
