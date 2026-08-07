import React from 'react'
import style from './not-found.module.css'
import Button from './components/ui/button'

export default function NotFound() {
  return (
    <>
    
    <section>
      <div className="container">
        <div className={style.number}>
            <h1>404</h1>
            <h2>ERROR 🙁</h2>
            <h3>SORRY.. PAGE NOT FOUND!</h3>
            <p>The page are you looking for doesn’t exist…</p>
            <Button classname="light_blue" href="/" text="Return home"/>
        </div>
        </div>
    </section>
    
    </>
  )
}
