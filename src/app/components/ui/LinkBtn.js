import React from 'react';
import Image from 'next/image';

export default function LinkBtn({ href,downloadable, classname, text }) {
  return (
    <a href={href} target={downloadable ? "_blank" : "_self"}  className={`link_btn ${classname || ''}`}>
      {classname === 'download_btn' && (
        <Image
          className="download_icon"
          src="/assets/images/download_icon.svg"
          width={24}
          height={24}
          alt=""
        />
      )}

      {text}

      {!classname ? (
        <Image
          className="arrow"
          src="/assets/images/link-arrow.svg"
          width={24}
          height={24}
          alt=""
        />
      ) : classname === 'blue_btn' ? (
        <Image
          className="arrow"
          src="/assets/images/link-arrow-blue.svg"
          width={24}
          height={24}
          alt=""
        />
      ) : classname === 'lightblue_btn' ? (
        <Image
          className="arrow"
          src="/assets/images/link-arrow-lightblue.svg"
          width={24}
          height={24}
          alt=""
        />
      ) : classname === 'download_btn' ? null : (
        <Image
          className="arrow"
          src="/assets/images/link-arrow.svg"
          width={24}
          height={24}
          alt=""
        />
      )}
    </a>
  );
}