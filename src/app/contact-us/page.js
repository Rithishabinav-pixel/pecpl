"use client";

import React, { useEffect, useState } from "react";
import style from "./contact.module.css";
import Image from "next/image";
import locations from "../data/locations";
import LinkBtn from "../components/ui/LinkBtn";
import Button from "../components/ui/button";

export default function Page() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

  const generateCaptcha = () => {
    setCaptchaNumbers({
      number1: generateRandomNumber(),
      number2: generateRandomNumber(),
    });
  };

  const [captchaNumbers, setCaptchaNumbers] = useState({
    number1: 0,
    number2: 0,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    captcha: "",
    captchaValidation: true,
  });

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkCaptcha = () => {
    return (
      captchaNumbers.number1 + captchaNumbers.number2 ===
      Number(formData.captcha)
    );
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const isValid = checkCaptcha();

  if (!isValid) {
    setFormData((prev) => ({
      ...prev,
      captchaValidation: false,
      captcha: "",
    }));

    generateCaptcha();
    return;
  }

  console.log("Form Data:", {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    location: formData.location,
    message: formData.message,
  });


  setFormData({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    captcha: "",
    captchaValidation: true,
  });

  generateCaptcha();
};

  return (
    <>
      {/* hero section */}

      <section className={style.heroSection}>
        <div className={`container ${style.heroContainer}`}>
          <div className={style.content}>
            <h1 className="heading">Contact Us</h1>

            <p>
              Whether you’re planning your next project or seeking expert
              guidance, we’re here to help. With a presence in 8 locations, our
              team is always close by, ready to listen, understand your needs,
              and support you with reliable engineering solutions.
            </p>

            <div className={style.contact_details}>
              <div className={style.single}>
                <div className={style.icon}>
                  <Image
                    src="/assets/images/contact-sms-icon.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>

                <div className={style.detail}>
                  <h3>Mail Us</h3>
                  <a href="mailto:sales@pecpl.com">sales@pecpl.com</a>
                </div>
              </div>

              <div className={style.single}>
                <div className={style.icon}>
                  <Image
                    src="/assets/images/contact-call.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>

                <div className={style.detail}>
                  <h3>Call us on</h3>
                  <a href="tel:+914447100603">+91 44 - 4710 0603</a>
                  <a href="tel:+919677255201">+91 96772 55201</a>
                </div>
              </div>

              <div className={style.single}>
                <div className={style.icon}>
                  <Image
                    src="/assets/images/contact-call.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>

                <div className={style.detail}>
                  <h3>Fax</h3>
                  <a href="tel:+914447100604">+91 44 - 4710 0604</a>
                  <p>Ext:119</p>
                </div>
              </div>

              <div className={style.single}>
                <div className={style.detail}>
                  <h3>Social Media</h3>

                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/pages/Precision-Equipments-Chennai/315397315333763"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/images/fb.svg"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.linkedin.com/company/precision-equipments"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/assets/images/linkedin.svg"
                          width={24}
                          height={24}
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}

      <section className={`${style.formSection} no_padding_top`}>
        <div className={`container section_container ${style.formContainer}`}>
          <div className={`top_content center ${style.top_content}`}>
            <h2 className="common_heading heading">
              Your Project. Our Precision. Let’s Talk.
            </h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={style.formControl}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={style.formControl}>
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={style.formControl}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={style.formControl}>
              <label>Your Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className={`${style.formControl} ${style.fullWidth}`}>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className={style.captcha}>
              <div>
                <p>
                  Please prove you are human by solving this calculation
                </p>

                <input
                  type="number"
                  value={captchaNumbers.number1}
                  disabled
                  readOnly
                />

                {" + "}

                <input
                  type="number"
                  value={captchaNumbers.number2}
                  disabled
                  readOnly
                />

                {" = "}

                <input
                  type="number"
                  name="captcha"
                  value={formData.captcha}
                  onChange={handleChange}
                />

                {!formData.captchaValidation && (
                  <p className={style.error}>
                    Please enter a valid captcha.
                  </p>
                )}
              </div>
            </div>

            <button type="submit" className="common_btn">
              Submit
            </button>
          </form>
        </div>
      </section>


