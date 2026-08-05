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
  <li><Link href="#">Home</Link></li>
  <li><Link href="#">About PECPL</Link></li>
  <li><Link href="#">Clients</Link></li>
  <li><Link href="#">Knowledge Centre</Link></li>
  <li><Link href="#">Career</Link></li>
  <li><Link href="#">Contact Us</Link></li>
  <li><Link href="#">Capability</Link></li>
  <li><Link href="#">Engineering</Link></li>
  <li><Link href="#">Manufacturing</Link></li>
  <li><Link href="#">Logistics</Link></li>
</ul>
            </div>

            <div className={style.menuColumn}>
                <h3>Products</h3>
                <ul>
  <li><Link href="#">Shell and Tube Heat Exchangers</Link></li>
  <li><Link href="#">Rod Baffle Exchangers</Link></li>
  <li><Link href="#">Helical Baffle Heat Exchangers</Link></li>
  <li><Link href="#">Double Pipe Heat Exchangers</Link></li>
  <li><Link href="#">Hairpin Heat Exchangers</Link></li>
  <li><Link href="#">Pressure Vessels</Link></li>
  <li><Link href="#">Columns &amp; Reactors</Link></li>
  <li><Link href="#">Process Skid</Link></li>
  <li><Link href="#">Plate and Shell Heat Exchangers</Link></li>
  <li><Link href="#">Cryogenic Heat Exchangers</Link></li>
  <li><Link href="#">Plate &amp; Frame Heat Exchanger</Link></li>
</ul>
            </div>

            <div className={style.menuColumn}>
                <h3>Industries</h3>
               <ul>
  <li><Link href="#">Oil and Gas</Link></li>
  <li><Link href="#">Petrochemicals</Link></li>
  <li><Link href="#">Fertilizers</Link></li>
  <li><Link href="#">Chemical</Link></li>
  <li><Link href="#">LNG</Link></li>
  <li><Link href="#">FSRU</Link></li>
  <li><Link href="#">FPSO</Link></li>
  <li><Link href="#">Renewable Energy</Link></li>
  <li><Link href="#">Data Centre Cooling</Link></li>
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
