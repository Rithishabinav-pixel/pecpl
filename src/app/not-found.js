import React from 'react'
import style from './not-found.module.css'
import Button from './components/ui/button'
import Image from 'next/image'

export default function NotFound() {
  return (
    <>
    
    <section>
      <div className="container">
        <div className={style.number}>
            <Image className={style.image} src="/assets/images/404.svg" width={2364} height={1194} alt='404'/>
            <h2 className={`heading ${style.heading}`}>ERROR 🙁</h2>
            <h3 className={`heading ${style.heading}`}>SORRY.. PAGE NOT FOUND!</h3>
            <p>The page are you looking for doesn’t exist…</p>
            <Button classname="light_blue" href="/" text="Return home"/>
        </div>
        </div>
    </section>
    
    </>
  )
}
