"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../ui/button'
import RequestQuote from '../request-quote/RequestQuote'

export default function Header() {

  const [popup,setPopup] = useState(false);

  const [mobile,setMobile] = useState(false)

  const [openMenus,setOpenMenus] = useState([])

  const [menuOpen, setMenuOpen] = useState(false)

  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

const [fixed, setFixed] = useState(false);

const navRef = useRef(null);
const toggleRef = useRef(null);
const closeRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    setFixed(window.scrollY > 100);
  };

  const checkDevice = () =>{
    const width = window.innerWidth;
    const isMobile = width<1200;
    setMobile(isMobile);
    if(!isMobile){
      setMenuOpen(false);
    }
  }

  handleScroll();
  checkDevice();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkDevice);

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", checkDevice);

  };
}, []);

useEffect(() => {
  if(!menuOpen) return;

  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
  };
}, [menuOpen]);

useEffect(() => {
  if(!menuOpen) return;

  const handleOutsideClick = (e) => {
    if(
      navRef.current &&
      !navRef.current.contains(e.target) &&
      toggleRef.current &&
      !toggleRef.current.contains(e.target)
    ){
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  return () => document.removeEventListener("mousedown", handleOutsideClick);
}, [menuOpen]);

useEffect(() => {
  if(menuOpen){
    closeRef.current?.focus();
  }else{
    toggleRef.current?.focus();
  }
}, [menuOpen]);


if(pathname !== prevPathname){
  setPrevPathname(pathname);
  setMenuOpen(false);
  setOpenMenus([]);
}


const isMenuActive = (path) => path.every((key, i) => openMenus[i] === key);

const toggleSubmenu = (path) => {
  setOpenMenus(prev => {
    const isExactMatch = prev.length === path.length && path.every((key, i) => prev[i] === key);
    return isExactMatch ? path.slice(0, -1) : path;
  });
};

const handleSubmenuToggle = (path) => (e) => {
  e.preventDefault();
  e.stopPropagation();
  toggleSubmenu(path);
};

  return (
    <>
    <header id={style.header} className={fixed?"fixed":""}>
<div className={`container ${style.container}`}>
  <Link href='/' className={style.logo} aria-label="Precision  Equipments">
    <Image src="/assets/images/logo.svg" width={245} height={64} alt='Precision Equipments' priority/>
  </Link>

<nav ref={navRef} className={menuOpen?style.navOpen:""}>
  <button
    ref={closeRef}
    type="button"
    className={style.menuClose}
    aria-label="Close menu"
    onClick={()=>setMenuOpen(false)}
  >
    &times;
  </button>
  <ul id={style.main_menu}>
    <li className={isMenuActive(['about'])?`${style.active}`:""}>
      <Link href="/about-us">About Us</Link>
       {mobile &&  <button type="button" onClick={handleSubmenuToggle(['about'])} aria-expanded={isMenuActive(['about'])} aria-label="Toggle About Us submenu" className={`${style.viewMore}`}> <Image src="/assets/images/plus-icon.svg" width={24} height={24} alt=''/> </button> }
         <ul className={style.subMenu}>
          <li> <Link href="/about-us#company-overview">Company Overview</Link> </li>
          <li> <Link href="/about-us#vision-mission">Vision & Mission</Link> </li>
          <li> <Link href="/about-us#leadership">Leadership</Link> </li>
          <li> <Link href="/about-us#accredit">Accreditations & Certificates</Link> </li>
          <li> <Link href="/responsibility">Responsibility</Link> </li>
          <li> <Link href="/clients">Clients</Link> </li>
         </ul>

    </li>

    <li className={isMenuActive(['product'])?`${style.active}`:""}>
      <Link href="/products">Products</Link>
        {mobile &&  <button type="button" onClick={handleSubmenuToggle(['product'])} aria-expanded={isMenuActive(['product'])} aria-label="Toggle Products submenu" className={`${style.viewMore}`}> <Image src="/assets/images/plus-icon.svg" width={24} height={24} alt=''/> </button> }
         <ul className={style.subMenu}>
          <li className={isMenuActive(['product','shell'])?`${style.active}`:""}> <Link href="/products/shell-and-tube-heat-exchangers">Shell and Tube Heat Exchangers</Link>
            {mobile &&  <button type="button" onClick={handleSubmenuToggle(['product','shell'])} aria-expanded={isMenuActive(['product','shell'])} aria-label="Toggle Shell and Tube Heat Exchangers submenu" className={`${style.viewMore}`}> <Image src="/assets/images/plus-icon.svg" width={24} height={24} alt=''/> </button> }
             <ul className={`${style.subMenu} ${style.secondarySubMenu}`}>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#conventional-heat">Conventional Heat Exchangers</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#helixchanger">Helixchanger®</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#rod">Rod Baffle Heat Exchangers</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#cryogenic">Cryogenic Heat Exchangers</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#high-pressure">High Pressure Heat Exchangers</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#low-fin">Low Fin Heat Exchanger</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#high-flux">High Flux Heat Exchangers</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#condensers">Condensers</Link> </li>
                  <li> <Link href="/products/shell-and-tube-heat-exchangers#feed-water-heaters">Feed Water Heaters</Link> </li>
             </ul>
          </li>
          <li> <Link href="/products/plate-and-shell-heat-exchangers">Plate & Shell Heat Exchangers</Link> </li>
          <li> <Link href="/products/plate-frame-heat-exchanger">Plate & Frame Heat Exchanger</Link> </li>
          <li> <Link href="/products/air-fin-cooler-air-cooled-heat-exchangers">Air Fin Cooler & Air Cooled Heat Exchangers</Link> </li>
          <li> <Link href="/products/hairpin-heat-exchangers">Hairpin Heat Exchangers</Link> </li>
          <li> <Link href="/products/double-pipe-heat-exchangers">Double Pipe Heat Exchangers</Link> </li>
          <li> <Link href="/products/pressure-vessels">Pressure Vessels</Link> </li>
          <li> <Link href="/products/columns-reactors">Columns & Reactors</Link> </li>
          <li> <Link href="/products/process-skid">Process Skid</Link> </li>
         </ul>

    </li>


 <li className={isMenuActive(['industries'])?`${style.active}`:""}>
      <Link href="/industries">Industries</Link>
        {mobile &&  <button type="button" onClick={handleSubmenuToggle(['industries'])} aria-expanded={isMenuActive(['industries'])} aria-label="Toggle Industries submenu" className={`${style.viewMore}`}> <Image src="/assets/images/plus-icon.svg" width={24} height={24} alt=''/> </button> }
         <ul className={style.subMenu}>
          <li> <Link href="/industries#oil-and-gas">Oil and Gas</Link> </li>
          <li> <Link href="/industries#petrochemicals">Petrochemicals</Link> </li>
          <li> <Link href="/industries#fertilizers">Fertilizers</Link> </li>
          <li> <Link href="/industries#chemicals">Chemical</Link> </li>
          <li> <Link href="/industries#liquefied-natural-gas">LNG</Link> </li>
          <li> <Link href="/industries#floating-storage-and-regasification-units">FSRU</Link> </li>
          <li> <Link href="/industries#floating-production-storage-offloading">FPSO</Link> </li>
          <li> <Link href="/industries#renewable-energy">Renewable Energy</Link> </li>
          <li> <Link href="/industries#data-centre-cooling">Data Centre Cooling</Link> </li>
         </ul>
    </li>


     <li className={isMenuActive(['capability'])?`${style.active}`:""}>
      <a href="#" >Capability</a>
        {mobile &&  <button type="button" onClick={handleSubmenuToggle(['capability'])} aria-expanded={isMenuActive(['capability'])} aria-label="Toggle Capability submenu" className={`${style.viewMore}`}> <Image src="/assets/images/plus-icon.svg" width={24} height={24} alt=''/> </button> }
         <ul className={style.subMenu}>
          <li> <Link href="/engineering">Engineering</Link> </li>
          <li> <Link href="/manufacturing-facilities-machinery">Manufacturing</Link> </li>
          <li> <Link href="/logistics">Logistics</Link> </li>
         </ul>
    </li>


    <li> <Link href="/knowledge-centre">Knowledge Centre</Link></li>

    <li> <Link href="/contact-us">Contact Us</Link></li>

  </ul>
</nav>


<Button setpopup={setPopup}  href={"#"} classname={`dark_blue ${style.header_btn}`} text={"Request a quote"}/>

<button
  ref={toggleRef}
  type="button"
  className={`${style.menuToggle} ${menuOpen?style.active:""}`}
  aria-expanded={menuOpen}
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  onClick={()=>setMenuOpen(prev=>!prev)}
>
 <Image src="/assets/images/hamburger.svg" width={40} height={40} alt=''/>
</button>

</div>

<div className={style.fixed_goldenJubilee}>
  <Image src='/assets/images/header-fixed.webp' width={100} height={112} alt='Precision Equipments anniversary badge' />
</div>
    </header>

{popup && 
<RequestQuote setpopup={setPopup}/>
}

    </>
  )
}
