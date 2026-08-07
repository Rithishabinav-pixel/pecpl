import React from 'react'
import style from './thanks.module.css'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'
import Button from '../components/ui/button';

export const metadata = buildMetadata({
  title: "Thank You | Precision Equipments",
  description: "Thank you for applying to Precision Equipments. We have received your application and will get back to you shortly.",
  path: "/career-thank-you",
  noIndex: true,
});

export default function page() {
  return (
    <>
      <section className={style.thanksSection}>
        <div className={`container ${style.thanksContainer}`}>
            <div className={style.image}>
                <Image src="/assets/images/check.png" width={512} height={512} alt=''/>
            </div>
            <h1 className='heading common_heading'>Thank you!</h1>
                <p>We have successfully received your application. Our team will review your details and get back to you as soon as possible. We appreciate your interest in joining Precision Equipments.</p>
                   <Button classname="light_blue" href="/" text="Return home"/>

        </div>
    </section>
    </>
  )
}
