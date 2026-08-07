import React from 'react'
import style from '../contact-us-thank-you/thanks.module.css'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Thank You | Precision Equipments",
  description: "Thank you for subscribing to the Precision Equipments newsletter.",
  path: "/newsletter-thank-you",
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
                <p>You have successfully subscribed to our newsletter. Stay tuned for the latest insights, news, and updates from Precision Equipments.</p>
        </div>
    </section>
    </>
  )
}
