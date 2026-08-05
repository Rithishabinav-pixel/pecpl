'use client';

import React from 'react';
import Button from './button';
import { usePathname } from 'next/navigation';

export default function FooterCTA() {
  const pathname = usePathname();

  const isAbout = pathname === '/about-us';

  return (
    <section className="footer_cta_section">
      <div className="container section_container">
        <div className="top_content center">
          <h2 className="common_heading heading">
            {isAbout
              ? "Need High-Performance Equipment? Precision is a Click Away."
              : "Get Efficient Solutions for Your Industrial Needs."
              }
          </h2>

          <p>
            {isAbout
              ? "Connect with us to learn how our 40+ years of engineering excellence can help your business grow with confidence. Our expertise in precision manufacturing ensures reliable performance across diverse industrial applications."
              : "Looking for dependable, high-performance solutions? Let’s talk. We’ll help you find the right equipment for your industrial needs, built with precision and designed to keep your operations running smoothly."
              }
          </p>

          <Button
            href="/contact-us"
            classname="white"
            text="Know more"
          />
        </div>
      </div>
    </section>
  );
}