{/* locations  */}


                {/* indian office  */}
      <section className={`${style.locationSection} no_padding_top`}>
        <div className={`container section_container ${style.locationContainer}`}>
          <div className={`top_content center ${style.top_content}`}>
            <h2 className="common_heading heading">
              India Office
            </h2>
          </div>
            <div className={style.locationCards}>
            {locations['india'].map((data,index)=>(
                    <div className={style.card} key={index} >
                        <h3 className={style.name}>{data.name}</h3>
                        <div className={style.locationDetails}>
                        <h4>{data.company}</h4>
                        <p>{data.address}</p>
                        {data.email && 
                        <a className={style.email} href={`mailto:${data.email}`}>{data.email}</a>
                        }
                         <div className={style.phones} key={index}>
                        {data.phones.length>0 &&  data.phones.map((item,index)=>(
                            <React.Fragment key={index}>
                        <a className={`${style.phone} ${item.replaceAll(" ","").includes(+9144)?style.landline:""}`} href={`tel:${item.replaceAll(" ","")}`}>{item}</a>
                          </React.Fragment>
                        ))}
                         </div>
                         {data.fax && 
                         <a className={style.fax} href={`tel:${data.fax.replaceAll(" ","")}`}>{data.fax}</a>
                         }

{data.extension && 
                        <p className={style.extension}>
                             {data.extension? "Ext.":"" }
                             {data.extension && data.extension.map((item,index)=>(
                                <React.Fragment key={index}>
                                    {item}
                                </React.Fragment>
                         
                        ))}
                        </p>
                        }
                        
                        {data.website && 
                         <a className={style.website} href={data.website}>{data.website}</a>
                         }
<Button href={data.locationUrl} classname={`light_blue ${style.viewLocation}`} text="View Location" />
                        </div>
                
            </div>
                ))}
            
          </div>
          </div>
          </section>

            {/* Overseas office  */}
      <section className={`${style.locationSection} no_padding_top`}>
        <div className={`container section_container ${style.locationContainer}`}>
          <div className={`top_content center ${style.top_content}`}>
            <h2 className="common_heading heading">
              Overseas
            </h2>
          </div>
          <div className={style.locationCards}>
            {locations['overseas'].map((data,index)=>(
                    <div className={style.card} key={index} >
                        <h3 className={style.name}>{data.country}</h3>
                        <div className={style.locationDetails}>
                        <h4>{data.company}</h4>
                        <p>{data.address}</p>
                        
                         <div className={style.phones} key={index}>
                        {data.phones.length>0 &&  data.phones.map((item,index)=>(
                            <React.Fragment key={index}>
                        <a className={`${style.phone} ${item.replaceAll(" ","").includes(+9144)?style.landline:""}`} href={`tel:${item.replaceAll(" ","")}`}>{item}</a>
                          </React.Fragment>
                        ))}

                        {data.extension && 
                        <p className={style.extension}>
                             {data.extension? "Ext.":"" }
                             {data.extension && data.extension.map((item,index)=>(
                                <React.Fragment key={index}>
                                    {item} {data.extension.length-1===index?"":"/"}
                                </React.Fragment>
                         
                        ))}
                        </p>
                        }


                         </div>
                         {data.fax && 
                         <a className={style.fax} href={`tel:${data.fax.replaceAll(" ","")}`}>{data.fax}</a>
                         }


                        
                        {data.email && 
                        <a className={style.email} href={`mailto:${data.email}`}>{data.email}</a>
                        }

                        {data.website && 
                         <a className={style.website} target="_blank" href={data.website}>{data.website.replace("https://","")}</a>
                         }
<Button href={data.locationUrl} target={`_blank`} classname={`light_blue ${style.viewLocation}`} text="View Location" />
                        </div>
                
            </div>
                ))}
            
          </div>
          </div>
          </section>


    </>
  );
}