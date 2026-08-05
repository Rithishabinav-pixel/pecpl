import Link from 'next/link'
import React from 'react'

export default function Button({href,classname,text,target}) {
  return (
    <Link target={target} href={href} className={`common_btn ${classname}`}>
        <span className='circle'></span>
        <span className='text'>{text}</span>
    </Link>
  )
}
