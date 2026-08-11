"use client"

import Link from 'next/link'
import React from 'react'

export default function Button({dataAos,dataAosDelay,href,classname,text,target,setpopup}) {

  const handleClick = (e) =>{
    if (setpopup) {
      e.preventDefault()
      setpopup(true)
    }
  }

  return (
    <Link target={target} data-aos={dataAos?dataAos:""} data-aos-delay={dataAosDelay?dataAosDelay:""}  href={href} className={`common_btn ${classname}`} onClick={handleClick}>
        <span className='circle'></span>
        <span className='text'>{text}</span>
    </Link>
  )
}
